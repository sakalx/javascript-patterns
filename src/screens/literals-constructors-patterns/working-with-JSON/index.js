import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  inputJSON,
  antipattern,
  preferred,
} from './snippets';

const WorkingWithJSON = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Working with JSON"
      description={`Use library from JSON.org or YUI, jQuery library`}
    />

    <ScreenContent title="An input JSON string"/>
    <CodeSnippet snippet={inputJSON()}/>

    <ScreenContent title="Antipattern"/>
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent
      title="Preferred"
      description={`JSON.org library`}
    />
    <CodeSnippet snippet={preferred()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default WorkingWithJSON;