import React, {Component} from 'react';

const TaskItem = (props) => {
  return (
    <div className="TaskItem">
      <span>{props.task}</span>
      <span>{props.type}</span>
      <span>{props.code}</span>
      <span>{props.hours}</span>
    </div>
  );
}

export default TaskItem;
