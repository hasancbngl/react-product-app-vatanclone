import {React, Component} from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { StyledSpan, StyledH3, StyledH2 } from '../featuredProducts/featuredProductsStyling';
import { MdArrowForward } from 'react-icons/md';
import FeaturedProducts from '../featuredProducts/featuredProducts';
import ItemDetails from '../../container/ItemDetails/ItemDetails';
import Cart from '../cart/cart';
import BestSellerProducts from '../bestSellerProducts/BestSellerProducts';
import Navbar from '../Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataConText} from '../../container/context/Context';
import Payment from '../payment/Payment';
import ImageSlider from '../imageSlider/ImageSlider';
import { ImageSliderData } from '../imageSlider/ImageSliderData';
import Footer from '../footer/Footer';


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
                    <ImageSlider slides={ImageSliderData}/>
                    <FeaturedProducts number={6} featuredTitle= "Featured Products" allProducts={allProd} />
                    <BestSellerProducts number={13} featuredTitle= "Best Seller Products" allProducts={allProd} />
                </Route>
                <Route path="/products">
                        <FeaturedProducts number={100} featuredTitle= "All Products"/>
                        <BestSellerProducts number={100} featuredTitle= "" />
                </Route>
                <Route path="/loginregister">
                    <StyledH2 style={{textAlign: "center"}}>Register/ Login Page</StyledH2>
                </Route>
                <Route path="/cart"> <Cart /> </Route>
                <Route path="/payment" component={Payment}/>
                <Route path="/:id" component={ItemDetails}/>
                <Route path="/">
                     <StyledH2 style={{textAlign: "center"}}>Welcome to my page</StyledH2>
                     <StyledH3 style={{textAlign: "center", display: "block"}}>Happy Shopping</StyledH3>
                </Route>
            </Switch>
            <Footer />
        </Router>
        );
    }
}