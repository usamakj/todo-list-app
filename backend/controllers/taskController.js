const Task = require('../models/taskModel');
const asyncHandler = require('express-async-handler');

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks)
});

const createTask = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.send(400);
        throw new Error('Please add a text field')
    }

    const task = await Task.create({
        text: req.body.text,
    })
    res.status(201).json(task)
}
);

const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.send(404);
        throw new Error('Task not found');
    }

    const updateTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updateTask)

}
);

const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    await task.remove();
    res.status(200).json({ id: req.params.id, message: 'Task removed' })
});

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}