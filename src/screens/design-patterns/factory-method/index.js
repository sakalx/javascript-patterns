import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  factory,
  builtInFactory,
  test,
} from './snippets';

const FactoryMethod = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Factory method"
      description={`Creates objects without specifying the exact class to create`}
    />

    <CodeSnippet snippet={factory()}/>

    <ScreenContent title="Built-in Object Factory"/>
    <CodeSnippet snippet={builtInFactory()}/>

    <ScreenContent title="Test"/>
    <CodeSnippet snippet={test()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default FactoryMethod;