import styled, { keyframes } from 'styled-components';
import Markdown from 'react-markdown';


const SingleFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PriceList = styled.ul`
font-size: .3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  justify-content: center;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  border-bottom-right-radius: .11rem;
  border-bottom-left-radius: .11rem;
  animation-duration: .5s;
  animation-name: ${SingleFadeIn};
  animation-fill-mode: both;
`;


export const Main = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media(min-width: 768px) {
    margin-bottom: 10px;
  }
  @media(min-width: 1024px) { justify-content: space-evenly; margin-left: 5px; margin-bottom: 20px;}
`;
export const MainInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

`;
export const PriceWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 /* margin-top: 20px; */
 flex-wrap: wrap;
 @media(min-width: 768px) {
   flex-direction: column;
   justify-content: center;
 }
 
`



export const MainTitle = styled.header`
  font-family: 'Roboto', sans-serif;
  font-size: .5rem;
  padding: 0px 10px 0px 10px;
  text-align: center;
  background-color: #1565c0;
  letter-spacing: .1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  @media(min-width: 768px) {
    text-align: left;
    font-size: .9rem;
    padding: 0px 5px 0px 10px;
  }
  @media(min-width: 1300px) {
    font-size: 1.2rem;
    letter-spacing: .13rem;
    padding-left: 30px;
  }
`;

export const MainImg = styled.img`
  max-width: 7rem;
  @media(min-width: 768px) {
    max-width: 14rem;
  }
  @media(min-width: 1024px) {
    max-width: 17rem;
  }
`
export const Warranty = styled.p`
font-size: .8rem;
font-family: 'Open Sans', sans-serif;
@media(min-width: 768px) {
  font-size: 1.5rem;
}
`;


export const Description = styled.p`
font-size: .9rem;
align-self: center;
font-family: 'Open Sans', sans-serif;
line-height: 1.1rem;
margin-left: 0px;
margin-right: 0px;
padding-left: 14px;
padding-right: 14px;
padding-top: 10px;
padding-bottom: 10px;
border-top-left-radius: .11rem; 
  border-top-right-radius: .11rem;
  border-bottom-right-radius: .11rem;
  border-bottom-left-radius: .11rem;
@media(min-width: 768px) {
  font-size: 1.1rem;
  padding-right: 40px;
  padding-left: 40px;
  line-height: 1.3rem;
}
@media(min-width: 1022px) {
  font-size: 1.8rem;
  padding-right: 60px;
  padding-left: 60px;
  line-height: 1.9rem;
}
@media(min-width: 1300px) {
  font-size: 1.3rem;
  padding-top: 30px;
  padding-right: 80px;
  padding-left: 80px;
  line-height: 1.5rem;
  margin: auto;
}
`
export const Overview = styled.header`
font-family: 'Roboto', sans-serif;
font-size: .5rem;
padding: 0px 12px 0px 12px;
text-align: center;
background-color: #eb1c24;
letter-spacing: .1rem;
color: white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
@media(min-width: 768px) {
  text-align: left;
  font-size: .9rem;
  padding: 0px 5px 0px 10px;
}
@media(min-width: 1024px) {
  text-align: center;
  font-size: 1.2rem;
}
`
export const Article = styled.article`
  display: flex;
  background: rgba(224,224,224,0.42);
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 10px;
`
export const Profile = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin-top: 0;
  font-size: .9rem;
  @media(min-width: 768px) { font-size: 1.3rem; }
  @media(min-width: 1024px) { font-size: 1.6rem; }
`;

export const StyledMarkDown = styled(Markdown)`
  font-family: 'Open Sans', sans-serif;
  padding: 0px;
  & p {
    font-size: .9rem;
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: 4px solid #eb1c24;
    padding-bottom: 2px;
  }
  & ul {
    list-style: square;
    margin-top: 10px;
    font-size:  .7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  & li {
    padding-bottom: 2px;
  }
  @media(min-width: 692px) {
    font-family: 'Open Sans', sans-serif;
    padding: 10px 30px 10px 30px;

    & p {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid red;
      padding-bottom: 2px;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size:  1rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.1rem;
    }
  }
  @media(min-width: 992px) {
    padding: 30px;
    
    & p {
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    & ul {
      margin-top: 10px;
      font-size:  1.8rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.8rem;
    }
  }
`;