import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  constructor,
  staticMethod,
  normalMethod,
  callingStatic,
  creatingInstance,
  constructor2,
  staticMethod2,
  normalMethod2,
  method1,
  method2,
} from './snippets';

const StaticMembers = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Public and Private static members"
      description={`Description:
			 Public Static Members - accessible outside the constructor
			 Private Static Members - shared by all the objects with the same constructor function and not accessible outside the constructor`}
    />

    <ScreenContent
      title="Public static members"
      description={`constructor`}
    />
    <CodeSnippet snippet={constructor()}/>

    <ScreenContent title="Static method"/>
    <CodeSnippet snippet={staticMethod()}/>

    <ScreenContent title="Normal method added to the prototype"/>
    <CodeSnippet snippet={normalMethod()}/>

    <ScreenContent title="Calling a static method"/>
    <CodeSnippet snippet={callingStatic()}/>

    <ScreenContent title="Creating an instance and calling a method"/>
    <CodeSnippet snippet={creatingInstance()}/>

    <ScreenContent title="Constructor"/>
    <CodeSnippet snippet={constructor2()}/>

    <ScreenContent title="Static method"/>
    <CodeSnippet snippet={staticMethod2()}/>

    <ScreenContent title="Normal method added to the prototype"/>
    <CodeSnippet snippet={normalMethod2()}/>

    <ScreenContent
      title="Private Static Members"
      description="Method 1"

    />
    <CodeSnippet snippet={method1()}/>

    <ScreenContent description="Method 2"/>
    <CodeSnippet snippet={method2()}/>

  </React.Fragment>
);

export default StaticMembers;