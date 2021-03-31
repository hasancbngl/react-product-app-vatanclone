import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/pages';
import About from './Pages/aboutTest';
import DataProvider from './context/context';
import Details from './context/details/details';
import Products from './components/Navbar/products/products';

function App() {
  return (
    <DataProvider>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products} exact/>
      <Route path="/products/:id" component={Details}/>
    </Switch>
    </Router>
    </DataProvider>
  );
}

export default App;
