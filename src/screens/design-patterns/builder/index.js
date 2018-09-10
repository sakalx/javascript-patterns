import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  getBeerById,
  getBeerByIdBridge,
} from './snippets';

const Builder = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Builder"
      description={`Сonstructs complex objects by separating construction and representation`}
    />

    <CodeSnippet snippet={getBeerById()}/>

    <ScreenContent description={`<button id="test">Test</button>`}/>
    <CodeSnippet snippet={getBeerByIdBridge()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#builderpatternjquery',
    ]}/>

  </React.Fragment>
);

export default Builder;