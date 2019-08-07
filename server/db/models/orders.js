const mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var OrderSchema = new Schema({

    customer: {
        type: String,
        required: true
    },

    partnumber: {
        type: String,
        required: true
    },

    orderquantity: {
        type: Number,
        required: true
    },

    quantityOK1: {
        type: Number,
        default: 0
    },

    quantityOK2: {
        type: Number,
        default: 0
    },

    quantityX: {
        type: Number,
        default: 0
    },

    inprocess: {
        type: Boolean,
        default: 0
    },

    finished: {
        type: Boolean,
        default: 0
    }

});

// This creates our model from the above schema, using mongoose's model method
var Order = mongoose.model("Order", OrderSchema);

// Export the Article model
module.exports = Order;
