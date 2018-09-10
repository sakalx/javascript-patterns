import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  mix,
  cake,
} from './snippets';

const MixIns = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Mix-ins"
      description={`Copy from any number of objects and mix them all into a new object`}
    />

    <CodeSnippet snippet={mix()}/>
    <CodeSnippet snippet={cake()}/>

    <Reference list={[
      'http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript',
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default MixIns;