import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routers from 'root/scenes/navigation/routers';

import {DiscussionEmbed} from 'disqus-react';

import {connect} from 'react-redux';

import styled from 'styled-components';
import {MuiThemeProvider} from '@material-ui/core/styles';

import {allDash} from 'root/helpers/string-methods';

import Header from './scenes/header';
import Navigation from './scenes/navigation';

const screens = routers.reduce((acc, next) => [...acc, ...next.screens], []);

class App extends React.PureComponent {

  render() {
    const {disqus, theme} = this.props;
    document.body.style.backgroundColor = theme.palette.background.default;

    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <React.Fragment>

            <Route path='/' render={prop => (
              <React.Fragment>
                <Header {...prop} toggleDrawer={() => this.handleDrawer()}/>
                <Navigation toggleDrawer={click => this.handleDrawer = click}/>
              </React.Fragment>
            )}
            />

            <MainContent>
              {screens.map(screen => (
                <Route
                  key={screen["label"]}
                  path={`/${allDash(screen.label)}`}
                  component={screen.component}
                />
              ))}

              <DiscussionEmbed config={disqus} shortname='javascript-patterns'/>
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

const mapStateToProps = ({disqus, theme}) => ({
  disqus,
  theme,
});

export default connect(mapStateToProps, null)(App);
