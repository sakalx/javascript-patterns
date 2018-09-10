import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  example,
  parentConstructor,
  adding,
  empty,
  inheritance,
  drawback1,
  drawback2,
} from './snippets';

const DefaultPattern = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Classical Pattern #1 - The Default Pattern (a pattern that should be generally avoided)"
      description={`Create an object using the Parent() constructor and assign this object to the Child()'s prototype`}
    />

    <CodeSnippet snippet={example()}/>

    <ScreenContent title="The parent constructor"/>
    <CodeSnippet snippet={parentConstructor()}/>

    <ScreenContent title="Adding functionality to the prototype"/>
    <CodeSnippet snippet={adding()}/>

    <ScreenContent title="Empty child constructor"/>
    <CodeSnippet snippet={empty()}/>

    <ScreenContent title="Inheritance magic happens here"/>
    <CodeSnippet snippet={inheritance()}/>

    <ScreenContent title="Drawback 1: own properties added to `this` is inherited"/>
    <CodeSnippet snippet={drawback1()}/>

    <ScreenContent title="Drawback 2: it doesn't enable you to pass parameters to the child constructor"/>
    <CodeSnippet snippet={drawback2()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default DefaultPattern;