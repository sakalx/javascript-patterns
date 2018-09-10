import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  unsafe,
  better,
  shorter,
  assign,
  skip,
  long,
} from './snippets';

const Namespace = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Namespace Pattern"
      description={`Namespaces help reduce the number of globals required and avoid naming collisions or excessive name prefixing`}
    />

    <ScreenContent title="Unsafe"/>
    <CodeSnippet snippet={unsafe()}/>

    <ScreenContent title="Better"/>
    <CodeSnippet snippet={better()}/>

    <ScreenContent title="Shorter"/>
    <CodeSnippet snippet={shorter()}/>

    <ScreenContent title="Assign returned value to a local var"/>
    <CodeSnippet snippet={assign()}/>

    <ScreenContent title="Skip initial `MYAPP`"/>
    <CodeSnippet snippet={skip()}/>

    <ScreenContent title="Long namespace"/>
    <CodeSnippet snippet={long()}/>

  </React.Fragment>
);

export default Namespace;