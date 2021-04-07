import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../container/imageSlider/ImageSlider';
import { ImageSliderData } from '../../container/imageSlider/ImageSliderData';
import FeaturedProducts from '../featuredProducts/featuredProducts';
import BestSellerProducts from '../bestSellerProducts/BestSellerProducts';
import { StyledSpan, StyledH3 } from '../featuredProducts/featuredProductsStyling';
import { MdArrowForward } from 'react-icons/md';

const Home = ({ showSlider }) => {
    const allProd = <Link to="/products"> <StyledH3>All Products <StyledSpan><MdArrowForward /></StyledSpan></StyledH3> </Link>;

    if(showSlider) return <div>
            <ImageSlider slides={ImageSliderData}/>
            <FeaturedProducts number={6} featuredTitle= "Featured Products" allProducts={allProd} />
            <BestSellerProducts number={13} featuredTitle= "Best Seller Products" allProducts={allProd} />
            </div>
    else return <div>
            <FeaturedProducts number={100} featuredTitle= "All Products"/>
            <BestSellerProducts number={100} featuredTitle= "" />
            </div>
};

export default Home;