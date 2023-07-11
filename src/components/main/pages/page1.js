import React from "react";
import styled from 'styled-components';
import man from '../../../assets/man.png'

const Page1Wrapper=styled.div`
display: flex;
height: 620px;
`
const Text=styled.div`
`
const Title=styled.h1`
padding-left: 10px;
text-align :left;
height:288px;
width: 743px;
font-size:60px;
font-family: 'Ferry';
font-weight: 900;
`

const Paragraph=styled.p`
font-family: 'Inter', sans-serif;
margin-left: 60px;
padding: 0;
height:48px;
width: 534px;
font-size: 20px;
font-weight:400;
text-align :left
`
const Button1=styled.button`
background-color:#5970FF;
color: #ffff;
height:59px;
width: 335px;
border-radius:5px;
font-family: 'Inter', sans-serif;
font-size:22px;
padding:0;
margin:0;
box-shadow:none;
`
const ImgPage1=styled.div`
height:629px;
width: 620px;
`

export function Page1(){
    return (
        <Page1Wrapper>
            <Text>
                <Title>сервис по поиску публикаций о компании по его ИНН</Title>
                <Paragraph>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту. </Paragraph>
                <Button1>Запросить данные</Button1>
            </Text>
            <ImgPage1> <img src={man} alt="picture"></img></ImgPage1>
        </Page1Wrapper>
    )
}