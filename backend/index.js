 const express = require('express');
 const {createTodo} = require("./type")
 const {updateTodo} = require("./type")
const app = express();
app.use (express.json())
app.post('/todo' , function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if (!parsePayload.success){
        res.status(411).json({
            msg: "you send the wrong inputs"
        })
        return;
    }
})
app.get('/todos' , function(req,res){
    
})

app.put('/complete' , function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    if (!parsePayload.success){
        res.status(411).json({
            msg: "you send the wrong inputs"
        })
        return;
    }
})


app.listen(3000)