import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  example,
  undefined,
  publicMethod,
  object,
} from './snippets';

const PropertiesAndMethods = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Private properties and methods"
      description={`JavaScript doesn't have special syntax for private members, you can implement them using a closure`}
    />

    <CodeSnippet snippet={example()}/>

    <ScreenContent title="`name` is undefined, it's private"/>
    <CodeSnippet snippet={undefined()}/>

    <ScreenContent title="Public method has access to `name`"/>
    <CodeSnippet snippet={publicMethod()}/>

    <ScreenContent title="This will be the object"/>
    <CodeSnippet snippet={object()}/>

  </React.Fragment>
);

export default PropertiesAndMethods;