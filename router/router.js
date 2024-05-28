const express = require('express');
const { addTask, getTask, getTaskbyId, Update, updateTask, deleteTask } = require('../controller/todo');
const router = express();


router.post('/task' , addTask);
router.get('/task' , getTask);
router.get('/task/:id' , getTaskbyId)
router.put('/task/:id' , updateTask)
router.delete('/task/:id' , deleteTask)

module.exports = router;