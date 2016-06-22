/* eslint-disable func-names */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
/*
function Task(name, category, dueDate) {
  this.name = name;
  this.category = category;
  this.dueDate = dueDate;
  this.id = uuid.v1();
}
*/
const taskSchema = new Schema({
  name: String,
  dueDate: Date,
  priority: Number,
  category: String,
  isComplete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Task', taskSchema);

/*
Task.save = function (t) {
  // db.save(t);
  console.log('t', t);
};

function mockDBread() {
  const t1 = new Task('t1', 'low', '6/23/2016');
  const t2 = new Task('t2', 'high', '6/24/2016');
  const a = [t1, t2];
  return a;
}

Task.find = function (id) {
  const tasks = mockDBread();
  if (id) {
    return tasks.filter(i => i.id === id);
  }
  return tasks;
};

module.exports = Task;
*/
