const zod = require('zod')

const createTodo = zod.object ({
    name : zod.string(),
    description : zod.string(),
    //complete : zod.boolean
})
   
const updateTodo = zod.object({
id: zod.string(),
})

// export modules
module.exports = {
    createTodo  : createTodo ,
    updateTodo : updateTodo,
}