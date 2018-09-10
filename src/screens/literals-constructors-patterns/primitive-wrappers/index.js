import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  antipattern,
  preferred,
  primitiveString,
  primitiveWrapper,
} from './snippets';

const PrimitiveWrappers = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Primitive Wrappers"
      description={`JavaScript has 3 primitive wrapper objects: number, string, boolean`}
    />

    <ScreenContent
      title="Antipattern"
      description={`With wrappers`}
    />
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent
      title="Preferred"
      description={`Without wrappers`}
    />
    <CodeSnippet snippet={preferred()}/>

    <ScreenContent
      description={`Only use primitive wrappers when you want to augment the value and persist state
      `}
    />

    <ScreenContent title="Primitive string"/>
    <CodeSnippet snippet={primitiveString()}/>

    <ScreenContent title="Primitive wrapper"/>
    <CodeSnippet snippet={primitiveWrapper()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default PrimitiveWrappers;