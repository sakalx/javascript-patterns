import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';
import LinkReferences from 'root/components/link-reference';

import {normal, alternative1, alternative2, alternative3, alternative4, alternative5} from './snippets';

const Conditionals = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Conditionals"
      description={`Pattern and antipattern of using "if else"`}
    />

    <ScreenContent description={`NOTE:
            Paul Irish states that the first statement (normal pattern) is only an antipattern when optimizing for low-bandwidth source (such as for a bookmarklet).
            Using the normal pattern will generally outperform the regex (alternative method 1) in a loop, and is faster than the object literal (alternative method 2) for lower numbers of conditions, they generally even out around 10 conditions.`}
    />
    <LinkReferences
      title="See http://jsperf.com/if-this-or-that"
      to="http://jsperf.com/if-this-or-that"
    />
    <br/><br/>


    <ScreenContent title="Normal pattern"/>
    <CodeSnippet snippet={normal}/>


    <ScreenContent title="Alternative method 1 - regex test"/>
    <CodeSnippet snippet={alternative1}/>

    <ScreenContent title="Alternative method 2 - object literal lookup (smaller if < 5 items)"/>
    <CodeSnippet snippet={alternative2}/>

    <ScreenContent
      title="Alternative method 3 - binary-search-like approach"
      description="This approach is best when there are ranges of values for which to test"
    />
    <CodeSnippet snippet={alternative3}/>

    <ScreenContent
      title="Alternative method 4 - object/array lookup tables"
      description="Most useful when there is logical mapping between a single key and a single value"
    />
    <CodeSnippet snippet={alternative4}/>

    <ScreenContent
      title="Alternative method 5 - only using logical operators"
      description="Shorter way to use simple statements"
    />
    <CodeSnippet snippet={alternative5}/>

    <Reference list={[
      'http://paulirish.com/2009/perf/',
    ]}/>

  </React.Fragment>
);

export default Conditionals;