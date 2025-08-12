const express = require('express');
const { createTodo, updateTodo } = require("./type");
const { todo } = require('./db');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
app.post('/todo', async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you send the wrong inputs"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "todo created"
    });
});

app.get('/todos', async function (req, res) {
    const todos = await todo.find({});
    res.json({ todos });
});

app.delete('/todo/:id', async function (req, res) {
    try {
        await todo.deleteOne({ _id: req.params.id });
        res.json({ msg: "todo deleted" });
    } catch (err) {
        res.status(500).json({ msg: "error deleting todo" });
    }
});


app.put('/complete', async function (req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you send the wrong inputs"
        });
        return;
    }

    await todo.updateOne(
        { _id: req.body.id },
        { completed: true }
    );

    res.json({
        msg: "todo mark as completed"
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
 