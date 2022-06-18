import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Header from './Components/Header.js';
import TodoList from './Components/TodoList.js';
import {FormInput} from './Components/FormInput.js';

function App() {

  const [tasks, setTasks] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <h1>A List of Tasks To Do</h1>
        <TodoList tasks={tasks} />
        <button type="button" onClick={() => setOpenForm(true)} className="add-btn">Add Task</button>
      </div>
      <FormInput openForm={openForm} setOpenForm={setOpenForm} setTasks={setTasks} />
    </div>
  );
}

export default App;
