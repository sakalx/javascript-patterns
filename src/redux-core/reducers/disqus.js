import {LOAD_DISQUS} from '../types';

const initState = {
  identifier: 'UID/',
  title: 'JavaScript patterns',
  url: 'https://patterns-js.firebaseapp.com',
};

export default function disqus(state = initState, {type, payload}) {

  if (type === LOAD_DISQUS) {
    return payload ? payload : initState;
  }

  return state;
}