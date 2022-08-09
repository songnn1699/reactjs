import React, { useState } from 'react';
import { Box, Center, Container, IconButton, useBreakpointValue, Flex, Image } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Settings for the slider
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  
  centerPadding: "0px",
  slidesToShow: 5,
  speed: 1000,
  dots: true,
  autoplay:true,
  autoplaySpeed:3000,
  slidesToScroll:3,
  blur: 20,

  // className: "center",
  // centerMode: true,
  // centerPadding: "60px",
  // dots: true,
  // arrows: false,
  // fade: true,
  // infinite: true,
  // autoplay: true,
  // speed: 500,
  // autoplaySpeed: 3000,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ],

};

export default function CarouselHome(props) {
  const {data} =props
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState()
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  
  // These are the images used in the slide

  return (
    
      <Slider
        {...settings}>
          {data.map((url) => (
          // <Box
          //   // height='100%'
            
          //   // width='100%'
          //       // height='500px'
          //       // position="absolute"
          //       backgroundPosition="center"  
          //       backgroundSize={'cover'}
          //       backgroundRepeat="no-repeat"
                
          //       backgroundImage={`url(${url.urls.regular})`}
          //     >
          // </Box>
            <Image
              height={'700px'}
              width={'1500px'}
              // boxSize='700px'
              objectFit='cover'
              alt='loading'
              src ={url.urls.regular} 
            >
            </Image>
        ))}
        </Slider>
    
    // <Container
    //     align='center'
    //   position={'relative'}
    //   w={'1000px'}
    //   height={'700px'}
    //   width={'100%'}
      
    //   overflow={'hidden'}
    //   >
  )
      
      
}