import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  example,
  methodCall,
} from './snippets';

const ChainingPattern = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Chaining pattern"
      description={`It enables you to call methods on an object one after the other`}
    />

    <CodeSnippet snippet={example()}/>

    <ScreenContent title="Chain method calls"/>
    <CodeSnippet snippet={methodCall()}/>

    <ScreenContent
      description={`as opposed to calling them one by one
      obj.increment();
      obj.add(3);
      obj.shout();`}
    />

  </React.Fragment>
);

export default ChainingPattern;