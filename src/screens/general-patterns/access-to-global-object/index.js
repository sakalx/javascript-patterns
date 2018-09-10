import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import LinkReferences from 'root/components/link-reference';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  accessToGlobalObject,
} from './snippets';

const AccessToGlobalObject = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Access to the Global Object"
      description={`Access the global object without hard-coding the identifier window`}
    />

    <ScreenContent
      title="Access to the Global Object this should work in ES3, ES5 and ES5-strict."
    />
    <CodeSnippet snippet={accessToGlobalObject()}/>

    <LinkReferences
      title="Test Cases"
      to="http://jsperf.com/globalx/7"
    />
    <br/><br/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default AccessToGlobalObject;