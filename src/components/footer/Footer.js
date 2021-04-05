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
                            <FooterLink to="/home">Home</FooterLink>
                            <FooterLink to="/">History</FooterLink>
                            <FooterLink to="/">Who we Are</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Our Team</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Sponsorship</FooterLink>
                            <FooterLink to="/">Warranty</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle> Products </FooterLinkTitle>
                            <FooterLink to="/products">Phones</FooterLink>
                            <FooterLink to="/">Tables</FooterLink>
                            <FooterLink to="/">Tv</FooterLink>
                            <FooterLink to="/">Gaming</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influences</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;