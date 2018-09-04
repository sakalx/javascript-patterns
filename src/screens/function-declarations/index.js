import React from 'react';

import CodeLine from 'root/components/code-line';
import CodeSnippet from 'root/components/code-snippet';
import LinkReferences from 'root/components/link-references';
import ScreenContent from 'root/components/screen-content';

const FunctionDeclarations = () => {

  return (
    <React.Fragment>
      <ScreenContent
        header
        title="Function Declarations"
        description="Creating anonymous functions and assigning them to a variable"
      />

      <ScreenContent
        title="There is one benefit for this type of function declaration:"
        description={(() => (
          <React.Fragment>
            <span>Benefits:</span><br/>
            <span>         1. You can call
              <CodeLine> getData() </CodeLine>
              before the declaration.
            </span>
          </React.Fragment>
        ))()}
      />
      <CodeSnippet codeLines="function getData() {}"/>

      <ScreenContent
        title="Preferred"
        description={`Benefits:
          1. Makes it easier to understand "functions as an object".
          2. It enforces good semicolon habits.
          3. Doesn't have much of the baggage traditionally associated with functions and scope.`}
      />
      <CodeSnippet codeLines="const getData = function() {};"/>

      <ScreenContent
        title="Named function expression"
        description={`Benefits:
          1. Provides the debugger with an explicit function name: helps stack inspection.`}
      />
      <CodeSnippet codeLines="const getData = function getData() {};"/>

      <ScreenContent
        title="Named function expression + 'F'"
        description={`Benefits:
          1. Gets rid of (anonymous function) in stack traces.`}
      />
      <CodeSnippet codeLines="const getData = function getDataF() {};"/>

      <ScreenContent
        component="nav"
        title="References"
        titleVariant="display1"
      >
        <ul>
          <li>
            <LinkReferences title="http://ejohn.org/blog/javascript-as-a-first-language/"/>
          </li>
          <li>
            <LinkReferences title="http://kangax.github.com/nfe/"/>
          </li>
        </ul>
      </ScreenContent>

    </React.Fragment>
  )
};

export default FunctionDeclarations;