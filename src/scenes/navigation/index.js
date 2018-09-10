import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadDisqusComments} from 'root/redux-core/actions/disqus';

import {allDash, camelCase} from 'root/helpers/string-methods';
import routers from './routers';

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
  NavList,
} from './style';

const menuTitles = routers.reduce((acc, next) => {
  acc[camelCase(next.label)] = false;

  return acc
}, {});

class Navigation extends React.PureComponent {
  state = {
    open: false,
    ...menuTitles,
  };

  componentDidMount() {
    this.props.toggleDrawer(this.handleToggleDrawer);
  }

  handleToggleDrawer = (open = true) => () => {
    this.setState({open});
  };

  handleLinkToHome = () => {
    this.handleToggleDrawer(false)();
    this.props.loadDisqusComments()
  };

  handleExtentMenu = menu => {
    this.setState(state => ({[menu]: !state[menu]}));
  };

  renderSubHeader = () => (
    <React.Fragment>
      <HomeLink to='/' onClick={this.handleLinkToHome}>
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
      <Drawer open={open} onClose={this.handleToggleDrawer(false)}>
        <NavList component="nav" subheader={this.renderSubHeader()}>

          {routers.map(item => {
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
                    onClick={() => this.handleToggleDrawer(false)()}
                    onKeyDown={() => this.handleToggleDrawer(false)()}
                    role="button"
                  >
                    {item.screens.map(screen => (
                      <LinkTo
                        key={screen.label}
                        pathname={`/${allDash(screen.label)}`}
                        state={{title: screen.label}}
                      />
                    ))}
                  </List>
                </Collapse>
              </div>
            )
          })
          }
        </NavList>
      </Drawer>
    );
  }
}

const mapStateToProps = ({disqus}) => ({
  disqus,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDisqusComments,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);