import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {antipattern, preferred1, preferred2} from './snippets';

const SwitchPattern = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Switch Pattern"
      description={`Improve the readability and robustness of your switch statements`}
    />

    <ScreenContent
      title="Style conventions:"
      description={`
      1. Aligning each \`case\` with \`switch\` (an exception to the curly braces indentation rule).

      2. Indenting the code within each case.

      3. Ending each \`case\` with a clear \`break\`;.

      4. Avoiding fall-throughs (when you omit the break intentionally). If you're absolutely convinced that a fall-through is the best approach, make sure you document such cases, because they might look like errors to the readers of your code.

      5. Ending the \`switch\` with a \`default\`: to make sure there's always a sane result even if none of the cases matched.
      `}
    />

    <ScreenContent title="Antipattern"/>
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent
      title="Preferred 1"
      description={`Cause it is much faster and easy to reuse and read avoid to use switch`}
    />
    <CodeSnippet snippet={preferred1()}/>

    <ScreenContent title="Preferred 2"/>
    <CodeSnippet snippet={preferred2()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default SwitchPattern;