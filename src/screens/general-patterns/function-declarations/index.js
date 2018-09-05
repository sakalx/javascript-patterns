import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {declaration, preferred, namedExpression, namedExpressionF} from './snippets';

const FunctionDeclarations = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Function Declarations"
      description="Creating anonymous functions and assigning them to a variable"
    />

    <ScreenContent
      title="Benefit for this type of function declaration:"
      description={`Benefits:
          1. You can call getData() before the declaration.`}
    />
    <CodeSnippet snippet={declaration()}/>

    <ScreenContent
      title="Preferred"
      description={`Benefits:
          1. Makes it easier to understand "functions as an object".
          2. It enforces good semicolon habits.
          3. Doesn't have much of the baggage traditionally associated with functions and scope.`}
    />
    <CodeSnippet snippet={preferred()}/>

    <ScreenContent
      title="Named function expression"
      description={`Benefits:
          1. Provides the debugger with an explicit function name: helps stack inspection.`}
    />
    <CodeSnippet snippet={namedExpression()}/>

    <ScreenContent
      title="Named function expression + 'F'"
      description={`Benefits:
          1. Gets rid of (anonymous function) in stack traces.`}
    />
    <CodeSnippet snippet={namedExpressionF()}/>

    <Reference list={[
      "http://ejohn.org/blog/javascript-as-a-first-language/",
      "http://kangax.github.com/nfe/",
    ]}/>

  </React.Fragment>
);

export default FunctionDeclarations;