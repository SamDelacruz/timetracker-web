import React from 'react';
import { Component } from 'react';
import TaskList from '../containers/task_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <TaskList />
      </div>
    );
  }
}
