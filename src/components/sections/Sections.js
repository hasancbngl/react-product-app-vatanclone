import {React, Component} from 'react';
import { Switch, Route, Link, Redirect} from 'react-router-dom';
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
import ImageSlider from '../../container/imageSlider/ImageSlider';
import { ImageSliderData } from '../../container/imageSlider/ImageSliderData';
import Footer from '../footer/Footer';
import SideBar from '../sideBar/SideBar';
import { SectionsContainer } from './SectionsStyle';


export default class Sections extends Component {
    static contextType = DataConText;

    render() {
    const productNumber = this.context.state.cart.length;
    const { isOpen } = this.context.state;
    const { toggle } = this.context;
    const allProd = <Link to="/react-product-app-vatanclone/products"> <StyledH3>All Products <StyledSpan><MdArrowForward /></StyledSpan> </StyledH3> </Link>;
    const centerStyle = {textAlign: "center"};

        return (
        <SectionsContainer>
            <Router>
                <SideBar productNumber={productNumber} isOpen={isOpen} toggle={toggle} />
                <Navbar productNumber={productNumber} toggle= {toggle}/>
                <Switch>
                    <Route path="/react-product-app-vatanclone/home" exact>
                        <ImageSlider slides={ImageSliderData}/>
                        <FeaturedProducts number={6} featuredTitle= "Featured Products" allProducts={allProd} />
                        <BestSellerProducts number={13} featuredTitle= "Best Seller Products" allProducts={allProd} />
                        </Route>
                        <Route path="/react-product-app-vatanclone/products">
                            <FeaturedProducts number={100} featuredTitle= "All Products"/>
                            <BestSellerProducts number={100} featuredTitle= "" />
                        </Route>
                        <Route path="/react-product-app-vatanclone/loginregister">
                            <StyledH2 style={centerStyle}>Register/ Login Page</StyledH2>
                        </Route>
                        <Route path="/react-product-app-vatanclone/cart"> <Cart /> </Route>
                        <Route path="/react-product-app-vatanclone/payment" component={Payment}/>
                        <Route path="/react-product-app-vatanclone/:id" component={ItemDetails}/>
                        <Route path="/react-product-app-vatanclone/" component={() => (<Redirect to="/react-product-app-vatanclone/home" />)} />
                    </Switch>
                    <Footer />
            </Router>
        </SectionsContainer>
        );
    }
}