const continueGame = async (id) => {
    // find the game on the database
    try {
        const details = await game.findById(id);

        console.log('game created', details);
        console.log('game created', game._id);
    } catch (error) {
        console.log(error);
    }
}