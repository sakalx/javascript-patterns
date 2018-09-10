import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  setup,
  usingSetup,
  setup2,
  usingSetup2,
} from './snippets';

const ReturningFunctions = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Returning functions"
      description={`One function returns another function or create another function on-demand`}
    />

    <CodeSnippet snippet={setup()}/>

    <ScreenContent title="Using the setup function"/>
    <CodeSnippet snippet={usingSetup()}/>

    <ScreenContent
      title="Your setup function can store some private data in a closure and use that data somehow."
      description={`Here setup() creates a counter function, which gives a next ID for example. But the count variable is not exposed.`}
    />
    <CodeSnippet snippet={setup2()}/>

    <ScreenContent title="Usage"/>
    <CodeSnippet snippet={usingSetup2()}/>

    <Reference list={[
      'http://www.jspatterns.com/returning-functions/',
    ]}/>

  </React.Fragment>
);

export default ReturningFunctions;