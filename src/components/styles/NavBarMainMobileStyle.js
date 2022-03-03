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
  // margin-right: 40px;
  margin-left: auto;
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: black;
  width: 100%;
  height: 100%;
  // min-height: 600px;

  position: fixed;
  z-index: 9;
  top: 144px;

  opacity: 0;
  transform-origin: top center;
  transform: scaleY(0);
  transition: .3s;

  ${props => props.show && `
    transform: scaleY(1);
    opacity: 1;
    transition: .3s;
  `}

  @media (max-width: 600px){
    top: 115px;
  }
  // @media (min-width: 601px), (max-height: 500px){
  @media (max-height: 500px){
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
  }
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
  .address{
    width: 300px;
  }
  // @media (min-width: 601px), (max-height: 500px){
  @media (max-height: 500px){
    width: 150px;
    height: 70px;
  }
`
export const MenuItemAddress = styled(MenuItem)`
  // @media (min-width: 601px){
  @media (max-height: 500px){
    width: 300px;
    height: 70px;
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