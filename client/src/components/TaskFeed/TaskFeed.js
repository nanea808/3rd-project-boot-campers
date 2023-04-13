import React from 'react';
import TaskFeed from './TaskFeed';

function TaskFeed() {
  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description of task 1'
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description of task 2'
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description of task 3'
    }
  ];

  return (
    <div>
      <h1>My App</h1>
      <TaskFeed tasks={tasks} />
    </div>
  );
}

export default TaskFeed;
