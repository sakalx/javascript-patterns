import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  functionF,
  test,
  apply,
  assigning,
  passing,
  bind,
} from './snippets';

const BorrowingMethods = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Borrowing methods"
      description={`Reuse one or two methods of an existing object without forming a parent-child relationship with that object`}
    />

    <CodeSnippet snippet={functionF()}/>

    <ScreenContent title="Test"/>
    <CodeSnippet snippet={test()}/>

    <ScreenContent title="Apply two to original object one."/>
    <CodeSnippet snippet={apply()}/>

    <ScreenContent title="Assigning to a variable `this` will point to the global object"/>
    <CodeSnippet snippet={assigning()}/>

    <ScreenContent title="Passing as a callback"/>
    <CodeSnippet snippet={passing()}/>

    <ScreenContent
      title="ECMAScript 5 adds a method bind() to Function.prototype, making it just as easy to use as apply() and call()."/>
    <CodeSnippet snippet={bind()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default BorrowingMethods;