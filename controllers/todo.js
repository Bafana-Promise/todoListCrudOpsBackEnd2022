const express = require('express');
const todoSchema = require('../models/todo');
// router is going to give us methods like cruds ops etc
const router = express.Router();
// this comes with the methods Crud and it expects path and hanlder
router.get('/getTodos', async (req, res) => {
    const result = await todoSchema.find({});
    res.send(result);
});

router.post('/addTodos', async (req, res) => {
    // spread operator 
    const todo = new todoSchema(req.body)
    todo.save((err, document) => {
        if (!err) {
            try {
                res.send({ msg: "Added todo Successful" })
            } catch (error) {
                console.log(error)
                res.status(500).send();
            }
        } else {
            console.log(err)
            res.status(500).send();
        }
    });
}
);

router.delete('/deleteTodo/:id', async (req, res) => {
    todoSchema.findByIdAndDelete(req.params.id, (err, document) => {
        if (!err) {
            try {
                res.send({ msg: "Todo deleted Successful", document });
            } catch (error) {
                res.status(500).send();
            }
        } else {
            res.status(500).send();
        }
    }
    );
});

router.post('/editTodo/:id', async (req, res) => {
    // db.users.updateOne({ age: 20 }, { $set: { age: 21 } })
    todoSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, document)=> {
        if(!err){
            try {
                res.send({msg: "Todo updated Successful"});
            } catch (error) {
                res.status(500).send();
            }
        }else{
            res.status(500).send();
        }
    });
});

module.exports = router;