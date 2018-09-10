import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  validator,
  nonEmpty,
  isNumber,
  isLettersNumbers,
  data,
  config,
  validate,
} from './snippets';

const Strategy = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Strategy"
      description={`Allows one of a family of algorithms to be selected on-the-fly at runtime`}
    />

    <CodeSnippet snippet={validator()}/>

    <ScreenContent title="Checks for non-empty values"/>
    <CodeSnippet snippet={nonEmpty()}/>

    <ScreenContent title="Checks if a value is a number"/>
    <CodeSnippet snippet={isNumber()}/>

    <ScreenContent title="Checks if the value contains only letters and numbers"/>
    <CodeSnippet snippet={isLettersNumbers()}/>

    <CodeSnippet snippet={data()}/>
    <CodeSnippet snippet={config()}/>
    <CodeSnippet snippet={validate()}/>

    <Reference list={[
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#strategypatternjquery',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

  </React.Fragment>
);

export default Strategy;