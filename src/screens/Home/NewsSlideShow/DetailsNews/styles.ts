import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: column;

  h1{
    font-size: 20px;
    color: red;
    font-weight: 700;
  }


  span{
    margin-bottom: 10px;
  }

  a{
    font-size: 17px;
    color: red;
    font-weight: 700;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 10px;

    .img {
      border-radius: 5px;
      /* object-fit: contain !important; */
    }
`;
