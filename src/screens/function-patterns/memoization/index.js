import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import LinkReferences from 'root/components/link-reference';
import ScreenContent from 'root/components/screen-content';

import {
  antipattern,
  preferred1,
  preferred2,
  preferred3,
} from './snippets';

const Memoization = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Memoization"
      description={`Use function properties to avoid repeated computation`}
    />

    <ScreenContent title="Antipattern"/>
    <LinkReferences
      to='https://github.com/shichuan/javascript-patterns/issues/6'
      title='reason see: https://github.com/shichuan/javascript-patterns/issues/6'
    />
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent
      title="Preferred method 1"
      description={`Only one argument using param`}
    />
    <CodeSnippet snippet={preferred1()}/>

    <ScreenContent
      title="Preferred method 2"
      description={`Multiple arguments using JSON stringify.
      This will only work correctly for primitive (and Array) arguments, since the order in which properties of Objects are enumerated is undetermined and can even change between enumerations. (a JSON encoder that sorts the keys won't have this issue).
      `}
    />
    <CodeSnippet snippet={preferred2()}/>

    <ScreenContent
      title="Preferred method 3"
      description={`Multiple arguments using arguments.callee`}
    />
    <CodeSnippet snippet={preferred3()}/>

  </React.Fragment>
);

export default Memoization;