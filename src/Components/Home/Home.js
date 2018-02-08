import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; 
import { Main, SaleWrapper} from './HomeStyles';
import SaleComp from './SaleComp'
import CarImg1 from './CarImg1';
import CarImg2 from './CarImg2';
import CarImg3 from './CarImg3'
import styled from 'styled-components';

const Sale = styled.div`
  max-width: 240px;
  max-height: 240px;
  margin: auto;
  background-color: #eb1c24;
  @media(min-width: 600px) {max-height: 350px; max-width: 400px; }
  @media(min-width: 768px) { max-width: 500px; max-height: 700px; }
  @media(min-width: 1024px) { width: 500px !important; height: 800px; }
`;


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
          <SaleComp/>
        </Sale>
        </SaleWrapper>
        <Link to="/brands/stearns">
          <CarImg1/>
        </Link>
        <Link to="/brands/tempurpedic">
          <CarImg2/>
        </Link>
        <Link to="/brands/sealy">
          <CarImg3/>
        </Link>
      </Carousel>
    </Main>
  )
}

export default HomeComponent;