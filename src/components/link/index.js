import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  WrapLink,
} from './style';

const LinkTo = ({label, pathname, state, activeWhenExact, theme: {palette}}) => (
  <Route
    path={pathname}
    exact={activeWhenExact}
    children={({match}) => (
      <WrapLink to={{pathname, state}}>
        <ListItem button>
          <ListItemText
            primary={label}
            style={{paddingLeft: 16}}
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