import React, { useContext } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { StyledH2 } from '../featuredProducts/featuredProductsStyling';
import ItemDetails from '../../container/ItemDetails/ItemDetails';
import Cart from '../cart/cart';
import Navbar from '../Navbar/Navbar';
import { HashRouter as Router} from 'react-router-dom';
import {DataConText} from '../../container/context/Context';
import Payment from '../payment/Payment';
import Footer from '../footer/Footer';
import SideBar from '../sideBar/SideBar';
import { SectionsContainer } from './SectionsStyle';
import Home from '../home/home';

const Sections = () => {
    const context = useContext(DataConText);
    const productNumber = context.state.cart.length;
    const { isOpen } = context.state;
    const { toggle } = context;
    const centerStyle = {textAlign: "center"};

    return <SectionsContainer>
        <Router>
            <SideBar productNumber={productNumber} isOpen={isOpen} toggle={toggle} />
            <Navbar productNumber={productNumber} toggle= {toggle}/>
            <Switch>
                <Route path="/home" exact>
                    <Home showSlider={true}/>
                </Route>
                <Route path="/products">
                <Home showSlider={false}/>
                </Route>
                <Route path="/loginregister">
                    <StyledH2 style={centerStyle}>Register/ Login Page</StyledH2>
                </Route>
                <Route path="/cart"> <Cart /> </Route>
                <Route path="/payment" component={Payment}/>
                <Route path="/:id" component={ItemDetails}/>
                <Route path="/" component={() => (<Redirect to="/home" exact/>)} />
            </Switch>
            <Footer />
    </Router>
</SectionsContainer>
};

export default Sections;