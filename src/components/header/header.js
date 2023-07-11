import React from "react";
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import {Navigation} from './menu/menu.js';
import {HeaderButton} from './button.js'


const HeaderWrapper = styled.div `
display: flex;
height: 93px;
font-family: 'Inter', sans-serif;
`
export function Header (){
    return (
        <HeaderWrapper >
            <div><img src={logo} alt="logo" /></div>
            <Navigation />
            <HeaderButton/>   
        </HeaderWrapper>
    )
}