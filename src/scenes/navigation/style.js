import styled from 'styled-components';

import store from 'root/redux-core/store';

import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const {theme} = store.getState();

export const HomeLink = styled(Link)`
  color: ${theme.palette.primary.main};
  text-decoration: none;
`;

export const HomeLinkTitle = styled(Typography)`
  &:hover {
    color: ${theme.palette.primary.main};
    text-decoration: underline;
  };
  padding: 12px 24px;
`;

export const NavList = styled(List)`
  padding-bottom: 100px !important;
`;