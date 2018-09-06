import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {antipattern, preferred} from './snippets';

const ImpliedTypecasting = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Implied Typecasting"
      description={`Avoid implied typecasting`}
    />

    <ScreenContent
      title="Antipattern"
      description={`
      JavaScript implicitly typecasts variables when you compare them.
      That's why comparisons such as false == 0 or "" == 0 return true
      `}
    />
    <CodeSnippet snippet={antipattern()}/>

    <ScreenContent
      title="Preferred"
      description={`
      To avoid confusion caused by the implied typecasting, always use the === and !== operators that check both the values and the type of the expressions you compare
      `}
    />
    <CodeSnippet snippet={preferred()}/>

    <ScreenContent
      title="NOTE"
      description={`
      There's another school of thought that subscribes to the opinion that it's redundant to use === when == is sufficient.
      For example, when you use typeof you know it returns a string, so there's no reason to use strict equality.
      However, JSLint requires strict equality; it does make the code look consistent and reduces the mental effort when reading code. ("Is this == intentional or an omission?")
      `}
    />

    <Reference list={[
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default ImpliedTypecasting;