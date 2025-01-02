let tasks = [];
let nextId = 1;

const TaskModel = {
    getAll: () => tasks,
    
    getById: (id) => tasks.find(t => t.id === id),
    
    create: (taskData) => {
        const newTask = {
            id: nextId++,
            title: taskData.title,
            description: taskData.description || '',
            status: taskData.status || 'pending',
            createdAt: new Date()
        };
        tasks.push(newTask);
        return newTask;
    },
    
    update: (id, updateData) => {
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex === -1) return null;
        
        tasks[taskIndex] = {
            ...tasks[taskIndex],
            ...updateData,
            updatedAt: new Date()
        };
        return tasks[taskIndex];
    },
    
    delete: (id) => {
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex === -1) return false;
        tasks.splice(taskIndex, 1);
        return true;
    }
};

module.exports = TaskModel;