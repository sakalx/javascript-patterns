import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {antipattern, pattern} from './snippets';

const Hoisting = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Hoisting"
      description={`var statements anywhere in a function act as if the variables were declared at the top of the function`}
    />

    <ScreenContent title="Antipattern"/>
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent
      title="The preceding code snippet will behave as if it were implemented like so:"
    />
    <CodeSnippet snippet={pattern()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default Hoisting;