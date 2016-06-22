/* eslint-disable new-cap, array-callback-return, no-param-reassign  */

import express from 'express';
import Task from '../models/task';
import Priority from '../models/priority';
import Category from '../models/category';
import ViewTask from '../models/view-task';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Task.find((err, tasks) => {
    const priorities = Priority.find();
    const viewTasks = tasks.map(t => new ViewTask(t, priorities));
    res.render('tasks/index', { viewTasks });
  });
});

router.post('/', (req, res) => {
  const task = new Task(req.body);
  task.save(() => {
    res.redirect('/tasks');
  });
});

router.get('/new', (req, res) => {
  const categories = Category.find();
  const priorities = Priority.find();
  res.render('tasks/new', { categories, priorities });
});

router.post('/:x/complete', (req, res) => {
  Task.findOne(({ _id: req.params.x }), (err, task) => {
    task.isComplete = true;
    console.log('tas', task);
    Task.findOneAndUpdate({ _id: req.params.x }, task, { upsert: true }, (log2) => {
      console.log(log2);
      res.redirect('/tasks');
    });
  });
  // Task.find(({ _id: req.params.x }), (err, task) => {
  //   task.isComplete = true;
  //   console.log('task', task);
  //   res.redirect('/tasks');
  // });
});

router.get('/:x/edit', (req, res) => {
  // Task.find((err, tasks) => {
  //   console.log('tasks', tasks);
  //   console.log('id', req.params.x.toString());
  //   const task = tasks.find(t => t._id.toString() === req.params.x.toString());
  //   console.log('task', task);
  //   res.render('tasks/new', { task });
  // });

    Task.findById(({ _id: req.params.x }), (err, task) => {
      console.log('err', err);
      console.log('task', task);
        const categories = Category.find();
        const priorities = Priority.find();
      res.render('tasks/new', { task, categories, priorities });
    });
});

router.post('/:x/delete', (req, res) => {
  res.redirect('/tasks');
});

router.post('/:x', (req, res) => {
  res.redirect('/tasks');
});
