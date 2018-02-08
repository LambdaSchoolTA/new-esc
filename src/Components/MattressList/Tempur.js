import React from 'react';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import {  MainWrapper,
          Wrapper,
          LinkWrapper,
          StyledLink,
          MattImg,
          Name, MainTitle, TempurPImg  } from './MattListStyles';

import TempurImg from '../../images/TempurLogo2.png';


const Tempur = ({ data: { loading, error, Brands} }) => {
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Tempur-Pedic</title>
          <meta name="description" content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."/>
        </Helmet>
        <MainTitle>
          <TempurPImg src={TempurImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return ( 
              <LinkWrapper  key={mattress.id}>
                <StyledLink to={`/brands/tempurpedic/${mattress.uri}`}>
                  <MattImg image={mattress.coverImg} maxWidth={290} withWebp={true} fit="clip" blurryPlaceholder={false}/>
                  <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>)
          })}
          </Wrapper>
      </MainWrapper>
    )
  }
  return null
}

export const tempurMattresses = gql`
  query tempurMattresses {
    Brands(brand:"Tempur-Pedic") {
      mattresses {
        uri
        brandName
        id
        subName
        subBrand
        coverImg {
          handle
          width
          height
        }
      }
    }
  }
` 


export default graphql(tempurMattresses)(Tempur);