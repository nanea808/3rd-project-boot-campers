import React from "react";
import FundedTaskCard from '../FundedTaskCard';
import '../../styles/index.css';

function FundedTasks({tasks, username}) {
    if (!tasks.length) {
      return <h3>No Tasks Yet</h3>;
    }
      return (
        <div className="task-feed-container">
          <h1 className="task-feed-title">Funded Tasks</h1>
          <div className="task-cards-container">
            {tasks.map(task => (
              <FundedTaskCard key={task.id} task={task} username={username}/>
            ))}
          </div>
        </div>
      );
    }
    
  
  export default FundedTasks;