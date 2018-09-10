import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  partialAny,
  legitimate,
} from './snippets';

const PartialApplication = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Partial application"
      description={`The process of fixing a number of arguments to a function, producing another function of smaller arity`}
    />

    <CodeSnippet snippet={partialAny()}/>


    <ScreenContent title="Slightly more legitimate example"/>
    <CodeSnippet snippet={legitimate()}/>

    <Reference list={[
      'http://msdn.microsoft.com/en-us/magazine/gg575560.aspx',
    ]}/>

  </React.Fragment>
);

export default PartialApplication;