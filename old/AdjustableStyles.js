import Markdown from 'react-markdown';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const AdjFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AdjMarkdown = styled(Markdown)`
  font-family: 'Open Sans', sans-serif;
  padding: 30px;
  display: none;
  & p {
    font-size: 1.6rem;
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
  }
    @media(min-width: 692px) {
      display: block;
      font-family: 'Open Sans', sans-serif;
      padding: 30px;

      & p {
        font-size: 1.6rem;
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
        font-size: .9rem;
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
        font-size: 1.4rem;
      }
    }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  border: 2px solid black;
  padding-top: 20px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  animation-duration: .5s;
  animation-name: ${AdjFadeIn};
  animation-fill-mode: both;
  @media(min-width:1200px) { margin-left: 120px; margin-right: 120px; }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
  margin-right: 20px;
  color: black;
  border: 2px solid black;
  margin-bottom: 20px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .14rem;
  border-top-right-radius: .14rem;
  border-bottom-right-radius: .14rem;
  border-bottom-left-radius: .14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all .15s ease-in-out;
  background-color: white;
  &:hover {
    z-index: 999;
    transform: scale3d(1.02,1.02,1);
  }
`;

export const H3 = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  background-color: #1565c0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
  @media(min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media(min-width: 692px) {
    text-align: left;
    word-spacing: .18rem;
    letter-spacing: .17rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media(min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 150px;
  align-self: center;
  @media(min-width: 991px) {
    width: 400px;
    height: 300px;
    align-self: center;
    margin-left: 20px; 
  }
`;