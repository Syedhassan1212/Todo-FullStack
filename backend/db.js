
const mongoose = require("mongoose");
const { string } = require("zod");
require('dotenv').config();
mongoose.connect(process.env.DB_USER)
.then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean,
})

const todo = mongoose.model('todo' , todoSchema)

module.exports = {
    todo
}