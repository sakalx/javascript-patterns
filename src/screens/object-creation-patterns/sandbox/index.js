import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  sandbox,
  properties,
  using,
} from './snippets';

const Sandbox = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Sandbox pattern"
      description={`It provides an environment for the modules to work without affecting other modules and their personal sandboxes`}
    />

    <CodeSnippet snippet={sandbox()}/>

    <ScreenContent title="Any prototype properties as needed"/>
    <CodeSnippet snippet={properties()}/>

    <ScreenContent title="How to use"/>
    <CodeSnippet snippet={using()}/>

  </React.Fragment>
);

export default Sandbox;