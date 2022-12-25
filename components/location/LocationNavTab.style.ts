import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

type FilterProps = {
  isOpen: boolean;
};

const Nav = styled.nav<FilterProps>`
  margin-bottom: 2rem;
  ul {
    border: solid 1px #ededee;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    li {
      height: 52px;
      text-align: center;
      line-height: 52px;
      font-weight: bold;
      a {
        display: block;
      }
      a.active {
        color: #fff;
        background-color: #174882;
      }
    }
    li.title {
      display: none;
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    position: absolute;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    @keyframes slideUp {
      from {
        bottom: -50px;
        opacity: 0;
      }

      to {
        bottom: 0px;
        opacity: 1;
      }
    }
    animation: slideUp 0.4s;
    bottom: 0;
    margin: 0;
    width: 100%;
    ul {
      display: block;
      border: none;
      background-color: #fff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      overflow: hidden;
      li {
        a {
          color: #b1b1b1;
        }
        a.active {
          color: #111;
          background-color: #ededee;
        }
      }
      li.title {
        display: block;
        position: relative;
        button {
          position: absolute;
          top: 15px;
          right: 15px;
        }
      }
    }
  }
`;

const Wrapper = styled.div<FilterProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export { Nav, Wrapper };
