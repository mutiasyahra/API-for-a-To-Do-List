const TaskModel = require('../models/task');

const TaskController = {
    getAllTasks: (req, res) => {
        const tasks = TaskModel.getAll();
        res.json(tasks);
    },
    
    getTaskById: (req, res) => {
        const taskId = parseInt(req.params.id);
        const task = TaskModel.getById(taskId);
        
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    },
    
    createTask: (req, res) => {
        const { title, description, status } = req.body;
        
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        
        const newTask = TaskModel.create({ title, description, status });
        res.status(201).json(newTask);
    },
    
    updateTask: (req, res) => {
        const taskId = parseInt(req.params.id);
        const updatedTask = TaskModel.update(taskId, req.body);
        
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(updatedTask);
    },
    
    deleteTask: (req, res) => {
        const taskId = parseInt(req.params.id);
        const deleted = TaskModel.delete(taskId);
        
        if (!deleted) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).send();
    }
};

module.exports = TaskController;