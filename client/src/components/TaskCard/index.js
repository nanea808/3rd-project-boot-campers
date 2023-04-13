import React from 'react';

function TaskCard(props) {
  //{key, task}
  const task = props.task;

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Current Funding: ${task.currentFunding}</p>
      <button>View Task</button>
    </div>
  );
}

export default TaskCard;