import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  findNodes,
  hide,
  hiddenNodes,
  blockNodes,
} from './snippets';

const Callback = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Callback patterns"
      description={`When you pass function A to function B as a parameter, function A is a callback function`}
    />

    <CodeSnippet snippet={findNodes()}/>

    <ScreenContent title="Callback function"/>
    <CodeSnippet snippet={hide()}/>

    <ScreenContent title="Find the nodes and hide them as you go"/>
    <CodeSnippet snippet={hiddenNodes()}/>

    <ScreenContent title="You can also use an anonymous function, like this:"/>
    <CodeSnippet snippet={blockNodes()}/>

    <Reference list={[
      'http://www.jspatterns.com/',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Callback;