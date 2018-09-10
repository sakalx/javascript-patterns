import {LOAD_DISQUS} from '../types';

export const loadDisqusComments = payload => ({
  type: LOAD_DISQUS,
  payload,
});