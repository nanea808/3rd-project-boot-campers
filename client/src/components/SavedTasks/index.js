import React from "react";
import TaskCard from '../TaskCard';
import '../../styles/index.css';

function SavedTasks() {
    // 
    const tasks = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description of task 1',
          currentFunding: 100
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description of task 2',
          currentFunding: 200
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'Description of task 3',
          currentFunding: 300
        }
      ];
    
      return (
        <div className="task-feed-container">
          <h1 className="task-feed-title">Saved Tasks</h1>
          <div className="task-cards-container">
            {tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      );
    }
    
  
  export default SavedTasks;
  