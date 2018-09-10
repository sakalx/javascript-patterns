import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  myGlobal,
  prefix_myGlobal,
} from './snippets';

const MinimizingGlobals = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Minimizing Globals"
      description={`They are declared outside of any function or simply used without being declared`}
    />

    <CodeSnippet snippet={myGlobal()}/>

    <ScreenContent
      title="If you have to (gun to your head) use globals like jQuery does think of using a prefix and holding all your information in an object"
    />
    <CodeSnippet snippet={prefix_myGlobal()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default MinimizingGlobals;