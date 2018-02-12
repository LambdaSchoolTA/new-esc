import styled from 'styled-components';

export const MattSet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;

export const MattOnly = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;

export const PriceTitle = styled.p`
  padding-top: 5px;
  padding-bottom: 3px;
  margin-top: 0;
  margin-bottom: 0px;
  font-size: .8rem;
  font-family: 'Open Sans', sans-serif;
  @media(min-width: 768px) {
    font-size: 1rem;
    padding-top: 0px;
    padding-bottom: 7px;
  }
  @media(min-width: 1022px) {
    font-size: 1.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`