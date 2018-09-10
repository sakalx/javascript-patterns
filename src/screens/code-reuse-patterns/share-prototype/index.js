import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  example,
  parentConstructor,
  adding,
  child,
} from './snippets';

const SharePrototype = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Classical Pattern #4 - Share the Prototype (a pattern that should be generally avoided)"
      description={`First borrow the constructor and then also set the child's prototype to point to a new instance of the constructor`}
    />

    <CodeSnippet snippet={example()}/>

    <ScreenContent title="The parent constructor"/>
    <CodeSnippet snippet={parentConstructor()}/>

    <ScreenContent title="Adding functionality to the prototype"/>
    <CodeSnippet snippet={adding()}/>

    <ScreenContent title="child constructor"/>
    <CodeSnippet snippet={child()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default SharePrototype;