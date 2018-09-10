import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  copy,
  deepCopy,
} from './snippets';

const InheritanceCopyingProperties = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Inheritance by Copying Properties"
      description={`An object gets functionality from another object, simply by copying it`}
    />

    <ScreenContent title="Shallow copy"/>
    <CodeSnippet snippet={copy()}/>

    <ScreenContent title="Deep copy"/>
    <CodeSnippet snippet={deepCopy()}/>

  </React.Fragment>
);

export default InheritanceCopyingProperties;