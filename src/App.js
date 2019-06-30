import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import TasksView from "./components/tasks/TasksView";

class App extends Component {
  // State is hard-coded for now! No back-end/API yet to use
  state = {
    tasks: [
      {
        id: 1,
        title: "General",
        todo: ["Wash dishes", "Get license"],
        notes: null
      },
      {
        id: 2,
        title: "Dev",
        todo: ["Get license", "Sprint 1"],
        notes: "Will need to consult with Head for Proposals"
      },
      {
        id: 3,
        title: "Mgt",
        todo: ["Meeting", "Print Documents"],
        notes: "Don't forget to inform supervisor of meeting!"
      }
    ],
    name: "Allen"
  };

  render() {
    const { tasks, name } = this.state;
    // Avatar_url is hard-coded for now
    const avatar_url = "https://avatars3.githubusercontent.com/u/28593720?v=4";
    return (
      <div className='App'>
        <Navbar />
        <div className='all-center m-3'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: "70px" }}
          />
          <h1 className='large'>{name}'s Tasks</h1>
        </div>

        <TasksView tasks={tasks} />
      </div>
    );
  }
}

export default App;
