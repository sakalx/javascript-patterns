const variables = () => (
  `
  var NO_TOPIC = -1;
  var Topic;
  `
);

const handler = () => (
  `
  function Handler(s, t) {
    this.successor = s || null;
    this.topic = t || 0;
  }
  `
);

const handlerPrototypes = () => (
  `
  Handler.prototype = {
  
    handle: function () {
      console.log(this.has());
      
      if (this.successor) {
        this.successor.handle();
      }
      
      console.log(this.topic);
    },
    
    has: function () {
      return this.topic != NO_TOPIC;
    }
    
  };
  `
);

const app = () => (
  `
  var _handle = Handler.prototype.handle;
  
  var app = new Handler({
  
    handle:function () {
      console.log('app handle');
    }
    
  }, 3);
  `
);

const dialog = () => (
  `
  var dialog = new Handler(app, 1);
  
  /*
    dialog.handle = function () {
    
      if (this.has()) {
      } else {
        console.log('dialog handle');
        _handle.call(this);
      }
      
    }
  */
  `
);

const button = () => (
  `
  var button = new Handler(dialog, 2);

  /*
    button.handle = function () {
    
      if (this.has()) {
      } else {
        console.log('dialog handle');
        _handle.call(this);
      }
      
    }
  */
  
  button.handle();
  `
);

export {
  variables,
  handler,
  handlerPrototypes,
  app,
  dialog,
  button,
}