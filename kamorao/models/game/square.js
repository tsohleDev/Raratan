const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    Descpription: A square has a position, piece, and owner
    position: array of two numbers
            Description: The position of the square on the board, i.e [0, 0] is the top left square
            Required: true
    piece: String
            Description: The piece that is on the square, i.e "X" or "O" or "Knight"
            Required: false
    owner: String
            Description: The owner of the square, i.e the player who owns the square
            Required: false
*/

const squareSchema = new Schema({
    position: { type: [Number], required: true },
    piece: { type: String, required: false },
    owner: { type: String, required: false },
}, {
    timestamps: true,
});

const Square = mongoose.model('Square', squareSchema);