import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  klass,
  man,
  superMan,
} from './snippets';

const Klass = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Klass (a pattern that should be generally avoided)"
      description={`Generally a pattern that should be avoided unless one is more comfortable with class than prototype`}
    />

    <ScreenContent
      title="Drawback: it brings the whole confusing notion of classes, which don’t technically exist in the language"
      description={`Benefit:
      you can tweak the syntax and the conventions to resemble another of your favorite languages`}
    />
    <CodeSnippet snippet={klass()}/>
    <CodeSnippet snippet={man()}/>
    <CodeSnippet snippet={superMan()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default Klass;