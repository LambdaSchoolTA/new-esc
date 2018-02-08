import styled from 'styled-components';


export const Main = styled.div`
  background-color: white;
  margin-right: 0;
  margin-left: 0;
  @media (min-width: 1300px) { margin-right: 50px; margin-left: 50px; }
`;

export const SaleWrapper = styled.div`
  background-color: #eb1c24;
`;

export const SaleImg = styled.div`
  max-width: 240px;
  max-height: 240px;
  margin: auto;
  background-color: #eb1c24;
  @media(min-width: 600px) {max-height: 350px; max-width: 400px; }
  @media(min-width: 768px) { max-width: 500px; max-height: 700px; }
  @media(min-width: 1024px) { width: 500px !important; height: 600px; }
`;

export const StearnsImg = styled.div`
  margin: auto;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;

export const TempurImg = styled.div`
  margin: auto;
  align-self: center;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;

export const SealyImg = styled.div`
  background-color: white;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;
