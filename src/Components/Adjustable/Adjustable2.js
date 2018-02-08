import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Helmet } from "react-helmet";
import { AdjMarkdown, Main, StyledLink, H3, InfoWrapper, Img} from './AdjustableStyles2';

const AdjustableComponent = ({ data: {error, loading, Bases} }) => {
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    return (
    <Main>
      <Helmet>
        <title>ESC: Ajustable Bases</title>
        <meta name="description" content="E.S.C. Mattress Center carry 4 different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."/>
      </Helmet>
      {Bases.map((base) => (
        <StyledLink to={`/adjustable/${base.uri}`} key={base.id}>
          <H3>{base.fullName}</H3>
          <InfoWrapper>
            <Img image={base.coverImg} maxWidth={500} withWebp={true} fit="clip" blurryPlaceholder={false}/>
            <AdjMarkdown source={base.features} escapeHtml={false} />
          </InfoWrapper>
        </StyledLink>
        
      ))}
      </Main>
    )
  }
  return null
};

export const allAdjustables = gql`
  query allAdjustables {
    Bases: allAdjBaseses {
      uri
      id
      fullName
      features
      coverImg {
        handle
        width
        height
    }
  }
}
`;
export default graphql(allAdjustables)(AdjustableComponent);