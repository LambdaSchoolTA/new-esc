import React, {Fragment} from 'react'
import DropDown from './DropDown';
import {MattSet, MattOnly, PriceTitle} from './PricingStyles'

const Pricing = (props) => {
 
  return (
    <Fragment>
      <MattOnly>
          <PriceTitle>Mattress Only Price</PriceTitle>
          <DropDown data={props.mattOnly} data2={props.mattOnlySale}/>
        </MattOnly>
        <MattSet>
          <PriceTitle>Mattress Set Price</PriceTitle>
          <DropDown data={props.setPrice}/>
        </MattSet>
      
    </Fragment>
  )
}

export default Pricing;