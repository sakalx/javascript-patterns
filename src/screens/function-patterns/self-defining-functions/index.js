import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  func,
  adding,
  assigning,
  usingAsMethod,
  callingWithNewName,
  callingAsMethod,
  usingSelfDefined,
} from './snippets';

const SelfDefiningFunctions = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Self-defining functions"
      description={`Self-overwrite with new bodies to do less work from the second invocation and after`}
    />

    <CodeSnippet snippet={func()}/>

    <ScreenContent title="1. Adding a new property"/>
    <CodeSnippet snippet={adding()}/>

    <ScreenContent title="2. Assigning to a different name"/>
    <CodeSnippet snippet={assigning()}/>

    <ScreenContent title="3. Using as a method"/>
    <CodeSnippet snippet={usingAsMethod()}/>

    <ScreenContent title="Calling with a new name"/>
    <CodeSnippet snippet={callingWithNewName()}/>

    <ScreenContent title="Calling as a method"/>
    <CodeSnippet snippet={callingAsMethod()}/>

    <ScreenContent title="Using the self-defined function"/>
    <CodeSnippet snippet={usingSelfDefined()}/>

  </React.Fragment>
);

export default SelfDefiningFunctions;