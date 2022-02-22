import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 70px;
  /* margin-top: 60px; */
  position: relative;
  height: fit-content;
  background: transparent;
`;

export const NewsBox = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    opacity: 1;
    visibility: visible;
    padding-right: 10px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    cursor: pointer;


    img {
      width: 100%;
      height: 200px;

      border-radius: 5px;
    }
`;


export const AbstractNews = styled.span`
  width: 100%;
  margin-bottom: 10px;
`;
