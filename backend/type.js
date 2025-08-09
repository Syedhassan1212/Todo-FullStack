const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    // completed: zod.boolean() // optional if you ever want to allow user to set it
});

const updateTodo = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodo,
    updateTodo,
};
