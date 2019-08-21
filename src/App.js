import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

class App extends React.Component {
  constructor(props){
      super(props);
    //this.btn_setstate=this.btn_setstate.bind(this);
  }
   render(){
  return (
    <Router >
      <Header/>
        <div className="container">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
       <Route component={NotFound}/>     
        </Switch>
        </div>
    </Router>
  );
   }
}

export default App;
