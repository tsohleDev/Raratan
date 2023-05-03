const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = require('../player/player');
const squareSchema = require('./square');
const betSchema = require('./bet');

/*
    Descpription: A game has a name, players, board, bet, playing and winner
    name: String
          Description: The name of the game
            Required: true
    players: Array of "PlayerSchema"
            Description: The players of the game
            Required: true
    board: Array of "SquareSchema"
            Description: The board of the game, i.e all the squares, and what they contain
            Required: true
    bet: Array of BetSchema
            Description: The bet of the game, i.e the prize and the link to the store to buy it from, but each player can have their own bet/prize
            Required: false
    playing: String
            Description: The player who is currently playing, thus the player who is allowed to make a move
            Required: true
    winner: String
            Description: The player who won the game
            Required: false
*/

const gameSchema = new Schema({
    name: { type: String, required: true },
    players:{type: [playerSchema], required: true},
    board: {type: [squareSchema], required: true},
    bet: {type: [betSchema], required: false},
    playing: { type: String, required: true },
    winner: { type: String, required: false },
}, {
    timestamps: true,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;