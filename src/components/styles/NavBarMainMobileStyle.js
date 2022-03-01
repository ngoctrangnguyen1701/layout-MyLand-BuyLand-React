import styled from 'styled-components';
import {
  colorGreen,
  colorGradientGreen1,
  colorGradientGreen2,
} from 'src/common/styleComponentGlobal'

export const NavBar = styled.div`
  background: black;
  padding: 15px 10px 0 10px;
`
export const LogoImg = styled.div`
  width: 30%;
  img{
    width: 100%;
  }
`
export const Title = styled.div`
  font-size: 2.5rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  a{
    color: ${colorGreen};
  }
  width: auto;
  flex-grow: 1;
  margin-left: -15px;
`
export const IconMenu = styled.div`
  width: 25px;
  margin-right: 40px;
  img{
    width: 100%;
  }
`
export const IconCart = styled.div`
  width: 25px;
  margin: auto;
  img{
    width: 100%;
  }
`
export const MenuCollapse = styled.div`
  // display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  background-color: black;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;

  opacity: 0;
  transform-origin: top center;
  transform: scaleY(0);
  transition: .3s;

  ${props => props.show && `
    transform: scaleY(1);
    opacity: 1;
    transition: .3s;
  `}
`
export const MenuItem = styled.div`
  padding: 15px 0;
  text-align: center;
  transition: .3s;
  
  a{
    color: white;
    font-size: 23px;
  }

  &:hover{
    transition: .3s;
    a{
      color: ${colorGreen};
      transition: .3s;
    }
  }
`
export const Address = styled.div`
  border: 1px solid ${colorGreen};
  display: block;
  width: 300px;
  margin: auto;
  background-image: linear-gradient(to right, ${colorGradientGreen1}, ${colorGradientGreen2});

  text-align: center;
`