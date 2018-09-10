import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  object,
  universe,
  testing,
  instance1,
  instance2,
  adding1,
  adding2,
  originalPrototype,
  right,
} from './snippets';

const Singleton = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Singleton"
      description={`Restricts object creation for a class to only one instance`}
    />

    <CodeSnippet snippet={object()}/>
    <CodeSnippet snippet={universe()}/>

    <ScreenContent title="Testing"/>
    <CodeSnippet snippet={testing()}/>

    <ScreenContent title="Instance in a closure"/>
    <CodeSnippet snippet={instance1()}/>
    <CodeSnippet snippet={instance2()}/>

    <ScreenContent title="Testing"/>
    <CodeSnippet snippet={testing()}/>

    <ScreenContent title="Adding to the prototype"/>
    <CodeSnippet snippet={adding1()}/>

    <ScreenContent title="Again adding to the prototype after the initial object is created"/>
    <CodeSnippet snippet={adding2()}/>

    <ScreenContent title="Only the original prototype was linked to the objects"/>
    <CodeSnippet snippet={originalPrototype()}/>

    <ScreenContent title="That sounds right:"/>
    <CodeSnippet snippet={right()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Singleton;