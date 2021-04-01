import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Pages/aboutTest';
import DataProvider from './context/context';
import Details from './components/products/featuredProducts/ItemDetails/ItemDetails';
import FeaturedProducts from './components/products/featuredProducts/featuredProducts';
import { StyledSpan, StyledH3 } from './components/products/featuredProducts/featuredProductsStyling';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const allProd = <Link to="/products"> <StyledH3>All Featured Products <StyledSpan><MdArrowForward /></StyledSpan> </StyledH3> </Link>;
  return (
    <DataProvider>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/home" exact>
        <FeaturedProducts number={6} featuredTitle= "Featured Products" allProducts={allProd} />
        DiscountProducts
      </Route>
      <Route path="/products">
        <FeaturedProducts number={100}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/:id" component={Details}/>
    </Switch>
    </Router>
    </DataProvider>
  );
}

export default App;
