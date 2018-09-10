import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  pattern,
} from './snippets';

const ImmediateObjectInitialization = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Immediate object initialization"
      description={`This pattern is mainly suitable for one-off tasks`}
    />

    <CodeSnippet snippet={pattern()}/>

    <Reference list={[
      'http://www.jspatterns.com/',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default ImmediateObjectInitialization;