import React from 'react';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import {  MainWrapper, Wrapper, LinkWrapper, StyledLink,
          MattImg, MainTitle, StearnsImgPlaceHolder, StearnName
        } from './MattListStyles';

import StearnsImg from '../../images/StearnsLogo.png';

const Stearns = ({ data: { loading, error, Brands} }) => {
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Stearns & Foster</title>
          <meta name="description" content="One of the oldest mattress manufactures in in the US, Stearns and Foster offers traditional luxury that you deserve. Come feel the luxury your body deserves on the new Stearns and Foster lines.  Raise your expectations with an adjustable base for the ultimate in comfort."/>
        </Helmet>
        <MainTitle>
          <StearnsImgPlaceHolder src={StearnsImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return (
              <LinkWrapper  key={mattress.id} className="animated fadeIn">
                <StyledLink to={`/brands/stearns/${mattress.uri}`}>
                  <MattImg image={mattress.coverImg} maxWidth={290} withWebp={true} fit="clip" blurryPlaceholder={false}/>
                  <StearnName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</StearnName>
                </StyledLink>
              </LinkWrapper>)
          })}
          </Wrapper>
      </MainWrapper>
    )
  }
  return null
};

export const stearnsMattresses = gql`
  query stearnsMattresses {
    Brands(brand:"Stearns&Foster") {
      mattresses {
        brandName
        uri
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
`; 
export default graphql(stearnsMattresses)(Stearns);