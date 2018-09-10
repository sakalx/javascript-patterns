import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import ListItem from '@material-ui/core/ListItem';

import {
  LinkTitle,
  WrapLink,
} from './style';

const LinkTo = ({pathname, state, activeWhenExact, theme: {palette}}) => (
  <Route
    path={pathname}
    exact={activeWhenExact}
    children={({match}) => (
      <WrapLink to={{pathname, state}}>
        <ListItem button>
          <LinkTitle
            primary={state.title}
            primaryTypographyProps={match && ({
              style: {
                color: palette.primary.main,
                fontWeight: '500',
              }
            })}
          />
        </ListItem>
      </WrapLink>
    )}
  />
);

const mapStateToProps = ({theme}) => ({
  theme,
});

export default connect(mapStateToProps, null)(LinkTo);