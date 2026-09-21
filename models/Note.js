const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            default: '',
        },
        completed: {
            type: Boolean,
            default: false,
        }, 
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Note', noteSchema);