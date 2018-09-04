import styled from 'styled-components';

import store from 'root/redux-core/store';

const {theme} = store.getState();

export const Link = styled('a')`
  &:hover {
    text-decoration: underline;
  };
  color: ${theme.palette.secondary.dark};
  text-decoration: none;
`;