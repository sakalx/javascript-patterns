import React from 'react';

import {withTheme} from '@material-ui/core/styles';

import {allDash, camelCase} from 'root/helpers/string-methods';
import menuList from 'root/static/menu-list';

import LinkTo from 'root/components/link';

import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  HomeLink,
  HomeLinkTitle,
} from './style';

const menuTitles = menuList.reduce((acc, next) => {
  acc[camelCase(next.label)] = false;

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
      <HomeLink to='/' onClick={() => this.toggleDrawer(false)()}>
        <HomeLinkTitle variant="title" color="textSecondary">
          JS-Patterns
        </HomeLinkTitle>
      </HomeLink>
      <Divider/>
    </React.Fragment>
  );

  render() {
    const {open} = this.state;

    return (
      <Drawer open={open} onClose={this.toggleDrawer(false)}>
        <List component="nav" subheader={this.renderSubHeader()}>

          {menuList.map(item => {
            const label = camelCase(item.label);

            return (
              <div key={label}>
                <ListItem button onClick={() => this.handleExtentMenu(label)}>
                  <ListItemText primary={item.label}
                                primaryTypographyProps={{style: {'fontWeight': 500}}}
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
                        label={link}
                        pathname={`/${allDash(link)}`}
                        state={{title: link}}
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
      </Drawer>
    );
  }
}

export default DrawerMenu;