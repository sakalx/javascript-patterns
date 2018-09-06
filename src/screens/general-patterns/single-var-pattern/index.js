import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {pattern, preferredWay} from './snippets';

const SingleVarPattern = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Single var Pattern"
      description={`Use one var statement and declare multiple variables`}
    />

    <ScreenContent
      description={`Benefits:
      1. Provides a single place to look for all the local variables needed by the function
      2. Prevents logical errors when a variable is used before it's defined
      3. Helps you remember to declare variables and therefore minimize globals
      4. Is less code (to type and to transfer over the wire)`}
    />
    <CodeSnippet snippet={pattern()}/>

    <ScreenContent
      title="Preferred way "
      description={`Move commas BEFORE vars
You'll not forget to add one when adding variable to the end of list`}
    />
    <CodeSnippet snippet={preferredWay()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default SingleVarPattern;