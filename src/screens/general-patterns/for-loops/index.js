import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  optimal,
  optimization1,
  optimization2,
  optimization3,
  preferred1,
  preferred2,
} from './snippets';

const ForLoops = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="for loops"
      description={`Optimized for loops`}
    />

    <ScreenContent title="sub-optimal loop"/>
    <CodeSnippet snippet={optimal()}/>

    <ScreenContent title="optimization 1 - cache the length of the array with the use of `max`"/>
    <CodeSnippet snippet={optimization1()}/>

    <ScreenContent
      title="optimization 2 - use single var pattern for consistency"
      description={`A drawback is that it makes it a little harder to copy and paste whole loops while refactoring code.`}
    />
    <CodeSnippet snippet={optimization2()}/>

    <ScreenContent
      title="optimization 3 - substitute `i++` with `i = i + 1`  or `i += 1` to avoid excessive trickiness"/>
    <CodeSnippet snippet={optimization3()}/>

    <ScreenContent title="preferred 1"/>
    <CodeSnippet snippet={preferred1()}/>

    <ScreenContent title="preferred 2"/>
    <CodeSnippet snippet={preferred2()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default ForLoops;