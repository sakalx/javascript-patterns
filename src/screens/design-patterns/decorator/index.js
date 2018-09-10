import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  tree,
  getDecorator,
  redBalls,
  blueBalls,
  angel,
  invoke,
} from './snippets';

const Decorator = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Decorator"
      description={`Dynamically adds/overrides behaviour in an existing method of an object`}
    />

    <CodeSnippet snippet={tree()}/>
    <CodeSnippet snippet={getDecorator()}/>
    <CodeSnippet snippet={redBalls()}/>
    <CodeSnippet snippet={blueBalls()}/>
    <CodeSnippet snippet={angel()}/>
    <CodeSnippet snippet={invoke()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Decorator;