// App.js
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/submit" component={ProjectForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
