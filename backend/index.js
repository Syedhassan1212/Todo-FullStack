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


app.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});


app.listen(3000, () => console.log("Server running on port 3000"));
 