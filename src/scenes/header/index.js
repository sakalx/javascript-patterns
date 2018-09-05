import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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

const Header = ({toggleTheme, toggleDrawer, location}) => {

  const title = location.state && !!location.state.title && location.state.title || 'JavaScript Patterns';

  const handleToggleMenu = () => {
    toggleDrawer()();
  };

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const handleOpenGithub = () => {
    window.open('https://github.com/sakalx/js-info', '_blank');
  };

  return (
    <Root>
      <AppBar position="fixed">
        <Toolbar>
          <MenuButton color="inherit" aria-label="Menu" onClick={handleToggleMenu}>
            <MenuIcon/>
          </MenuButton>

          <Title variant="headline" color="inherit">
            {title}
          </Title>

          <Tooltip title="Toggle light/dark theme">
            <IconButton color="inherit" onClick={handleToggleTheme}>
              <SvgIcon viewBox="0 0 24 24" color="inherit">
                <path d={lightBulbIco}/>
              </SvgIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="GitHub repository">
            <IconButton color="inherit" onClick={handleOpenGithub}>
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
  toggleTheme,
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);