import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  variables,
  handler,
  handlerPrototypes,
  app,
  dialog,
  button,
} from './snippets';

const ChainResponsibility = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Chain of responsibility"
      description={`Delegates commands to a chain of processing objects`}
    />

    <CodeSnippet snippet={variables()}/>
    <CodeSnippet snippet={handler()}/>
    <CodeSnippet snippet={handlerPrototypes()}/>
    <CodeSnippet snippet={app()}/>
    <CodeSnippet snippet={dialog()}/>
    <CodeSnippet snippet={button()}/>

    <Reference list={[
      'https://gist.github.com/1174982',
    ]}/>

  </React.Fragment>
);

export default ChainResponsibility;