import React, { Children, cloneElement, useEffect, useState } from "react";
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

import card1 from '../../../../assets/card1.png';
import card2 from '../../../../assets/card2.png';
import card3 from '../../../../assets/card3.png';


import Carousel from 'react-bootstrap/Carousel';

export function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}
