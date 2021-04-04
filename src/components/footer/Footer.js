import React from 'react';
import { FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterWrap } from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/react-product-app-vatanclone/home">Home</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">History</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Who we Are</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Careers</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Our Team</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to="/react-product-app-vatanclone/">Contact</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Support</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Sponsorship</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Warranty</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle> Products </FooterLinkTitle>
                            <FooterLink to="/react-product-app-vatanclone/products">Phones</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Tables</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Tv</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Gaming</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Agency</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Influences</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to="/react-product-app-vatanclone/">Instagram</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Facebook</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Youtube</FooterLink>
                            <FooterLink to="/react-product-app-vatanclone/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;