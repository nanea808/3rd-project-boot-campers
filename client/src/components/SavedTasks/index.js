import React from "react";
import TaskCard from '../TaskCard';
import '../../styles/index.css';

function SavedTasks({tasks}) {
    if (!tasks.length) {
      return <h3>No Tasks Yet</h3>;
    }
      return (
        <div className="task-feed-container">
          <h1 className="task-feed-title">Saved Tasks</h1>
          <div className="task-cards-container">
            {tasks.map(task => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
      );
    }
    
  
  export default SavedTasks;