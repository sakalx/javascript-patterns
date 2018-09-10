import LazyLoad from 'root/components/lazy-load/index';

const routers = [{
  label: 'General Patterns',
  screens: [{
    "label": "Function Declarations",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/function-declarations/index'),
    }),
  }, {
    "label": "Conditionals",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/conditionals/index'),
    }),
  }, {
    "label": "Access to the Global Object",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/access-to-global-object/index'),
    }),
  }, {
    "label": "Single var Pattern",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/single-var-pattern/index'),
    }),
  }, {
    "label": "Hoisting",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/hoisting/index'),
    }),
  }, {
    "label": "for loops",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/for-loops/index'),
    }),
  }, {
    "label": "for-in loops",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/for-in-loops/index'),
    }),
  }, {
    "label": "(Not) Augmenting Built-in Prototypes",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/augmenting-built-in-prototypes/index'),
    }),
  }, {
    "label": "switch Pattern",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/switch-pattern/index'),
    }),
  }, {
    "label": "Implied Typecasting",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/implied-typecasting/index'),
    }),
  }, {
    "label": "Avoiding eval()",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/avoiding-eval/index'),
    }),
  }, {
    "label": "Number Conversions with parseInt()",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/parseint/index'),
    }),
  }, {
    "label": "Minimizing Globals",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/minimizing-globals/index'),
    }),
  }, {
    "label": "The Problem with Globals",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/general-patterns/problem-with-globals/index'),
    }),
  }],
}, {
  label: 'Literals and Constructors Patterns',
  screens: [{
    "label": "Object literal",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/literals-constructors-patterns/object-literal/index'),
    }),
  }, {
    "label": "Enforcing new",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/literals-constructors-patterns/enforcing-new/index'),
    }),
  }, {
    "label": "Array literal",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/literals-constructors-patterns/array-literal/index'),
    }),
  }, {
    "label": "Working with JSON",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/literals-constructors-patterns/working-with-JSON/index'),
    }),
  }, {
    "label": "Primitive wrappers",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/literals-constructors-patterns/primitive-wrappers/index'),
    }),
  }, {
    "label": "Regular expression literal",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/literals-constructors-patterns/regular expression-literal/index'),
    }),
  }],
}, {
  label: 'Function Patterns',
  screens: [{
    "label": "Callback patterns",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/callback/index'),
    }),
  }, {
    "label": "Configuration objects",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/configuration-objects/index'),
    }),
  }, {
    "label": "Returning functions",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/returning-functions/index'),
    }),
  }, {
    "label": "Currying",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/currying/index'),
    }),
  }, {
    "label": "Partial application",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/partial-application/index'),
    }),
  }, {
    "label": "Immediate functions",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/immediate-functions/index'),
    }),
  }, {
    "label": "Immediate object initialization",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/immediate-object-initializatio/index'),
    }),
  }, {
    "label": "Init-time branching",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/init-time-branching/index'),
    }),
  }, {
    "label": "Memoization",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/memoization/index'),
    }),
  }, {
    "label": "Self-defining functions'",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/function-patterns/self-defining-functions/index'),
    }),
  }],
}, {
  label: 'Object Creation Patterns',
  screens: [{
    "label": "Namespace",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/namespace/index'),
    }),
  }, {
    "label": "Declaring Dependencies",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/declaring-dependencies/index'),
    }),
  }, {
    "label": "Private Properties and Methods",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/private-properties-and-methods/index'),
    }),
  }, {
    "label": "Revelation Pattern",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/revelation-pattern/index'),
    }),
  }, {
    "label": "Module Pattern",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/module-pattern/index'),
    }),
  }, {
    "label": "Sandbox",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/sandbox/index'),
    }),
  }, {
    "label": "Static Members",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/static-members/index'),
    }),
  }, {
    "label": "Object Constants",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/object-constants/index'),
    }),
  }, {
    "label": "Chaining Pattern",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/chaining-pattern/index'),
    }),
  }, {
    "label": "method() Method",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/object-creation-patterns/method/index'),
    }),
  }],
}, {
  label: 'Code Reuse Patterns',
  screens: [{
    "label": "The default pattern",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/default-pattern/index'),
    }),
  }, {
    "label": "Rent a constructor",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/rent-constructor/index'),
    }),
  }, {
    "label": "Rent and Set Prototype",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/rent-and-set-prototype/index'),
    }),
  }, {
    "label": "Share the Prototype",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/share-prototype/index'),
    }),
  }, {
    "label": "A Temporary Constructor",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/temporary-constructor/index'),
    }),
  }, {
    "label": "Klass",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/klass/index'),
    }),
  }, {
    "label": "Prototypal Inheritance",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/prototypal-inheritance/index'),
    }),
  }, {
    "label": "Inheritance by Copying Properties",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/inheritance-by-copying-properties/index'),
    }),
  }, {
    "label": "Mix-ins",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/mix-ins/index'),
    }),
  }, {
    "label": "Borrowing Methods",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/code-reuse-patterns/borrowing-methods/index'),
    }),
  }],
}, {
  label: 'Design Patterns',
  screens: [{
    "label": "Builder",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/builder/index'),
    }),
  }, {
    "label": "Factory method",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/factory-method/index'),
    }),
  }, {
    "label": "Singleton",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/singleton/index'),
    }),
  }, {
    "label": "Decorator",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/decorator/index'),
    }),
  }, {
    "label": "Facade",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/facade/index'),
    }),
  }, {
    "label": "Chain of responsibility",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/chain-responsibility/index'),
    }),
  }, {
    "label": "Command",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/command/index'),
    }),
  }, {
    "label": "Iterator",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/iterator/index'),
    }),
  }, {
    "label": "Mediator",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/mediator/index'),
    }),
  }, {
    "label": "Observer",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/observer/index'),
    }),
  }, {
    "label": "Strategy",
    "component": LazyLoad({
      loader: () =>
        import ('root/screens/design-patterns/strategy/index'),
    }),
  }],
}];

export default routers;