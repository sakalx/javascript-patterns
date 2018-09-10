import React from 'react';
import Loadable from 'react-loadable';

import LinearProgress from '@material-ui/core/LinearProgress';

const LazyLoad = opts => Loadable(Object.assign({
  loading: () => <LinearProgress
    style={{
      position: 'fixed',
      width: '100%',
      zIndex: 2000,
      top: 0,
      left: 0,
      height: 3,
    }}
  />,
  delay: 66,
}, opts));
export default LazyLoad