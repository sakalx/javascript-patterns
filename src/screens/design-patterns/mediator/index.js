import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  player,
  scoreboard,
  mediator,
  go,
  gameOver,
} from './snippets';

const Mediator = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Mediator"
      description={`Allows loose coupling between classes by being the only class that has detailed knowledge of their methods`}
    />

    <CodeSnippet snippet={player()}/>
    <CodeSnippet snippet={scoreboard()}/>
    <CodeSnippet snippet={mediator()}/>

    <ScreenContent title="Go!"/>
    <CodeSnippet snippet={go()}/>

    <ScreenContent title="Game over in 30 seconds"/>
    <CodeSnippet snippet={gameOver()}/>

    <Reference list={[
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Mediator;