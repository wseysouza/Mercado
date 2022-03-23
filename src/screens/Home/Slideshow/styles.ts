import styled from 'styled-components';
import { Carousel, CarouselItem } from 'react-bootstrap';

export const Wrapper = styled.div`

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-indicators {
    bottom: -65px;

    > button {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: #AEAEAE;

      & + button {
        margin-left: 15px;
      }
    }

    .active {
      background-color: #212429;
    }
  }


  .carousel-control-prev {
    > svg {
      width: 40px;
      height: 40px;
      color: #212429;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border-radius: 4px;
      border-radius: 8px;
      /* opacity: 0.8; */
    }
  }

  .carousel-control-next {
    > svg {
      width: 40px;
      height: 40px;
      color: #212429;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border-radius: 4px;
      border-radius: 8px;
      /* opacity: 0.8; */
    }
  }
`;

export const SlideShow = styled(Carousel)`
  min-width: 100%;
  min-height: 473px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #000;
  width: 70px;
  height: 70px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Item = styled(CarouselItem)`
  position: relative;
  width: 100%;
  height: 473px;
  border-radius: 9px;

  #img {
    width: 100%;
    height: 473px;
    border-radius: 9px;
    object-fit: contain !important;
  }
`;

export const LinkImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
