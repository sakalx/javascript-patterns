import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  constructor,
  antipattern,
  preferred1,
  preferred2,
} from './snippets';

const EnforcingNew = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Enforcing new"
      description={`When you forget \`new\`, \`this\` inside the constructor will point to the global object`}
    />

    <ScreenContent title="Constructor"/>
    <CodeSnippet snippet={constructor()}/>

    <ScreenContent
      title="Antipattern"
      description={`forgotten \`new\``}
    />
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent title="Preferred"/>
    <CodeSnippet snippet={preferred1()}/>

    <ScreenContent
      title="Preferred"
      description={`
      You can also guarantee that this situation never occurs by guaranteeing new instances;
      Similar to how you can call $() and $.Deferred() in the same way as new $() and new $.Deferred():
      `}
    />
    <CodeSnippet snippet={preferred2()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default EnforcingNew;