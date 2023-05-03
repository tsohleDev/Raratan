const Game = require('./models/game/game');
const Square = require('./models/game/square');

const startGame = async (type, game) => {
  let squares = [];
  if (type === 'chess') {
    squares = chessBoard(game.players[0], game.players[1]);
  } else if (type === 'shogi') {
      //squares = shogiBoard(game.players[0], game.players[1]);
  } else if (type === 'go') {
        //squares = goBoard(game.players[0], game.players[1]);
  } else {
    console.log('invalid game type');
    return;
  }

  // create the game on the database
  const game = new Game({ 
    name: game.name,
    players: [game.players[0], game.players[1]],    
    board: squares,
    playing: game.players[0].name,
  });
  
  try {
    const details = await game.save();

    console.log('game created', details);
    console.log('game created', game._id);
  } catch (error) {
    console.log(err);
  }
}

const chessBoard = (player1, player2) => {
    let squares = [];
    for (let i = 0; i < 8; i++) {
        squares.push(new Square({
            position: [1, i],
            piece: 'Pawn',
            owner: player1.name,
        }));


        squares.push(new Square({
            position: [6, i],
            piece: 'Pawn',
            owner: player2.name,
        }));
    }

    // Rooks
    const rookPositions = [[0, 0], [0, 7], [7, 0], [7, 7]];
    for (let i = 0; i < 4; i++) {
        squares.push(new Square({
            position: rookPositions[i],
            piece: 'Rook',
            owner: i < 2 ? player1.name : player2.name,
        }));
    }
    
    // Knights
    const knightPositions = [[0, 1], [0, 6], [7, 1], [7, 6]];
    for (let i = 0; i < 4; i++) {
        squares.push(new Square({
            position: knightPositions[i],
            piece: 'Knight',
            owner: i < 2 ? player1.name : player2.name,
        }));
    }

    // Bishops
    const bishopPositions = [[0, 2], [0, 5], [7, 2], [7, 5]];
    for (let i = 0; i < 4; i++) {
        squares.push(new Square({
            position: bishopPositions[i],
            piece: 'Bishop',
            owner: i < 2 ? player1.name : player2.name,
        }));
    }

    // Queens
    const queenPositions = [[0, 3], [7, 3]];
    for (let i = 0; i < 2; i++) {
        squares.push(new Square({
            position: queenPositions[i],
            piece: 'Queen',
            owner: i < 1 ? player1.name : player2.name,
        }));
    }

    // Kings
    const kingPositions = [[0, 4], [7, 4]];
    for (let i = 0; i < 2; i++) {
        squares.push(new Square({
            position: kingPositions[i],
            piece: 'King',
            owner: i < 1 ? player1.name : player2.name,
        }));
    }
}

module.exports = startGame;