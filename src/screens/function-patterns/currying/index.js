import React from 'react';

import CodeSnippet from 'root/components/code-snippet';
import Reference from 'root/components/reference';
import ScreenContent from 'root/components/screen-content';

import {
  define,
  invoke,
  apply,
  efficient,
  add,
  invokeAdd,
  step1,
  step2,
  curriedAdd,
  test,
  schonfinkelize,
  curry,
  plus,
  minus,
  flip,
} from './snippets';

const Currying = () => (
  <React.Fragment>
    <ScreenContent
      header
      title="Currying"
      description={`Used to create new functions dynamically by partially applying a set of arguments in ECMAScript 5, you can use bind to implement curring.`}
    />

    <ScreenContent
      title="Function application"
      description={`Define a function`}
    />
    <CodeSnippet snippet={define()}/>

    <ScreenContent description="Invoke a function"/>
    <CodeSnippet snippet={invoke()}/>

    <ScreenContent description="Apply a function"/>
    <CodeSnippet snippet={apply()}/>

    <ScreenContent description="The second is more efficient, saves an array"/>
    <CodeSnippet snippet={efficient()}/>

    <ScreenContent
      title="Partial application"
      description={`For illustration purposes not valid JavaScript we have this function`}
    />
    <CodeSnippet snippet={add()}/>

    <ScreenContent description={`And we know the arguments`}/>
    <CodeSnippet snippet={invokeAdd()}/>

    <ScreenContent description={`step 1 -- substitute one argument`}/>
    <CodeSnippet snippet={step1()}/>

    <ScreenContent description={`step 2 -- substitute the other argument`}/>
    <CodeSnippet snippet={step2()}/>

    <ScreenContent
      title="Currying"
      description={`A curried add(), accepts partial list of arguments`}
    />
    <CodeSnippet snippet={curriedAdd()}/>

    <ScreenContent description={`Test`}/>
    <CodeSnippet snippet={test()}/>

    <ScreenContent description={`Create and store a new function`}/>
    <CodeSnippet snippet={schonfinkelize()}/>

    <Reference list={[
      'http://www.jspatterns.com/',
      'http://shop.oreilly.com/product/9780596806767.do?sortby=publicationDate',
    ]}/>

    <br/><br/>

    <ScreenContent
      description={`Here's a generic curry function (from kybernetikos):
      It's slightly more complex than the common examples of currying (e.g. the one above), but that's because the function can afterwards be called either in the normal way, or in the curried way.
      If you call a 3 argument curried function with it, the returned function *is also curried*. e.g. you can write func(arg1)(arg2)(arg3) or func(arg1, arg2, arg3) or func(arg1)(arg2, arg3) etc...

      The curry procedure needs to know how many arguments are required before it should calculate the result
      `}/>
    <CodeSnippet snippet={curry()}/>

    <ScreenContent
      description={`Here are some example uses - I use these with a functional immutable list structure implemented in js, but they also work ok for normal higher order functions over arrays.`}/>
    <CodeSnippet snippet={plus()}/>

    <ScreenContent
      description={`Now you can call
      plus(3,2)         // normal call
      plus(3)           // partial application (returns a function that adds 3 to its argument)
      plus(3)(2)        // complete application (returns 5)
      plus()(3)()()(2)  // returns 5
      plus(3, 2, 4, 5)  // the normal call can optionally take more than the minimum number of arguments
      plus(3)(2, 3, 5)  // the last application can too.
      `}/>
    <CodeSnippet snippet={minus()}/>

    <ScreenContent
      description={`flip switches the order of the first two arguments on a function. It is curried itself and the function it returns is curried too. Particularly useful if you want a function that subtracts a number
      `}/>
    <CodeSnippet snippet={flip()}/>

    <ScreenContent
      description={`Now you can call for example
      minus(5)             // returns a function that takes its argument away from 5
      flip(minus)(5)       // returns a function that takes 5 away from its argument
      `}/>

  </React.Fragment>
);

export default Currying;