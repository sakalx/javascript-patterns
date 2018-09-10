import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import ScreenContent from 'root/components/screen-content';

import {
  example,
} from './snippets';

const RevelationPattern = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Revelation pattern"
      description={`It is about having private methods, which you also expose as public methods`}
    />

    <CodeSnippet snippet={example()}/>

  </React.Fragment>
);

export default RevelationPattern;