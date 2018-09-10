import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  basic,
  superclass,
  resetting,
  closure1,
  closure2,
  adding,
  child,
} from './snippets';

const TemporaryConstructor = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Classical Pattern #5 - A Temporary Constructor (a pattern that should be generally avoided)"
      description={`First borrow the constructor and then also set the child's prototype to point to a new instance of the constructor`}
    />

    <ScreenContent title="Basic"/>
    <CodeSnippet snippet={basic()}/>

    <ScreenContent title="Storing the superclass"/>
    <CodeSnippet snippet={superclass()}/>

    <ScreenContent title="Resetting the constructor pointer"/>
    <CodeSnippet snippet={resetting()}/>

    <ScreenContent title="In closure"/>
    <CodeSnippet snippet={closure1()}/>
    <CodeSnippet snippet={closure2()}/>

    <ScreenContent title="Adding functionality to the prototype"/>
    <CodeSnippet snippet={adding()}/>

    <ScreenContent title="Child constructor"/>
    <CodeSnippet snippet={child()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default TemporaryConstructor;