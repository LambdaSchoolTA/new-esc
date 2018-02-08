import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Helmet } from "react-helmet";
import { Wrapper, MainTitle, Main, MainInfo, PriceWrapper,
        MattOnly, PriceTitle, Warranty, Description, Overview,
        Article, StyledMarkDown, Profile }
        from '../SingleMattress/SingleMattStyles';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer2';
import { Redirect } from 'react-router-dom';

const SingleBase = ({data: { loading, error, base}}) => {
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    if(!base) return <Redirect to='/404'/>
    return(
      <Wrapper>
        <Helmet>
          <title>ESC: {base.fullName}</title>
          <meta name="description" content={base.baseDescription}/>
        </Helmet>
        <MainTitle>
          <h1>{base.fullName}</h1>
        </MainTitle>
        <Main>
          <ImageViewer cover={base.coverImg} img1={base.detail1} img2={base.detail2} />
          <MainInfo>
            <StyledMarkDown source={base.features} escapeHtml={false} />
            <PriceWrapper>
              <MattOnly>
                <PriceTitle>Base Price</PriceTitle>
                <DropDown data={base.price}/>
              </MattOnly>
            </PriceWrapper>
          </MainInfo>
        </Main>
        <Overview>
          <h2>OVERVIEW & SPECS</h2>
        </Overview>
        <Article>
          <Description>
            {base.baseDescription}
          </Description>
          <Profile>Profile: {base.height}</Profile>
          <StyledMarkDown source={base.keyfeatures} escapeHtml={false} />
          <Warranty>{base.warranty}</Warranty>
        </Article>
      </Wrapper>
    )
  }
  return null
}

export const singleBase = gql`
query singleBase($uri: String) {
  base: AdjBases(uri: $uri) {
    id
    uri
    fullName
    keyfeatures
    features
    price
    brandLine
    brandName
    baseDescription
    height
    warranty
    coverImg {
      handle
      width
      height
    }
    detail1 {
      handle
      width
      height
    }
    detail2 {
      handle
      width
      height
    }
  }
}
`
export default graphql(singleBase, {
  options: ({ match }) => ({
    variables: {
      uri: match.params.uri
    }
  })
})(SingleBase)