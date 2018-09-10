import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  antipattern,
  preferred,
} from './snippets';

const RegularExpressionLiteral = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Regular Expression Literal"
      description={`The regular expression literal notation is shorter`}
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

export default RegularExpressionLiteral;