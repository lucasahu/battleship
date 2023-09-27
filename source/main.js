class Ship {
  constructor(type, size, hp, sunk = false) {
    this.type = type;
    this.size = this.getSize();
    this.hp = this.getHp();
    this.sunk = this.getSunk();
  }

  getSunk() {
    return this.sunk;
  }

  setSunk(hp) {
    if (hp <= 0) {
      return true
    }
  }

  getHp() {
    return this.setType()
  }

  getSize() {
    return this.setType()
  }

  setType() {
    if (this.type === 'Carrier') {
      return 5
    } else if (this.type === 'Battleship') {
      return 4
    } else if (this.type === 'Destroyer') {
      return 3
    } else if (this.type === 'Submarine') {
      return 3
    } else if (this.type === 'Patrol boat') {
      return 2
    }
  }

  registerHit() {
    this.hp = this.hp - 1;
    this.setSunk(this.hp)
  }


}

class Gameboard {
  constructor(size, state = []) {
    this.size = size;
    this.state = state;
  }

  getSize() {
    return this.size;
  }

  createBoard() {
    for (let i = 0; i < this.size; i++) {
      this.state.push(new Array(this.size));
    }
    this.populateBoard()
  }

  populateBoard() {
    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        this.state[i][j] = 'O';
      }  
    }
  }

  placeShip(x, y, length, direction) {
    if (direction === 'vertical' && y + length > this.size) {
      console.log('ERROR: Ship wont fit');
    } else if (direction === 'horizontal' && x + length > this.size) {
      console.log('ERROR: Ship wont fit');
    } else {
      
    }
  }

  getState() {
    return this.state;
  }

}

class Player {
  //blabla
}

function mainGame() {
  //blabla
}

module.exports = {
  Ship: Ship,
  Gameboard: Gameboard,
  Player: Player,
  mainGame: mainGame
}

// const game = new Gameboard(3);

// game.createBoard();
// game.placeShip(1,2);

// console.log(game.state);