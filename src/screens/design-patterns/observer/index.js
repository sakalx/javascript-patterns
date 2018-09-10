import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  observer,
  blogger,
  jackJill,
  invoke,
} from './snippets';

const Observer = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Observer"
      description={`Is a publish/subscribe pattern which allows a number of observer objects to see an event`}
    />

    <CodeSnippet snippet={observer()}/>
    <CodeSnippet snippet={blogger()}/>
    <CodeSnippet snippet={jackJill()}/>
    <CodeSnippet snippet={invoke()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Observer;