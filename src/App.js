import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/pages';
import About from './Pages/aboutTest';
import Products from './Pages/products';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products}/>
    </Switch>
    </Router>
  );
}

export default App;
