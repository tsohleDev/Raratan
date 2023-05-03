const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    Descpription: A player has a name, a game, owned, debt and bet
    name: String
            Description: The name of the player
            Required: true
    game: Game Id
            Description: The game the player is currently playing
            Required: false
    bets: Array of Bet Ids
            Description: bets the player is involved
            Required: false
    color: String
            Description: The color of the player
            Required: false
*/

const playerSchema = new Schema({
    name: { type: String, required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
    bets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bet' }],
    color: { type: String, required: false },
}, {
    timestamps: true,
});

const Player = mongoose.model('Player', playerSchema);