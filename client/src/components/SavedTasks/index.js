import React from "react";
import TaskCard from '../TaskCard';
import '../../styles/index.css';

function SavedTasks({watchedTasks}) {
    // 
    // const tasks = [
    //     {
    //       id: 1,
    //       title: 'Task 1',
    //       description: 'Description of task 1',
    //       currentFunding: 100
    //     },
    //     {
    //       id: 2,
    //       title: 'Task 2',
    //       description: 'Description of task 2',
    //       currentFunding: 200
    //     },
    //     {
    //       id: 3,
    //       title: 'Task 3',
    //       description: 'Description of task 3',
    //       currentFunding: 300
    //     }
    //   ];
    if (!watchedTasks.length) {
      return <h3>No Tasks Yet</h3>;
    }
      return (
        <div className="task-feed-container">
          <h1 className="task-feed-title">Saved Tasks</h1>
          <div className="task-cards-container">
            {watchedTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      );
    }
    
  
  export default SavedTasks;
  
  // I am currently working on getting the savedTasks to show all the tasks a user is watching.
  // this is going to be based off of the logged in user's ID. Right now I'm trying to fake the ID with the seed, but it should work differently 
  // once Ethan has pushed his login stuff.
  // right now it isn't working. In fact it looks like it's interfering with my other query for the taskfeed. If needed, revert to that merge.