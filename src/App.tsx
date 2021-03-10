import React from 'react';
import { Route , Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
