import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  parentConstructor,
  adding,
  child,
} from './snippets';

const RentAndSetPrototype = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Classical Pattern #3 - Rent and Set Prototype (a pattern that should be generally avoided)"
      description={`First borrow the constructor and then also set the child's prototype to point to a new instance of the constructor`}
    />

    <ScreenContent title="The parent constructor"/>
    <CodeSnippet snippet={parentConstructor()}/>

    <ScreenContent title="Adding functionality to the prototype"/>
    <CodeSnippet snippet={adding()}/>

    <ScreenContent title="Child constructor"/>
    <CodeSnippet snippet={child()}/>

    <ScreenContent
      description={`Drawback - the parent constructor is called twice, so it could be inefficient`}
    />

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do',
    ]}/>

  </React.Fragment>
);

export default RentAndSetPrototype;