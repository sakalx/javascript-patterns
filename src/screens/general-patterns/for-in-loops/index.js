import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  object,
  addedToAll,
  antipattern,
  preferred1,
  preferred2,
  preferred3,
  preferred4,
} from './snippets';

const ForInLoops = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="for-in loops"
      description={`optimized for-in loops`}
    />

    <ScreenContent title="The object"/>
    <CodeSnippet snippet={object()}/>

    <ScreenContent
      title="Somewhere else in the code a method was added to all objects"
    />
    <CodeSnippet snippet={addedToAll()}/>

    <ScreenContent
      title="Antipattern"
      description={`for-in loop without checking hasOwnProperty()`}
    />
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent title="Preferred 1"/>
    <CodeSnippet snippet={preferred1()}/>

    <ScreenContent
      title="Preferred 2"
      description={`Benefit is you can avoid naming collisions in case the \`man\` object has redefined \`hasOwnProperty\``}
    />
    <CodeSnippet snippet={preferred2()}/>

    <ScreenContent
      title="Preferred 3"
      description={`Use a local variable to "cache" \`Object.prototype.hasOwnProperty\``}
    />
    <CodeSnippet snippet={preferred3()}/>

    <ScreenContent
      title="Preferred 4"
      description={`Check if object has properties before print output using Object.keys(obj) and length built ins. A good method for not wasting resources and avoiding errors with larger objects`}
    />
    <CodeSnippet snippet={preferred4()}/>

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default ForInLoops;