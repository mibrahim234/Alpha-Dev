const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `position`  in User.js
const companySchema = new Schema({
    preferredRole: {
        type: String,
    },
    language: {
        type: String,
    },
    length: {
        type: String,
    },
    commitment: {
        type: String,
    },
    startDate: {
        type: String,
    }
});

module.exports = companySchema;