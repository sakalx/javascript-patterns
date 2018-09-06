import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  pattern1,
  pattern2,
  pattern3,
} from './snippets';

const Parseint = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Number Conversions with parseInt()"
      description={`Use the second radix parameter`}
    />

    <ScreenContent
      title="Pattern 1"
      description={`NOTE:
      In this example, if you omit the radix parameter like parseInt(year), the returned value will be 0, because "09" assumes octal number (as if you did parseInt( year, 8 )) and 09 is not a valid digit in base 8.
      If we omit the radix parameter then the returned value is not zero, it takes base 10 in chrome console.please check
      `}
    />
    <CodeSnippet snippet={pattern1()}/>

    <ScreenContent
      title="Pattern 2"
      description={`NOTE:
      If you're expecting input such as “08 hello”, parseInt() will return a number, whereas the others will fail with NaN.
      If the input string begins with "0", radix is eight (octal) or 10 (decimal).
      Exactly which radix is chosen is *implementation-dependent*.
      ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet.  For this reason always specify a radix when using parseInt.
      `}
    />
    <CodeSnippet snippet={pattern2()}/>

    <ScreenContent
      title="Pattern 3"
      description={`NOTE:
      Bit operator parsing to int and chunk float vars, if a string has characters it return zero (0)
      `}
    />
    <CodeSnippet snippet={pattern3()}/>

    <Reference list={[
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt',
      'http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/',
    ]}/>

  </React.Fragment>
);

export default Parseint;