import styled from 'styled-components';
import { CarouselItem } from 'react-bootstrap';

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


export const Item = styled(CarouselItem)`
  width: 100%;
  height: 473px;
  border-radius: 9px;

  > img {
    height: 473px;
    border-radius: 9px;
  }
`;
