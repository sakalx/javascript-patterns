import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import styled from 'styled-components';
import {MuiThemeProvider} from '@material-ui/core/styles';

import {allDash} from 'root/helpers/string-methods';

import LazyLoad from './components/lazy-load';
import Header from './scenes/header';
import DrawerMenu from './scenes/nav-menu';

const Conditionals = LazyLoad({
  loader: () => import('root/screens/general-patterns/conditionals'),
});

const FunctionDeclarations = LazyLoad({
  loader: () => import('root/screens/general-patterns/function-declarations'),
});

class App extends React.PureComponent {

  render() {
    const {theme} = this.props;
    document.body.style.backgroundColor = theme.palette.background.default;

    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <React.Fragment>

            <Route path='/' render={prop => (
              <React.Fragment>
                <Header {...prop} toggleDrawer={() => this.drawerMenu.toggleDrawer()}/>
                <DrawerMenu ref={drawer => this.drawerMenu = drawer}/>
              </React.Fragment>
            )}
            />

            <MainContent>
              <Route path='/Conditionals' component={Conditionals}/>
              <Route path={`/${allDash('Function Declarations')}`} component={FunctionDeclarations}/>
            </MainContent>

          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const MainContent = styled('main')`
  padding: 100px 7vw;
`;

const mapStateToProps = ({theme}) => ({
  theme,
});

export default connect(mapStateToProps, null)(App);
