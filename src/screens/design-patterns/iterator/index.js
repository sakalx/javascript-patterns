import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  init,
  loop,
  goBack,
} from './snippets';

const Iterator = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Iterator"
      description={`Implements a specialized language`}
    />

    <CodeSnippet snippet={init()}/>

    <ScreenContent title="This loop logs 1, then 3, then 5"/>
    <CodeSnippet snippet={loop()}/>

    <ScreenContent title="Go back"/>
    <CodeSnippet snippet={goBack()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#iteratorpatternjquery',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Iterator;