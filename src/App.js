import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Menu/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component={Resumo}/>
                <Route path="/consultas" component={Consultas}/>
                <Route path="/faturamento" component={Faturamento}/>
              </Switch>
            </div>
          </div>
        </div>
        
      </>
    );
  }
}

export default App;
