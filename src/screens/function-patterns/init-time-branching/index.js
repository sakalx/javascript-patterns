import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  before,
  interFace,
  implementation,
} from './snippets';

const InitTimeBranching = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Init-time branching"
      description={`Branch code once during initialization`}
    />

    <ScreenContent title="Before"/>
    <CodeSnippet snippet={before()}/>

    <ScreenContent title="The interface"/>
    <CodeSnippet snippet={interFace()}/>

    <ScreenContent title="The implementation"/>
    <CodeSnippet snippet={implementation()}/>

    <Reference list={[
      'http://www.jspatterns.com/',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default InitTimeBranching;