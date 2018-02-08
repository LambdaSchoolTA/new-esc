import styled from 'styled-components';
import GraphImg from 'graphcms-image';

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media(min-width: 1024px) {margin-right: 10px;}
`;

export const SmallImgHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

export const SmImg = styled(GraphImg)`
  width: 50px;
  height: 50px;
  @media(min-width: 768px) { width: 100px; height: 80px; }
  @media(min-width: 1024px) { width: 165px; height: 150px; }
  border: 2px solid white;
  &:hover { border: 2px solid black; }
`;

export const LargeImg = styled(GraphImg)`
  width: 180px;
  height: 160px;
  @media(min-width: 768px) { width: 350px; height: 200px; }
  @media(min-width: 1024px) { width: 500px; height: 300px; }
`;
