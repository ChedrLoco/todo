function ViewTask(task, priorities) {
  this.id = task._id;
  this.name = task.name;
  this.dueDate = task.dueDate.toLocaleDateString();
  this.priority = priorities.find(p => p.value === task.priority);
  this.category = task.category;
  this.isComplete = task.isComplete;
  this.createdAt = task.createdAt.toLocaleDateString();
}

module.exports = ViewTask;
