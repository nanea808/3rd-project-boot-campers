import React from 'react';
import TaskCard from '../TaskCard';
import '../../styles/index.css';

function TaskFeed({tasks}) {

  // const tasks = [
  //   {
  //     id: 1,
  //     title: 'Task 1',
  //     description: 'Description of task 1',
  //     currentFunding: 100,
  //     assignedUser: "user 1"
  //   },
  //   {
  //     id: 2,
  //     title: 'Task 2',
  //     description: 'Description of task 2',
  //     currentFunding: 200,
  //     assignedUser: ""
  //   },
  //   {
  //     id: 3,
  //     title: 'Task 3',
  //     description: 'Description of task 3',
  //     currentFunding: 300,
  //     assignedUser: null
  //   }
  // ];

  // on the task feed, we need to see...
  // --all unassigned tasks
  //    task name
  //    task description
  //    task author
  //    current funding
  // --button to help fund a task (would utilize the paypal API )
  // --button to claim a task if a user is logged in

  // export const QUERY_UNCLAIMED_TASKS = gql`
  // query getUnclaimedTasks {
  //   task(assignedUser: null) {
  //       taskAuthor
  //       taskName
  //       description
  //       currentFunding
  //   }
  // }
  if (!tasks.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div className="task-feed-container">
      <h1 className="task-feed-title">Task Feed</h1>
      <div className="task-cards-container">
        {tasks.map(task =>  (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskFeed;
