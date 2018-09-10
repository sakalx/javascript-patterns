import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadDisqusComments} from 'root/redux-core/actions/disqus';
import {toggleTheme} from 'root/redux-core/actions/theme';

import {githubIco, lightBulbIco} from 'root/static/icons';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';

import {
  MenuButton,
  Root,
  Title,
} from './style';

let locationPath;

const Header = ({loadDisqusComments, toggleTheme, toggleDrawer, location}) => {

  const title = location.state && location.state.title || 'JavaScript Patterns';

  const hasChangeLocation = location.pathname !== locationPath;

  const handleDisqus = () => {

    const disqusConfig = {
      identifier: `UID${location.pathname}`,
      title,
      url: `https://patterns-js.firebaseapp.com${location.pathname}`,
    };

    loadDisqusComments(disqusConfig)
  };

  if (hasChangeLocation) {
    locationPath = location.pathname;
    handleDisqus();
  }

  return (
    <Root>
      <AppBar position="fixed">
        <Toolbar>
          <MenuButton
            aria-label="Menu"
            color="inherit"
            onClick={() => toggleDrawer()()}
          >
            <MenuIcon/>
          </MenuButton>

          <Title variant="headline" color="inherit">
            {title}
          </Title>

          <Tooltip title="Toggle light/dark theme">
            <IconButton color="inherit" onClick={toggleTheme}>
              <SvgIcon viewBox="0 0 24 24" color="inherit">
                <path d={lightBulbIco}/>
              </SvgIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="GitHub repository">
            <IconButton
              color="inherit"
              onClick={() => window.open('https://github.com/sakalx/js-info', '_blank')}
            >
              <SvgIcon viewBox="0 0 24 24" color="inherit">
                <path d={githubIco}/>
              </SvgIcon>
            </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>
    </Root>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDisqusComments,
  toggleTheme,
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);