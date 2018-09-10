import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  antipattern1,
  preferred1,
  antipattern2,
  preceding,
  preferred2,
} from './snippets';

const ProblemWithGlobals = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="The Problem with Globals"
      description={`The problem is that they are shared among all the code in your JavaScript application or web page`}
    />

    <ScreenContent title="Antipattern 1"/>
    <CodeSnippet snippet={antipattern1()}/>

    <ScreenContent title="Preferred 1"/>
    <CodeSnippet snippet={preferred1()}/>

    <ScreenContent title="Antipattern 2"/>
    <CodeSnippet snippet={antipattern2()}/>

    <ScreenContent description={`The preceding code snippet will behave as if you've typed the following`}/>
    <CodeSnippet snippet={preceding()}/>

    <ScreenContent title="Preferred 2"/>
    <CodeSnippet snippet={preferred2()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default ProblemWithGlobals;