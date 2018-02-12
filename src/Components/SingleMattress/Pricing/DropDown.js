import React from 'react';
import { Wrapper, WholeThing,
        ButtonWrapper, Button,
        DropDownWrapper, Price, TopButton 
      } from './DropDownStyles';
import styled from 'styled-components';

const Poop = styled.div`
  text-decoration: line-through;
  text-decoration-color: red;
`
const Row = styled.div`
display: flex;
justify-content: space-around;
width: 130px;
`
class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonContent: 'Select Size',
      open: false,
      selected: 0
    }
    this.handleDropdown = this.handleDropdown.bind(this);
    this.drop = this.drop.bind(this);
  }
  handleDropdown() {
    this.setState({
      open: !this.state.open
    })}

  drop(e) {
    this.setState({
      selected: e.currentTarget.dataset.id
    })
    this.handleDropdown();
  }
  
  selector() {
    const { selected } = this.state;

    switch(selected) {
      case '1':
        this.setState({ buttonContent: 'Twin', })
        if(this.props.data2 === undefined || this.props.data2[0] === 0) {
          return `$${this.props.data[0]}`
        } 
        return  (<Row><Poop>{`$${this.props.data[0]}`}</Poop> <div>{`$${this.props.data2[0]}`}</div></Row>)
          
      case '2':
        this.setState({ buttonContent: 'TwinXL', })
        if(this.props.data2 === undefined || this.props.data2[1] === 0) {
          return `$${this.props.data[1]}`;
        } 
        return  (<Row><Poop>{`$${this.props.data[1]}`}</Poop> <div>{`$${this.props.data2[1]}`}</div></Row>)

      case '3':
        this.setState({ buttonContent: 'Full', })
        if(this.props.data2 === undefined || this.props.data2[2] === 0) {
          return `$${this.props.data[2]}`
        } 
        return  (<Row><Poop>{`$${this.props.data[2]}`}</Poop> <div>{`$${this.props.data2[2]}`}</div></Row>)
        
      case '4':
        this.setState({ buttonContent: 'Queen', })
        if(this.props.data2 === undefined || this.props.data2[3] === 0) {
          return `$${this.props.data[3]}`
        }
        return  (<Row><Poop>{`$${this.props.data[3]}`}</Poop> <div>{`$${this.props.data2[3]}`}</div></Row>) 
        
      case '5':
        this.setState({ buttonContent: 'King/Cal. King', })
        if(this.props.data2 === undefined || this.props.data2[4] === 0) {
          return `$${this.props.data[4]}`
        }
        return  (<Row><Poop>{`$${this.props.data[4]}`}</Poop> <div>{`$${this.props.data2[4]}`}</div></Row>)
      default:
        return null;
    }
  }
  
  render() {
    return (
      <Wrapper>
        <WholeThing>
          <ButtonWrapper>
            <TopButton onMouseDown={this.handleDropdown}>
              {this.state.buttonContent}&nbsp;&nbsp; { this.state.open ? '\u25B2' : '\u25BC'}
            </TopButton>
          </ButtonWrapper>
          { this.state.open &&
          <DropDownWrapper onMouseLeave={this.handleDropdown}>
              <Button type="button" role="button" onClick={this.drop} data-id="1">Twin</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="2">TwinXL</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="3">Full</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="4">Queen</Button>
              <Button type="button" role="button" onClick={this.drop} data-id="5">King/Cal. King</Button>
          </DropDownWrapper>
          }
          
          </WholeThing>
          <Price>
            {this.selector()}
          </Price>
      </Wrapper>
    );
  }
};

export default DropDown;