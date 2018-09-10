import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  mobileEvent,
} from './snippets';

const Facade = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Facade"
      description={`Provides a simplified interface to a large body of code`}
    />

    <CodeSnippet snippet={mobileEvent()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Facade;