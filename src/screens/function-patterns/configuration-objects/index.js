import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  conf,
} from './snippets';

const ConfigurationObjects = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Configuration objects"
      description={`Keep control of function arguments and makes it easily configurable`}
    />

    <CodeSnippet snippet={conf()}/>

    <Reference list={[
      'http://www.jspatterns.com/',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default ConfigurationObjects;