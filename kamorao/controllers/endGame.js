const Game = require('../models/game/game');

const endGame = (id, game) => {
    //delete the game from the database
    Game.deleteOne({ _id: id })
    .then(docs => {
        console.log(docs);

        //must send the who won/lost/draw/forfeit
        //and make it pretty on the frontend
        io.emit('message', docs);
    })
    .catch(err => {
        console.error(err);
    });
}

module.exports = endGame;