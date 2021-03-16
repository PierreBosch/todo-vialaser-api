const Task = require('../models/Task');
const isEmpty = require('lodash/isEmpty');

class TaskController {

    async index(req, res) {
        try {
            const done = req.query.done ?? null;
            let tasks = [];

            if(!isEmpty(done)) {
                tasks = await Task.findAll({ where: { done }});

                return res.json({ tasks });
            }
            
            tasks = await Task.findAll();

            await Task.findAll({ where: { done }});

            return res.json({ tasks });
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async store(req, res) {
        try {
            const { description, topic, author, avatar_url } = req.body;
            console.log(req.body);

            const task = await Task.create({ description, topic, avatar_url, author });

            res.json({ task });
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async done(req, res) {
        try {
            const { task_id } = req.params;
           
            const task = await Task.findByPk(task_id);

            if (!task) {
                return res.status(400).json({ error: 'Task not found' });
            }

            const taskUpdated = await task.update({done: !task.done});

            res.json({ task: taskUpdated });
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async update(req, res) {
        try {
            const { task_id } = req.params;
            const { description, topic, done } = req.body;

            const task = await Task.findByPk(task_id);

            if (!task) {
                return res.status(400).json({ error: 'Task not found' });
            }

            const taskUpdated = await task.update({ 
                description: description !== null ? description : task.description,
                topic: topic !== null ? topic : task.topic,
                done: done !== null ? done : task.done
            });

            res.json({ task: taskUpdated });
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async destroy(req, res) {
        try {
            const { task_id } = req.params;

            const task = await Task.findByPk(task_id);

            if (!task) {
                return res.status(400).json({ error: 'Task not found' });
            }

            await task.destroy({ where: { id: task_id }})

            res.json({ message: "Removida com sucesso!" });
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

};

module.exports = new TaskController();