import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';

import {  MainWrapper, Wrapper, LinkWrapper, StyledLink,
  MattImg, MainTitle, SealyImgPlace, SealyName } from './MattListStyles';
import SealyImg from '../../images/SealyLogo.png';

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Sealy</title>
          <meta name="description" content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."/>
        </Helmet>
        <MainTitle>
          <SealyImgPlace src={SealyImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {essentials.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg image={mattress.coverImg} maxWidth={290} withWebp={true} fit="clip" blurryPlaceholder={false}/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink>
              </LinkWrapper>
          ))}
            {performance.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg image={mattress.coverImg} maxWidth={290} withWebp={true} fit="clip" blurryPlaceholder={false}/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink>
              </LinkWrapper>
          ))}
            {premium.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg image={mattress.coverImg} maxWidth={290} withWebp={true} fit="clip" blurryPlaceholder={false}/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink>
              </LinkWrapper>
          ))}
        </Wrapper>
      </MainWrapper>
      )
    }
  return null
}


export const sealyMattresses = gql`
  query subBrands {
    essentials: SubLine(subLineName: "essentials") {
    mattresses {
      brandName
      uri
      id
      subBrand
      subName
      coverImg {
        handle
        width
        height
      }
    }
  },
  performance: SubLine(subLineName: "performance") {
    mattresses {
      brandName
      id
      uri
      subBrand
      subName
      coverImg {
        handle
        width
        height
      }
    }
  },
  premium: SubLine(subLineName: "premium") {
    mattresses {
      brandName
      id
      uri
      subBrand
      subName
      coverImg {
        handle
        width
        height
      }
    }
  }
}`
export default graphql(sealyMattresses)(Sealy);

