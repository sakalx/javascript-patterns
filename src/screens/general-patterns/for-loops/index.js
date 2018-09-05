import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import snippets from './snippets';

const Foo = () => (
  <React.Fragment>
    <ScreenContent
      header
      title=""
      description={``}
    />

    <ScreenContent
      title=""
      description={``}
    />
    <CodeSnippet snippet={snippets}/>


    <ScreenContent
      title=""
      description={``}
    />
    <CodeSnippet snippet={snippets}/>

    <Reference list={[]}/>

  </React.Fragment>
);

export default Foo;