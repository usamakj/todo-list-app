const { text } = require('express');
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please Add a text value'],
        },
        completed: {
            type: Boolean,
            default: false, // agr task complte nhi hwa tu default ,a falsa aya ga 
        },
    },
    {
        timestampe: true, // Adds 'createdAt' or 'updatedAt' fields Automatically.
    }
)

module.exports = mongoose.model('Task', taskSchema);