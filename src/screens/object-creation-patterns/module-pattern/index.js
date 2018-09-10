import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  example1,
  example2,
  example3,
  example4,
} from './snippets';

const ModulePattern = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Module pattern"
      description={`All the methods are kept private and you only expose those that you decide at the end`}
    />

    <CodeSnippet snippet={example1()}/>
    <CodeSnippet snippet={example2()}/>

    <ScreenContent title="Modules that create constructors"/>
    <CodeSnippet snippet={example3()}/>
    <CodeSnippet snippet={example4()}/>

  </React.Fragment>
);

export default ModulePattern;