import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  carManager,
} from './snippets';

const Command = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Command"
      description={`Creates objects which encapsulate actions and parameters`}
    />

    <CodeSnippet snippet={carManager()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript',
    ]}/>

  </React.Fragment>
);

export default Command;