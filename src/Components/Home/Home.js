import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; 

import CarouselSale from './CarouselSale'
import CarouselImg1 from './CarouselImg1'
import CarouselImg2 from './CarouselImg2'
import CarouselImg3 from './CarouselImg3'

import { Main, SaleWrapper, Sale, Tempur, Sealy, Stearns } from './HomeStyles';



const HomeComponent = () => {
  return (
    <Main>
      <Helmet>
        <title>E.S.C. Mattress Center</title>
        <meta name="description" content="
            We offer almost fifty mattresses in a wide range of prices to fit every budget.
            Our mattresses are made in the USA, with most of them coming from local manufacturing
            plants and are brands that most people know and trust. Sealy, Stearns & Foster, and Tempur-Pedic."/>
      </Helmet>
      <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={6000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
        <SaleWrapper>
          <Sale>
            <CarouselSale/>
          </Sale>
        </SaleWrapper>
        <Link to='/brands/stearns'>
          <Stearns>
            <CarouselImg1/>
          </Stearns>
        </Link>
        <Link to='/brands/tempurpedic'>
          <Tempur>
            <CarouselImg2/>
          </Tempur>
        </Link>
        <Link to='/brands/sealy'>
          <Sealy>
            <CarouselImg3/> 
          </Sealy>
        </Link>
      </Carousel>
    </Main>
  )
}

export default HomeComponent;