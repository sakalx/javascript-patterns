import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  object,
  inheritFrom,
  newObject,
  parentConstructor,
  propertyAdded,
  newPerson,
  inherit,
  test,
  inherit2,
  addition,
} from './snippets';

const PrototypalInheritance = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Prototypal Inheritance"
      description={`Objects inherit from other objects`}
    />

    <CodeSnippet snippet={object()}/>

    <ScreenContent title="Object to inherit from"/>
    <CodeSnippet snippet={inheritFrom()}/>

    <ScreenContent title="The new object"/>
    <CodeSnippet snippet={newObject()}/>

    <ScreenContent title="Parent constructor"/>
    <CodeSnippet snippet={parentConstructor()}/>

    <ScreenContent description="Property added to the prototype"/>
    <CodeSnippet snippet={propertyAdded()}/>

    <ScreenContent description="Create a new person"/>
    <CodeSnippet snippet={newPerson()}/>

    <ScreenContent description="Inherit"/>
    <CodeSnippet snippet={inherit()}/>

    <ScreenContent description="Test that both the own property and the prototype property were inherited"/>
    <CodeSnippet snippet={test()}/>

    <ScreenContent title="Parent constructor"/>
    <CodeSnippet snippet={parentConstructor()}/>

    <ScreenContent description="Property added to the prototype"/>
    <CodeSnippet snippet={propertyAdded()}/>

    <ScreenContent description="Inherit"/>
    <CodeSnippet snippet={inherit2()}/>

    <ScreenContent title="Addition to ECMAScript 5"/>
    <CodeSnippet snippet={addition()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default PrototypalInheritance;