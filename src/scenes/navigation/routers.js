import Functiondeclarations from 'root/screens/general-patterns/function-declarations/index';
import Conditionals from 'root/screens/general-patterns/conditionals/index';
import Accesstoglobalobject from 'root/screens/general-patterns/access-to-global-object/index';
import Singlevarpattern from 'root/screens/general-patterns/single-var-pattern/index';
import Hoisting from 'root/screens/general-patterns/hoisting/index';
import Forloops from 'root/screens/general-patterns/for-loops/index';
import Forinloops from 'root/screens/general-patterns/for-in-loops/index';
import Augmentingbuiltinprototypes from 'root/screens/general-patterns/augmenting-built-in-prototypes/index';
import Switchpattern from 'root/screens/general-patterns/switch-pattern/index';
import Impliedtypecasting from 'root/screens/general-patterns/implied-typecasting/index';
import Avoidingeval from 'root/screens/general-patterns/avoiding-eval/index';
import Parseint from 'root/screens/general-patterns/parseint/index';
import Minimizingglobals from 'root/screens/general-patterns/minimizing-globals/index';
import Problemwithglobals from 'root/screens/general-patterns/problem-with-globals/index';
import Objectliteral from 'root/screens/literals-constructors-patterns/object-literal/index';
import Enforcingnew from 'root/screens/literals-constructors-patterns/enforcing-new/index';
import Arrayliteral from 'root/screens/literals-constructors-patterns/array-literal/index';
import WorkingwithJSON from 'root/screens/literals-constructors-patterns/working-with-JSON/index';
import Primitivewrappers from 'root/screens/literals-constructors-patterns/primitive-wrappers/index';
import Regularexpressionliteral from 'root/screens/literals-constructors-patterns/regular-expression-literal/index';
import Callback from 'root/screens/function-patterns/callback/index';
import Configurationobjects from 'root/screens/function-patterns/configuration-objects/index';
import Returningfunctions from 'root/screens/function-patterns/returning-functions/index';
import Currying from 'root/screens/function-patterns/currying/index';
import Partialapplication from 'root/screens/function-patterns/partial-application/index';
import Immediatefunctions from 'root/screens/function-patterns/immediate-functions/index';
import Immediateobjectinitializatio from 'root/screens/function-patterns/immediate-object-initializatio/index';
import Inittimebranching from 'root/screens/function-patterns/init-time-branching/index';
import Memoization from 'root/screens/function-patterns/memoization/index';
import Selfdefiningfunctions from 'root/screens/function-patterns/self-defining-functions/index';
import Namespace from 'root/screens/object-creation-patterns/namespace/index';
import Declaringdependencies from 'root/screens/object-creation-patterns/declaring-dependencies/index';
import Privatepropertiesandmethods from 'root/screens/object-creation-patterns/private-properties-and-methods/index';
import Revelationpattern from 'root/screens/object-creation-patterns/revelation-pattern/index';
import Modulepattern from 'root/screens/object-creation-patterns/module-pattern/index';
import Sandbox from 'root/screens/object-creation-patterns/sandbox/index';
import Staticmembers from 'root/screens/object-creation-patterns/static-members/index';
import Objectconstants from 'root/screens/object-creation-patterns/object-constants/index';
import Chainingpattern from 'root/screens/object-creation-patterns/chaining-pattern/index';
import Method from 'root/screens/object-creation-patterns/method/index';
import Defaultpattern from 'root/screens/code-reuse-patterns/default-pattern/index';
import Rentconstructor from 'root/screens/code-reuse-patterns/rent-constructor/index';
import Rentandsetprototype from 'root/screens/code-reuse-patterns/rent-and-set-prototype/index';
import Shareprototype from 'root/screens/code-reuse-patterns/share-prototype/index';
import Temporaryconstructor from 'root/screens/code-reuse-patterns/temporary-constructor/index';
import Klass from 'root/screens/code-reuse-patterns/klass/index';
import Prototypalinheritance from 'root/screens/code-reuse-patterns/prototypal-inheritance/index';
import Inheritancebycopyingproperties from 'root/screens/code-reuse-patterns/inheritance-by-copying-properties/index';
import Mixins from 'root/screens/code-reuse-patterns/mix-ins/index';
import Borrowingmethods from 'root/screens/code-reuse-patterns/borrowing-methods/index';
import Builder from 'root/screens/design-patterns/builder/index';
import Factorymethod from 'root/screens/design-patterns/factory-method/index';
import Singleton from 'root/screens/design-patterns/singleton/index';
import Decorator from 'root/screens/design-patterns/decorator/index';
import Facade from 'root/screens/design-patterns/facade/index';
import Chainresponsibility from 'root/screens/design-patterns/chain-responsibility/index';
import Command from 'root/screens/design-patterns/command/index';
import Iterator from 'root/screens/design-patterns/iterator/index';
import Mediator from 'root/screens/design-patterns/mediator/index';
import Observer from 'root/screens/design-patterns/observer/index';
import Strategy from 'root/screens/design-patterns/strategy/index';

const routers = [{
  "label": "General Patterns",
  "screens": [{
    "label": "Function Declarations",
    "component": Functiondeclarations
  }, {
    "label": "Conditionals",
    "component": Conditionals
  }, {
    "label": "Access to the Global Object",
    "component": Accesstoglobalobject
  }, {
    "label": "Single var Pattern",
    "component": Singlevarpattern
  }, {
    "label": "Hoisting",
    "component": Hoisting
  }, {
    "label": "for loops",
    "component": Forloops
  }, {
    "label": "for-in loops",
    "component": Forinloops
  }, {
    "label": "(Not) Augmenting Built-in Prototypes",
    "component": Augmentingbuiltinprototypes
  }, {
    "label": "switch Pattern",
    "component": Switchpattern
  }, {
    "label": "Implied Typecasting",
    "component": Impliedtypecasting
  }, {
    "label": "Avoiding eval()",
    "component": Avoidingeval
  }, {
    "label": "Number Conversions with parseInt()",
    "component": Parseint
  }, {
    "label": "Minimizing Globals",
    "component": Minimizingglobals
  }, {
    "label": "The Problem with Globals",
    "component": Problemwithglobals
  }]
}, {
  "label": "Literals & Constructors Patterns",
  "screens": [{
    "label": "Object literal",
    "component": Objectliteral
  }, {
    "label": "Enforcing new",
    "component": Enforcingnew
  }, {
    "label": "Array literal",
    "component": Arrayliteral
  }, {
    "label": "Working with JSON",
    "component": WorkingwithJSON
  }, {
    "label": "Primitive wrappers",
    "component": Primitivewrappers
  }, {
    "label": "Regular expression literal",
    "component": Regularexpressionliteral
  }]
}, {
  "label": "Function Patterns",
  "screens": [{
    "label": "Callback patterns",
    "component": Callback
  }, {
    "label": "Configuration objects",
    "component": Configurationobjects
  }, {
    "label": "Returning functions",
    "component": Returningfunctions
  }, {
    "label": "Currying",
    "component": Currying
  }, {
    "label": "Partial application",
    "component": Partialapplication
  }, {
    "label": "Immediate functions",
    "component": Immediatefunctions
  }, {
    "label": "Immediate object initialization",
    "component": Immediateobjectinitializatio
  }, {
    "label": "Init-time branching",
    "component": Inittimebranching
  }, {
    "label": "Memoization",
    "component": Memoization
  }, {
    "label": "Self-defining functions'",
    "component": Selfdefiningfunctions
  }]
}, {
  "label": "Object Creation Patterns",
  "screens": [{
    "label": "Namespace",
    "component": Namespace
  }, {
    "label": "Declaring Dependencies",
    "component": Declaringdependencies
  }, {
    "label": "Private Properties and Methods",
    "component": Privatepropertiesandmethods
  }, {
    "label": "Revelation Pattern",
    "component": Revelationpattern
  }, {
    "label": "Module Pattern",
    "component": Modulepattern
  }, {
    "label": "Sandbox",
    "component": Sandbox
  }, {
    "label": "Static Members",
    "component": Staticmembers
  }, {
    "label": "Object Constants",
    "component": Objectconstants
  }, {
    "label": "Chaining Pattern",
    "component": Chainingpattern
  }, {
    "label": "method() Method",
    "component": Method
  }]
}, {
  "label": "Code Reuse Patterns",
  "screens": [{
    "label": "The default pattern",
    "component": Defaultpattern
  }, {
    "label": "Rent a constructor",
    "component": Rentconstructor
  }, {
    "label": "Rent and Set Prototype",
    "component": Rentandsetprototype
  }, {
    "label": "Share the Prototype",
    "component": Shareprototype
  }, {
    "label": "A Temporary Constructor",
    "component": Temporaryconstructor
  }, {
    "label": "Klass",
    "component": Klass
  }, {
    "label": "Prototypal Inheritance",
    "component": Prototypalinheritance
  }, {
    "label": "Inheritance by Copying Properties",
    "component": Inheritancebycopyingproperties
  }, {
    "label": "Mix-ins",
    "component": Mixins
  }, {
    "label": "Borrowing Methods",
    "component": Borrowingmethods
  }]
}, {
  "label": "Design Patterns",
  "screens": [{
    "label": "Builder",
    "component": Builder
  }, {
    "label": "Factory method",
    "component": Factorymethod
  }, {
    "label": "Singleton",
    "component": Singleton
  }, {
    "label": "Decorator",
    "component": Decorator
  }, {
    "label": "Facade",
    "component": Facade
  }, {
    "label": "Chain of responsibility",
    "component": Chainresponsibility
  }, {
    "label": "Command",
    "component": Command
  }, {
    "label": "Iterator",
    "component": Iterator
  }, {
    "label": "Mediator",
    "component": Mediator
  }, {
    "label": "Observer",
    "component": Observer
  }, {
    "label": "Strategy",
    "component": Strategy
  }]
}];

export default routers;