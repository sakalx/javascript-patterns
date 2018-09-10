import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  antipattern,
  preferred,
} from './snippets';

const ArrayLiteral = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Array literal"
      description={`Use array literal notation to avoid potential errors when creating dynamic arrays at runtime`}
    />

    <ScreenContent title="Antipattern"/>
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent title="Preferred"/>
    <CodeSnippet snippet={preferred()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default ArrayLiteral;