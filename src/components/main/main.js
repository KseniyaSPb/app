import React from "react";
import styled from 'styled-components';
import {Page1} from '../main/pages/page1';
import {Page2} from '../main/pages/page2';


const MainWrapper=styled.div`

`
export function Main (){
    return (
        <MainWrapper>
            <Page1/>
            <Page2 />
        </MainWrapper>
    )
}