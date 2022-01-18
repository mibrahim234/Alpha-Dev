const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `position`  in User.js
const devSchema = new Schema({
    preferrerRole: {
        type: String,
    },
    language: {
        type: String,
    },
    availability: {
        type: String,
    },
    commitment: {
        type: String,
    },
    startDate: {
        type: String,
    }
});

// const Developer = model('Developer', devSchema);

module.exports = devSchema;
