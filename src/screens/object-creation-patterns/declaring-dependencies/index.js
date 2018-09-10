import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  example,
} from './snippets';

const DeclaringDependencies = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Declaring dependencies"
      description={`It's good to declare the modules your code relies on at the top`}
    />

    <CodeSnippet snippet={example()}/>

  </React.Fragment>
);

export default DeclaringDependencies;