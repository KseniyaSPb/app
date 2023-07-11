import React from "react";
import styled from 'styled-components';



const ValidationForm = styled.button`
display: inline-flex
`

export function HeaderButton (){
    return(
        <ValidationForm>
            <a href="#">Зарегистрироваться</a>
            <div></div>
            <button></button>
        </ValidationForm>
    )
}