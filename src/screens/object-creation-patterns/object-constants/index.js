import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  example,
  checkDefined,
  defined,
  checkAgain,
  attempt,
  intact,
} from './snippets';

const ObjectConstants = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Object constants"
      description={`An implementation of a constant object provides set, isDefined and get methods`}
    />

    <CodeSnippet snippet={example()}/>

    <ScreenContent title="Check if defined"/>
    <CodeSnippet snippet={checkDefined()}/>

    <ScreenContent title="Define"/>
    <CodeSnippet snippet={defined()}/>

    <ScreenContent title="Check again"/>
    <CodeSnippet snippet={checkAgain()}/>

    <ScreenContent title="Attempt to redefine"/>
    <CodeSnippet snippet={attempt()}/>

    <ScreenContent title="Is the value still intact?"/>
    <CodeSnippet snippet={intact()}/>

  </React.Fragment>
);

export default ObjectConstants;