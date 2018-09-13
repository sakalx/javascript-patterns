import store from "root/redux-core/store";
import styled from 'styled-components';

import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

const {theme} = store.getState();

export const Link = styled('a')`
  text-decoration: none;
`;

export const Title = styled(Typography)`
  &:hover {
    color: ${theme.palette.primary.main};
    text-decoration: underline;
  };
  align-items: center;
  display: flex !important;
  justify-content: center;
  margin: 25px 0 !important;
  background-color: #666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  color: transparent;
  text-shadow: rgba(255,255,255,.5) 0 3px 3px;
  -webkit-box-reflect: below 0 -webkit-linear-gradient(bottom, rgba(255, 255, 255, .5) 0%, transparent 50%, transparent 100%)
`;

export const LinkedinIcon = styled(SvgIcon)`
  margin: 0 10px;
`;