import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routers from 'root/scenes/navigation/routers';

import {connect} from 'react-redux';

import styled from 'styled-components';
import {MuiThemeProvider} from '@material-ui/core/styles';

import {DiscussionEmbed} from 'disqus-react';

import {allDash} from 'root/helpers/string-methods';

import Header from './scenes/header';
import Navigation from './scenes/navigation';
import Footer from './scenes/footer';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
            </MainContent>

            <Disqus component='section' elevation={1}>
              <Typography variant='display1'>
                Comments {theme.palette.background.default}
              </Typography>
              <DiscussionEmbed foo={theme.palette.background.default} config={disqus} shortname='javascript-patterns'/>
            </Disqus>

            <Footer/>

          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const MainContent = styled('main')`
  margin-bottom: 15px;
  min-height: 100vh;
  padding: 100px 7vw 15px;
`;

const Disqus = styled(Paper)`
  margin: 15px 6vw;
  padding: 15px 1vw;
`;


const mapStateToProps = ({disqus, theme}) => ({
  disqus,
  theme,
});

export default connect(mapStateToProps, null)(App);
