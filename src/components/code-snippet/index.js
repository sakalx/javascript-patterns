import React from 'react';
import connect from 'react-redux/es/connect/connect';

import SyntaxHighlighter from 'react-syntax-highlighter';

import Paper from '@material-ui/core/Paper';

const CodeSnippet = ({theme, snippet}) => (
  <React.Fragment>
    <Paper elevation={1}>
      <SyntaxHighlighter language='javascript' style={theme.palette.codeStyle}>
        {String(snippet)}
      </SyntaxHighlighter>
    </Paper>
    <br/><br/>
  </React.Fragment>
);

const mapStateToProps = ({theme}) => ({
  theme,
});

export default connect(mapStateToProps, null)(CodeSnippet);