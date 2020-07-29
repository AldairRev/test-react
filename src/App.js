import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

class App extends React.Component {
  
  state = {
    tasks: tasks
  }
  
  addTask = (title, descripcion) => {
    const newTask = {
      title: title,
      descripcion: descripcion,
      id: this.state.tasks.length + 1
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/" render={() => {
            return <div>
              <TaskForm addTask={this.addTask} />
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
            </div>
          }}>

          </Route>
          <Route path="/posts" component={Posts}>
            <Posts/>
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
