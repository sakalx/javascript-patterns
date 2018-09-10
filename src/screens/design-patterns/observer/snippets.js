const observer = () => (
  `
  var observer = {
  
    addSubscriber: function (callback) {
      this.subscribers[this.subscribers.length] = callback;
    },
    
    removeSubscriber: function (callback) {
      for (var i = 0; i < this.subscribers.length; i++) {
        if (this.subscribers[i] === callback) {
          delete(this.subscribers[i]);
        }
      }
    },
    
    publish: function (what) {
      for (var i = 0; i < this.subscribers.length; i++) {
        if (typeof this.subscribers[i] === 'function') {
          this.subscribers[i](what);
        }
      }
    },
    
    make: function (o) { // turns an object into a publisher
      for (var i in this) {
        o[i] = this[i];
        o.subscribers = [];
      }
    }
    
  };
  `
);

const blogger = () => (
  `
  var blogger = {
    writeBlogPost: function () {
      var content = 'Today is ' + new Date();
      
      this.publish(content);
    }
  };
    
  var la_times = {
    newIssue: function () {
      var paper = 'Martians have landed on Earth!';
      
      this.publish(paper);
    }
  };
    
    
  observer.make(blogger);
  observer.make(la_times);
  `
);

const jackJill = () => (
  `
  var jack = {
    read: function (what) {
      console.log('I just read that ' + what)
    }
  };
  
  var jill = {
    gossip: function (what) {
      console.log('You didn\\'t hear it from me, but ' + what)
    }
  };
  `
);

const invoke = () => (
  `
  blogger.addSubscriber(jack.read);
  blogger.addSubscriber(jill.gossip);
  blogger.writeBlogPost();
  
  blogger.removeSubscriber(jill.gossip);
  blogger.writeBlogPost();
  
  la_times.addSubscriber(jill.gossip);
  la_times.newIssue();
  `
);

export {
  observer,
  blogger,
  jackJill,
  invoke,
}