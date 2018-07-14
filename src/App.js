import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
var randomstring = require('randomstring');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isDisplay: false,
      Editing: [],
      filterName: '',
      filterStatus: -1,
      search: '',
      sortBy: '',
      sortValue: ''
    }
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks
      }) 
    }
  }
  onToggleForm = () => {
    if(this.state.isDisplay && this.state.Editing !== null){
      this.setState({
        isDisplay: true,
        Editing: null
      })
    }else {
      this.setState({
        isDisplay: !this.state.isDisplay,
        Editing: null
      })
    }
    
  }
  onCloseForm = () => {
    this.setState({
      isDisplay: false
    })
  }
  onShowForm = () => {
    this.setState({
      isDisplay: true
    })
  }
  Generater = () => {
    var tasks = [
      {
        id: randomstring.generate(),
        name: 'Facebook',
        status: true
      },
      {
        id: randomstring.generate(),
        name: 'Google',
        status: false
      }
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  addForm = (data) => {
    var {tasks} = this.state;
    if(data.id === ''){
      data.id = randomstring.generate();
      tasks.push(data);
    }else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks:tasks,
      Editing: null
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  updateStatus = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }

  }
  removeTasks = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    console.log(index);
    if(index !== -1) {
      tasks.splice(index,1);
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    this.onCloseForm();
  }
  findIndex = (id) => {
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task,index) => {
      if(task.id === id) {
        result = index;
      }
    })
    return result;
  }
  onUpdateTasks = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      var Editings = tasks[index];
      this.setState({
        Editing: Editings
      })
    }
    this.onShowForm();
  }
  onFilter = (filterName,filterStatus) => {
    filterName = filterName.toLowerCase();
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filterName: filterName,
      filterStatus: filterStatus
    })
    
  }
  onSearch = (search) => {
    this.setState({
      search: search.toLowerCase()
    })
  }
  onSort = (sortBy,sortValue) => {
    this.setState({
      sortBy,
      sortValue
    })
  }
  render() {
    var {tasks, isDisplay,Editing,filterName,filterStatus,search,sortBy,sortValue} = this.state;
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(filterName) !== -1
    })
    tasks = tasks.filter((task) => {
      if(filterStatus === -1){
        return task
      }else{
        return filterStatus === (task.status === true ? 1 : 0)
      }
    })
    if(search){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
    }
    if(sortBy === 'name'){
      tasks = tasks.sort((a,b) => {
        if(a.name > b.name) return sortValue;
        else if(a.name < b.name) return -sortValue;
        else return 0;
      })
    }else {
      tasks = tasks.sort((a,b) => {
        if(a.status > b.status) return -sortValue;
        else if(a.status < b.status) return sortValue;
        else return 0;
      })
    }
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {
            isDisplay &&
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <TaskForm addForm={this.addForm} Editing={Editing} onCloseForm={this.onCloseForm}/>
              </div>
          }
          <div className={isDisplay ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button type="button" className="btn btn-primary ml" onClick={this.Generater}>
              Generater
            </button>
            <Control onSearch={this.onSearch} onSort={this.onSort}/>
            <TaskList 
              tasks={tasks} 
              updateStatus={this.updateStatus} 
              removeTasks={this.removeTasks}
              onUpdateTasks={this.onUpdateTasks}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
