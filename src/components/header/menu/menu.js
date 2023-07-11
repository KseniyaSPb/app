import React from "react";
import styled from 'styled-components';


const Menu = styled.ul`
display: inline-flex;
list-style-type: none;
padding: 0; 
margin: 20px auto;
text-align: center;
text-decoration: none;
`;

const MenuItem=styled.li`
margin-left: 30px;
`

export function Navigation (){
    return (
        <Menu>
            <MenuItem><a href="#">Главная</a></MenuItem>
            <MenuItem><a href="#">Тарифы</a></MenuItem>
            <MenuItem><a href="#">FAQ</a> </MenuItem>
        </Menu>    
    )
}