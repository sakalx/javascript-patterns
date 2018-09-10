import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  example1,
  example2,
  example3,
} from './snippets';

const Method = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="method() Method"
      description={`Adding convenient functionality to a language`}
    />

    <CodeSnippet snippet={example1()}/>
    <CodeSnippet snippet={example2()}/>
    <CodeSnippet snippet={example3()}/>

  </React.Fragment>
);

export default Method;