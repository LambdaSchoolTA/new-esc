import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  margin: 0;
  padding: 0;
  @media(min-width: 768px) { flex-direction: row; }
  @media(min-width: 1024px) {  margin-left: 20px;}
`;

export const WholeThing = styled.div`
align-self: center;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  &:hover {background-color: #f1f1f1}
  margin: 0;
  padding: 0;
`;

export const TopButton = styled.button`
  background-color: #1565c0;
  font-family: 'Open Sans', sans-serif;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  font-size: .8rem;
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  border-bottom-right-radius: .11rem;
  border-bottom-left-radius: .11rem;
  border-bottom: 2px solid white;
  width: 125px;
  @media(min-width: 768px) { font-size: 1rem; padding: 9px;}
  @media(min-width: 1024px) { font-size: 1.6rem; padding: 16px; width: 243px;}
  &:hover {background-color: #eb1c24}
  &:focus { background:#eb1c24;}
`;



export const Button = styled.button`
  background-color: #1565c0;
  
  font-family: 'Open Sans', sans-serif;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  font-size: .8rem;
  border-bottom: 2px solid white;
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  border-bottom-right-radius: .11rem;
  border-bottom-left-radius: .11rem;
  @media(min-width: 768px) { font-size: 1rem; padding: 9px;}
  @media(min-width: 1024px) { font-size: 1.6rem; padding: 16px;}
  &:hover {background-color: #eb1c24}
  &:focus { background:#eb1c24;}
`;

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #1565c0;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
    &:hover {background-color: #f1f1f1}
    @media(min-width: 768px) { min-width: 100px}
    @media(min-width: 1024px) { min-width: 200px}
`;

export const Price = styled.div`
  
  font-size: 1rem;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  padding-top: 5px;
  padding-left: 0px;
  width: 100px;
  height: 40px;
  text-align: center !important;
  align-self: center !important;
  @media(min-width: 768px) { padding-left: 25px; font-size: 1.1rem; width: 200px; height: 60px;}
  @media(min-width: 1024px) { font-size: 1.7rem !important;  width: 250px !important; height: 60px; margin-top: 0; margin-bottom: 0;}
  @media(min-width: 1300px) { padding-left: 30px; height: 70px; width: 300px !important;}
`;
