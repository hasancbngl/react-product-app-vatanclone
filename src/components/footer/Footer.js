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
                            <FooterLink to="/products">History</FooterLink>
                            <FooterLink to="/home">Who we Are</FooterLink>
                            <FooterLink to="/home">Careers</FooterLink>
                            <FooterLink to="/home">Our Team</FooterLink>
                            <FooterLink to="/home">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/home">Home</FooterLink>
                            <FooterLink to="/products">History</FooterLink>
                            <FooterLink to="/home">Who we Are</FooterLink>
                            <FooterLink to="/home">Careers</FooterLink>
                            <FooterLink to="/home">Our Team</FooterLink>
                            <FooterLink to="/home">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/home">Home</FooterLink>
                            <FooterLink to="/products">History</FooterLink>
                            <FooterLink to="/home">Who we Are</FooterLink>
                            <FooterLink to="/home">Careers</FooterLink>
                            <FooterLink to="/home">Our Team</FooterLink>
                            <FooterLink to="/home">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/home">Home</FooterLink>
                            <FooterLink to="/products">History</FooterLink>
                            <FooterLink to="/home">Who we Are</FooterLink>
                            <FooterLink to="/home">Careers</FooterLink>
                            <FooterLink to="/home">Our Team</FooterLink>
                            <FooterLink to="/home">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;