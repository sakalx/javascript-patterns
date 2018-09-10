import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  parentConstructor,
  adding,
  child,
  drawback1,
  inheritance,
} from './snippets';

const RentConstructor = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Classical Pattern #2 - Rent a Constructor (a pattern that should be generally avoided)"
      description={`It borrows the parent constructor, passing the child object to be bound to this and also forwarding any arguments`}
    />

    <ScreenContent title="The parent constructor"/>
    <CodeSnippet snippet={parentConstructor()}/>

    <ScreenContent title="Adding functionality to the prototype"/>
    <CodeSnippet snippet={adding()}/>

    <ScreenContent title="Child constructor"/>
    <CodeSnippet snippet={child()}/>

    <ScreenContent title="Drawback 1: nothing from the prototype gets inherited"/>
    <CodeSnippet snippet={drawback1()}/>

    <ScreenContent title="Multiple Inheritance by Borrowing Constructors"/>
    <CodeSnippet snippet={inheritance()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default RentConstructor;