const player = () => (
  `
  function Player(name) {
    this.points = 0;
    this.name = name;
  }
  
  
  Player.prototype.play = function () {
    this.points += 1;
    
    mediator.played();
  };
  `
);

const scoreboard = () => (
  `
  var scoreboard = {

    // HTML element to be updated
    element: document.getElementById('results'),
    
    // update the score display
    update: function (score) {
      var i, msg = '';
      for (i in score) {
        if (score.hasOwnProperty(i)) {
          msg += '<p><strong>' + i + '<\\/strong>: ';
          msg += score[i];
          msg += '<\\/p>';
        }
      }
      
      this.element.innerHTML = msg;
    }
  };
  `
);

const mediator = () => (
  `
  var mediator = {
  
    // all the player
    players: {},
    
    
    // initialization
    setup: function () {
      var players = this.players;
      
      players.home = new Player('Home');
      players.guest = new Player('Guest');
    },
    
    
    // someone plays, update the score
    played: function () {
      var players = this.players,
          score = {
            Home:players.home.points,
            Guest:players.guest.points
          };
          
      scoreboard.update(score);
    },
    
    
    // handle user interactions
    keypress: function (e) {
      e = e || window.event; // IE
      
      if (e.which === 49) { // key "1"
        mediator.players.home.play();
        return;
      }
      
      if (e.which === 48) { // key "0"
        mediator.players.guest.play();
        return;
      }
    }
  };
  `
);

const go = () => (
  `
  mediator.setup();
  
  window.onkeypress = mediator.keypress;
  `
);

const gameOver = () => (
  `
  setTimeout(function () {
    window.onkeypress = null;
    console.log('Game over!');
  }, 30000);
  `
);

export {
  player,
  scoreboard,
  mediator,
  go,
  gameOver,
}