import React from 'react';

const TaskListRow = ({task, deleteTask}) => {
  return (
    <li className="task-card ui-state-default" id={"item_" + task.id}>
      <div className="card-space" />
      <div>
        <i className="fa fa-ellipsis-v"/>
        <i className="fa fa-ellipsis-v"/>
        <i className="fa fa-ellipsis-v"/>
        <span className="left-padding task-title">TASK </span>
        <span className="left-padding ">{task.title}</span>
        <i className="fa fa-trash-o pull-right pointer-cursor" onClick={() => deleteTask(task.id)}></i>
      </div>
      <div className="card-space" />
      <div className="card-body">
        <div>{task.category}</div>
      </div>
    </li>
  );
};

export default TaskListRow;
