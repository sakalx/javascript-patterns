const partialAny = () => (
  `
  var partialAny = (function(aps){
    // This function will be returned as a result of the immediately 
    // invoked function expression and assigned to the \`partialAny\` var.
    
    function func(fn){
      var argsOrig = aps.call(arguments, 1);
      return function() {
        var args = [],
          argsPartial = aps.call(arguments),
          i = 0;
          
        // Iterate over all the originally-spedicified arguments. If that
        // argument was the \`partialAny._\` placeholder, use the next just
        // passed-in argument, otherwise use the originally-specified 
        // argument.
        
        for ( ; i < argsOrig.length; i++ ) {
          args[i] = argsOrig[i] === func._
          ? argsPartial.shift()
          : argsOrig[i];
        }
        
        // If any just-passed-in arguments remain, add them to the end.
        return fn.apply( this, args.concat( argsPartial ));
      };
    }
    
    // This is used as the placeholder argument.
    func._ = {};
    return func;
  })(Array.prototype.slice);
`
);

const legitimate = () => (
  `
  function hex( r, g, b ) {
    return '#' + r + g + b;
  }
  
  var redMax = partialAny( hex, 'ff', partialAny._, partialAny._);
  console.log(redMax('11','22')); // "#ff1122"
  
  // Because \`_\` is easier on the eyes than \`partialAny._\`, let's use
  // that instead. This is, of course, entirely optional, and the name
  // could just as well be \`foo\` or \`PLACEHOLDER\` instead of \`_\`.
  
  var __ = partialAny._;
  var greenMax = partialAny( hex, __, 'ff' );
  console.log(greenMax( '33', '44' )); 
  
  var blueMax = partialAny( hex, __, __, 'ff' );
  console.log(blueMax( '55', '66' ));
  
  var magentaMax = partialAny( hex, 'ff', __, 'ff' );
  console.log(magentaMax( '77' )); 
`
);

export {
  partialAny,
  legitimate,
};