import React from 'react';

function FundedTaskCard(props) {
  //{key, task}
  const task = props.task;
  const username = props.username;
  let fundingAmount = 0;
  for (let index = 0; index < task.fundingUsers.length; index++) {
    if(task.fundingUsers[index].username === username) {
      fundingAmount = task.fundingUsers[index].funding;
      break;
    }
  }

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Current Funding: ${task.currentFunding}</p>
      <p>Your contribution: ${fundingAmount}</p>
      <button>View Task</button>
    </div>
  );
}

export default FundedTaskCard;