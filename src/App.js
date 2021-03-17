import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Pages/Home"
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
            
          <Route path="/services" component={Services}/>
          <Route path="/products" component={Products}/>
          <Route path="/sign-up" component={SignUp}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
