import React from "react";
import styled, {createGlobalStyle,keyframes} from 'styled-components';;
import footerLogo from '../../assets/footerLogo.png'


const FooterWraper =styled.div`
background-color:#029491;
display: flex;
height: 103px;
`;

const Adress =styled.div`
display: flex;
width: 199px;
height: 51px;
margin-top: 25px;
margin-left: 70%;

`


export function Footer (){
    return (
        
            <FooterWraper >
                <div className="footer-logo"><img src={footerLogo} alt="logo" /></div>
                <Adress>г. Москва, Цветной б-р, 40
                +7 495 771 21 11 info@skan.ru</Adress>
            </FooterWraper>

        
    )
}