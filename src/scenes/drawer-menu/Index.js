import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {stringToCamelCase} from 'root/helpers/camel-case';
import menuList from 'root/static/menu-list';

import LinkTo from 'root/components/link';

import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const menuTitles = menuList.reduce((acc, next) => {
  acc[stringToCamelCase(next.label)] = false;

  return acc
}, {});


class DrawerMenu extends React.PureComponent {
  state = {
    open: false,
    ...menuTitles,
  };

  toggleDrawer = (open = true) => () => {
    this.setState({open});
  };

  handleExtentMenu = menu => {
    this.setState(state => ({[menu]: !state[menu]}));
  };

  renderSubHeader = () => (
    <React.Fragment>
      <Typography variant="display1">Js - info link to '/'</Typography>
      <Divider/>
    </React.Fragment>
  );

  render() {
    const {open} = this.state;

    return (
      <div>
        <Drawer open={open} onClose={this.toggleDrawer(false)}>
          <Router>
            <List component="nav" subheader={this.renderSubHeader()}>

              {menuList.map(item => {
                const label = stringToCamelCase(item.label);

                return (
                  <div key={label}>
                    <ListItem button onClick={() => this.handleExtentMenu(label)}>
                      <ListItemText primary={item.label}
                                    primaryTypographyProps={{style: {'fontWeight': 'bold'}}}
                      />
                    </ListItem>

                    <Collapse in={this.state[label]} timeout="auto" unmountOnExit>
                      <List
                        component="div"
                        disablePadding
                        onClick={() => this.toggleDrawer(false)()}
                        onKeyDown={() => this.toggleDrawer(false)()}
                        role="button"
                      >
                        {item.links.map(link => (
                          <LinkTo
                            key={link}
                            to={`/${link}`}
                            label={link}
                          />
                        ))
                        }
                      </List>
                    </Collapse>
                  </div>
                )
              })
              }
            </List>
          </Router>
        </Drawer>
      </div>
    );
  }
}

export default DrawerMenu;