import React from 'react';
import TaskCard from '../TaskCard';
import '../../styles/index.css';

function TaskFeed({tasks}) {

  // on the task feed, we need to see...
  // --all unassigned tasks
  //    task name
  //    task description
  //    task author
  //    current funding
  // --button to help fund a task (would utilize the paypal API )
  // --button to claim a task if a user is logged in

  if (!tasks.length) {
    return <h3>No Tasks Yet</h3>;
  }

  return (
    <div className="task-feed-container">
      <h1 className="task-feed-title">Task Feed</h1>
      <div className="task-cards-container">
        {tasks.map(task =>  (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskFeed;
