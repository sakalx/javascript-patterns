import React from 'react';
import {Route} from 'react-router-dom';

import {withTheme} from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  WrapLink,
} from './style';

const LinkTo = ({label, to, activeWhenExact, theme: {palette}}) => (
  <Route
    path={to}
    exact={activeWhenExact}
    children={({match}) => (
      <WrapLink to={to}>
        <ListItem button>
          <ListItemText inset
                        primary={label}
                        primaryTypographyProps={match && ({
                          style: {
                            color: palette.primary.main,
                            fontWeight: 'bold',
                          }
                        })}
          />
        </ListItem>
      </WrapLink>
    )}
  />
);

export default withTheme()(LinkTo);