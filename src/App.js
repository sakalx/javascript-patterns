import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//monokai github vs2015
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import * as constant  from 'react-syntax-highlighter/styles/hljs';


import {connect} from 'react-redux';

import {MuiThemeProvider} from '@material-ui/core/styles';
import getTheme from './theme';

import Header from './scenes/header';
import DrawerMenu from './scenes/drawer-menu';

const UserScreen = () => <h1>UserScreen</h1>;

class App extends React.PureComponent {

  render() {
    console.error('APP rendering !!!!');

    const {theme} = this.props;
    document.body.style.backgroundColor = theme.backgroundColor;

    return (
      <MuiThemeProvider theme={getTheme(theme.type)}>
        <Header toggleDrawer={() => this.drawerMenu.toggleDrawer()}/>
        <DrawerMenu ref={drawer => this.drawerMenu = drawer}/>

        <Router>
          <Route path='/user' component={UserScreen}/>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({theme}) => ({
  theme,
});

export default connect(mapStateToProps, null)(App);
