import React, { Component } from 'react';
import { connect } from 'react-redux'
import TaskItem from '../components/task_item';
import {addTask, setTasks} from '../actions';

class TaskList extends Component {
  renderItems() {
    return this.props.tasks.map((task) => {
      return (
        <TaskItem key={task.created_at} {...task} />
      )
    })
  }

  addTestTask() {
    this.props.addTask({
      task: 'task123',
      type: 'dev',
      code: 'code123',
      hours: 1.5
    })
  }

  render() {
    return (
      <div className="TaskList">
        <button className="btn btn-primary" onClick={this.addTestTask.bind(this)}>
          Add test task
        </button>
        <div className="list-group">
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, {addTask, setTasks})(TaskList);
