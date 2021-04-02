import {React, useState, useEffect, useContext} from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { StyledSpan, StyledH3 } from '../featuredProducts/featuredProductsStyling';
import { MdArrowForward } from 'react-icons/md';
import FeaturedProducts from '../featuredProducts/featuredProducts';
import About from '../../Pages/aboutTest';
import ItemDetails from '../featuredProducts/ItemDetails/ItemDetails';
import Cart from '../cart/cart';
import BestSellerProducts from '../bestSellerProducts/BestSellerProducts';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataConText} from '../../context/context';


const Sections = () => {
    const contextType = useContext(DataConText);
    const  [state, setState] = useState({

    });
    const productNumber = contextType.state.cart.length;

    console.log('prodN:',productNumber);
    const allProd = <Link to="/products"> <StyledH3>All Products <StyledSpan><MdArrowForward /></StyledSpan> </StyledH3> </Link>;
    return (
        <Router>
            <Navbar productNumber={productNumber} />
            <Switch>
                <Route path="/home" exact>
                    <div>Image Gallery Slider</div>
                    <FeaturedProducts number={6} featuredTitle= "Featured Products" allProducts={allProd} />
                    <BestSellerProducts number={13} featuredTitle= "Best Seller Products" allProducts={allProd} />
                </Route>
                <Route path="/products">
                        <FeaturedProducts number={100} featuredTitle= "All Products"/>
                        <BestSellerProducts number={100} featuredTitle= "" />
                </Route>
                <Route path="/about"> <About /> </Route>
                <Route path="/cart"> <Cart /> </Route>
                <Route path="/:id"> <ItemDetails /></Route>
            </Switch>
        </Router>
    );
};

export default Sections;

/*
export default class Sections extends Component {
    static contextType = DataConText;
    render() {
    const productNumber = this.context.state.cart.length;
    console.log('prodN:',productNumber);
    const allProd = <Link to="/products"> <StyledH3>All Products <StyledSpan><MdArrowForward /></StyledSpan> </StyledH3> </Link>;
        return (
        <Router>
            <Navbar productNumber={productNumber} />
            <Switch>
                <Route path="/home" exact>
                    <div>Image Gallery Slider</div>
                    <FeaturedProducts number={6} featuredTitle= "Featured Products" allProducts={allProd} />
                    <BestSellerProducts number={13} featuredTitle= "Best Seller Products" allProducts={allProd} />
                </Route>
                <Route path="/products">
                        <FeaturedProducts number={100} featuredTitle= "All Products"/>
                        <BestSellerProducts number={100} featuredTitle= "" />
                </Route>
                <Route path="/about"> <About /> </Route>
                <Route path="/cart"> <Cart /> </Route>
                <Route path="/:id"> <ItemDetails /></Route>
            </Switch>
        </Router>
        );
    }
}*/