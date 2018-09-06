import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  antipattern1,
  preferred1,
  antipattern2,
  preferred2,
} from './snippets';

const AvoidingEval = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Avoiding eval()"
      description={`Avoid using eval()`}
    />

    <ScreenContent title="Antipattern 1"/>
    <CodeSnippet snippet={antipattern1()}/>

    <ScreenContent title="Preferred 1"/>
    <CodeSnippet snippet={preferred1()}/>

    <ScreenContent
      title="Antipattern 2"
      description={`
      It's also important to remember that passing strings to setInterval(), setTimeout(), and the Function() constructor is, for the most part, similar to using eval() and therefore should be avoided
      `}
    />
    <CodeSnippet snippet={antipattern2()}/>

    <ScreenContent title="Preferred 2"/>
    <CodeSnippet snippet={preferred2()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default AvoidingEval;