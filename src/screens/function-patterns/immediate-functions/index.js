import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  example,
  alternative1,
  alternative2,
  crockfords,
} from './snippets';

const ImmediateFunctions = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Immediate functions"
      description={`Syntax that enables function execution as soon as it is defined`}
    />

    <CodeSnippet snippet={example()}/>

    <ScreenContent title="Alternative with less parentheses"/>
    <CodeSnippet snippet={alternative1()}/>

    <ScreenContent title="Another alternative with less parentheses"/>
    <CodeSnippet snippet={alternative2()}/>

    <ScreenContent title="Crockfords the good part book way of doing this"/>
    <CodeSnippet snippet={crockfords()}/>

    <Reference list={[
      'http://www.jspatterns.com/',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default ImmediateFunctions;