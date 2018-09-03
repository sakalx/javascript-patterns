import {createMuiTheme} from '@material-ui/core/styles';

const getTheme = type => createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    type,
  },
});

export default getTheme;