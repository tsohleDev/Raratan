const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    Descpription: A bet has a prize, a store and a link to the prize
    from: Id
            Description: The name of the player who made the bet
            Required: true
    To: Id
            Description: The name of the player who the bet was made to
            Required: true
    prize: String
            Description: The prize of the bet, i.e "A free coffee"
            Required: true
    store: Object{ name: String, image: String, link: String}
            Description: The store where the prize can be bought, i.e "Starbucks"
            Required: true
    images: String
            Description: The image of the store where the prize can be bought, i.e "https://www.starbucks.com/~/media/Starbucks/Images/Store%20Locator/Store%20Images/Store-Image-00001.ashx"
            Required: true
    link: String
            Description: The link to the store where the prize can be bought, i.e "https://www.starbucks.com/"
            Required: true
    redeemable: Boolean
            Description: Whether the prize is redeemable or not, i.e if the prize is a free coffee, it is redeemable, but if the prize is a free hug, it is not redeemable
*/

const betSchema = new Schema({
    from: { type:  mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    to: { type:  mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    prize: { type: String, required: true },
    store: { type: Object, required: true },
    images: { type: String, required: true },
    link: { type: String, required: true },
    redeemable: { type: Boolean, required: true },
}, {
    timestamps: true,
});

const Bet = mongoose.model('Bet', betSchema);