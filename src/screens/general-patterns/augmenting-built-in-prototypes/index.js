import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {example} from './snippets';

const BuiltInPrototypes = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="(Not) Augmenting Built-in Prototypes"
      description={`It can seriously hurt maintainability, because it will make your code less predictable`}
    />

    <ScreenContent
      title="You can make an exception of the rule only when all these conditions are met:"
      description={`
      1. It's expected that future ECMAScript versions or JavaScript implementations will implement this functionality as a built-in method consistently. For example, you can add methods described in ECMAScript 5 while waiting for the browsers to catch up. In this case you’re just defining the useful methods ahead of time.

      2. You check if your custom property or method doesn't exist already—maybe already implemented somewhere else in the code or already part of the JavaScript engine of one of the browsers you support.

      3. You clearly document and communicate the change with the team.
      `}
    />
    <CodeSnippet snippet={example()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default BuiltInPrototypes;