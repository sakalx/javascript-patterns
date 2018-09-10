import styled from 'styled-components';

import {Link} from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export const WrapLink = styled(Link)`
  text-decoration: none;
`;

export const LinkTitle = styled(ListItemText)`
  padding-left: 16px !important;
`;