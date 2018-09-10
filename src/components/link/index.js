import React from 'react';
import {Route} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadDisqusComments} from 'root/redux-core/actions/disqus';

import ListItem from '@material-ui/core/ListItem';

import {
  LinkTitle,
  WrapLink,
} from './style';

const LinkTo = ({pathname, state, activeWhenExact, theme: {palette}, loadDisqusComments}) => {

  const handleDisqusComments = () => {
    const disqusConfig = {
      identifier: `UID${pathname}`,
      title: state.title,
      url: `https://patterns-js.firebaseapp.com${pathname}`,
    };

    loadDisqusComments(disqusConfig);
  };

  return (
    <Route
      path={pathname}
      exact={activeWhenExact}
      children={({match}) => (
        <WrapLink to={{pathname, state}}>
          <ListItem button onClick={handleDisqusComments}>
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
  )
};

const mapStateToProps = ({disqus, theme}) => ({
  disqus,
  theme,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDisqusComments,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LinkTo);