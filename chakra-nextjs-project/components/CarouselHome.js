import React, { useState } from 'react';
import { Box, Center, Container, IconButton, useBreakpointValue, Flex, Image } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Settings for the slider


const CarouselHome=(props) => {
  const {data} =props
  const [slider, setSlider] = useState(0)

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    lazyload:true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1000,
    dots: true,
   
    autoplay:true,
    autoplaySpeed:2000,
    slidesToScroll:1,

    beforeChange: (current, next) => setSlider(next),
  
  };
  
  return (
    
      <Slider
        {...settings}>
          {data.results.map((url, idx) => (
              <Box className={idx === slider ? "center" : "slide"} key={url.id}>
                <Image 
                  // height={'700px'}
                  // width={'1500px'}
                  boxSize='700px'
                  objectFit='cover'
                  alt='loading'
                  src ={url.urls.regular} 
                >
                </Image>
              </Box>
              
        ))}
        </Slider>
    
  )
      
      
}

export default CarouselHome