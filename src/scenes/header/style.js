import styled, {css} from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const _flexGrow = css`
  flex-grow: 1;
`;

export const Root = styled('div')`
  ${_flexGrow};
`;

export const MenuButton = styled(IconButton)`
  margin-left: -12px !important;;
  margin-right: 20px !important;
`;

export const Title = styled(Typography)`
  ${_flexGrow};
`;