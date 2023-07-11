import React from "react";
import styled from 'styled-components';

const title=styled.h2`
font-size:45px;
font-family: 'Ferry';
font-weight: 900;
`;

const SliderWrapper=styled.div`
`

export function Page2() {
    return(
        <div>
            <title>
            Почему именно мы
            </title>
            <SliderWrapper>
                <button class="prew">
                                <div class = "icon">
                                    <img class="icon-img" src = "../slider/img/arrow-left.svg" alt="arrow-left"/>
                                </div>
                            </button>
                <div class="slider">
                    <div class="slider-line">
                        <div class="item"> 
                            <img class="sliderImg" src="../slider/img/Rostov-on-Don Patriotic.png" alt="Rostov-on-Don,Patriot" />
                        </div>
                        <div class="item"> 
                            <img class="sliderImg" src="../slider/img/Rostov-on-Don, Admiral.png" alt="Rostov-on-Don,Admiral" />
                        </div>
                        <div class="item"> 
                            <img class="sliderImg" src="../slider/img/Sochi Thieves.png" alt="Sochi" />
                        </div>
                    </div>
                </div>  
                <button class="next">
                                <div class = "icon">
                                    <img class="icon-img" src = "../slider/img/arrow-right.svg" alt="arrow-right"/>
                                </div>
                            </button>

            </SliderWrapper>
        </div>
        

    )
}