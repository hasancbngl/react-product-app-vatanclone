import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { StyledSpan, StyledH3 } from '../featuredProducts/featuredProductsStyling';
import { MdArrowForward } from 'react-icons/md';
import FeaturedProducts from '../featuredProducts/featuredProducts';
import About from '../../Pages/aboutTest';
import ItemDetails from '../featuredProducts/ItemDetails/ItemDetails';
import Cart from '../cart/cart';
import BestSellerProducts from '../bestSellerProducts/BestSellerProducts';

const Sections = () => {
    const allProd = <Link to="/products"> <StyledH3>All Products <StyledSpan><MdArrowForward /></StyledSpan> </StyledH3> </Link>;
    return <Switch>
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
        <Route path="/:id" component={ItemDetails}/>
        </Switch>
};

export default Sections;