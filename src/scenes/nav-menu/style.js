import styled from 'styled-components';

import store from 'root/redux-core/store';

import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const {theme} = store.getState();

export const HomeLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  };
  color: ${theme.palette.primary.main};
  text-decoration: none;
`;

export const HomeLinkTitle = styled(Typography)`
  &:hover {
    color: ${theme.palette.primary.main};
  };
  padding: 12px 24px;
`;