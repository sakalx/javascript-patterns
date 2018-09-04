import React from 'react';
import connect from 'react-redux/es/connect/connect';

const CodeLine = ({theme, children}) => (
  <code style={{color: theme.palette.secondary.dark}}>
    {children}
  </code>);

const mapStateToProps = ({theme}) => ({
  theme,
});

export default connect(mapStateToProps, null)(CodeLine);