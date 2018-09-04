import React from 'react';
import Loadable from 'react-loadable';

const LazyLoad = opts => Loadable(Object.assign({
  loading: () => <span>Loading</span>
}, opts));

export default LazyLoad