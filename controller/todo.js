let id = 1;
let tasks = {};

// POST /tasks - Create a new task
exports.addTask = (req, res) => {
   
    const { title, description, status, dueDate } = req.body;

    if (!title || !description || !status || !dueDate) {
        return res.status(400).json({
            success: false,
            message: "Please enter all the fields"
        });
    }

    const newTask = {
        id: id++,
        title,
        description,
        status,
        dueDate
    };

    tasks[newTask.id] = newTask;
    
    return res.status(201).json({
        success: true,
        message: "Task added successfully",
        task: newTask
    });
};


// GET /tasks - Retrieve all tasks

exports.getTask = (req , res) =>{

 res.json(Object.values(tasks));

}


// GET /tasks/:id - Retrieve a single task by ID

exports.getTaskbyId =  (req, res) => {
    const task = tasks[req.params.id];
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
};

// PUT /tasks/:id - Update an existing task by ID

exports.updateTask = (req , res) =>{
    const task = tasks[req.params.id];
    if (task) {
        const { title, description, status, dueDate } = req.body;
        task.title = title !== undefined ? title : task.title;
        task.description = description !== undefined ? description : task.description;
        task.status = status !== undefined ? status : task.status;
        task.dueDate = dueDate !== undefined ? dueDate : task.dueDate;
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }

}


// DELETE /tasks/:id - Delete a task by ID

exports.deleteTask = (req , res) =>{
    if (tasks[req.params.id]) {
        delete tasks[req.params.id];
        res.status(204).send();
    } else {
        res.status(404).send('Task not found');
    }
}
