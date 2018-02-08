import React, {Fragment} from 'react';
import GraphImg from 'graphcms-image';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

const SaleComp = ({ data: { loading, error, Carousel }}) => {
  if(error) return console.log(error)
  if(!loading) {
    return (
      <Fragment>
        <GraphImg image={Carousel.sale} maxWidth={800} withWebp={true} fit="clip"/>
      </Fragment>
    )
  }
  return null
}

export const query = gql`
  query allAssets {
    Carousel(id:"cjdc1no0pobkl0159tuo2lj52"){
      sale{
        uri
        width
        height
        handle
      }
      pic1 {
        uri
        width
        height
        handle
      }
      pic2 {
        uri
        width
        height
        handle
      }
      pic3 {
        uri
        width
        height
        handle
      }
    }
  }
`;
export default graphql(query)(SaleComp);