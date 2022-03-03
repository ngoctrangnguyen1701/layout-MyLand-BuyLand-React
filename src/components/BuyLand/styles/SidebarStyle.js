import styled from "styled-components";
import {
  colorRed,
  colorGreen,
  colorGreen3,
  colorGradientGreen1,
  colorGradientGreen2,
  textShadowGreen,
} from 'src/common/styleComponentGlobal'

export const Sidebar = styled.div`
  background-color: #110300;
  height: 100%;
  color: white;
  position: absolute;
  right: 0;
  z-index: 20;
  min-height: 650px;
  width: 30%;
  @media (max-width: 1023px) {
    position: static;
    width: 100%;
  }
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor}`}
`

export const SidebarHeader = styled.div`
  font-size: 43px;
  padding: 0 20px; 
`

export const SidebarNumBasket = styled.span`
  display: inline-block;
  margin-left: 10px;

  font-family: Helvetica_Bold;
  color: ${colorRed};
`

export const SidebarLine = styled.div`
  height: 1px;
  background-color: ${colorRed};
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor}`}
`

export const SidebarContent = styled.div`
  padding: 15px 20px 0 20px;
  .title {
    color: white;
    font-size: 23px;
  }
`

export const SidebarLandplots = styled.div`
  padding-left: 10px; 
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;

  .column{
    padding-left: 0;
    padding-right: 10px;
    min-width: 100px;
  }
`

export const SidebarLandplotsItem = styled.div`
  height: 30px;
  line-height: 30px;
  background-color: ${colorGreen3};
  border: 1px solid ${colorGreen};
  margin-bottom: 10px;
  cursor: pointer;

  color: white;
  font-size: 20px;
  text-align: center;

  &:hover{
    background-color: ${colorGreen};
  }
`

export const InputCoupond = styled.input`
  outline: none;
  height: 50px;
  border: 1px solid ${colorGreen};
  border-radius: 0px;
  background: none;
  display: block;
  flex-grow: 1;

  font-family: Helvetica_Light_Oblique;
  font-size: 24px;
  line-height: 50px;
  color: #C1C1C1;

  &:focus{
    border: 1px solid ${colorGreen};
    background: none;
    box-shadow: none;
    color: white;
  }
`

export const BtnApply = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 15px;
  background-image: linear-gradient(to bottom, ${colorGradientGreen1}, ${colorGradientGreen2});
  border: 1px solid ${colorGreen};
  box-shadow: 1px 1px 5px ${colorGreen};

  font-family: Progress_Bold_Italic;
  font-size: 20px;
  line-height: 50px;
  color: white;
  ${textShadowGreen}

  &:hover{
    opacity: .8;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;

  small{
    font-size: 24px;
    color: #C1C1C1;
  }
  span{
    font-size: 45px;
    color: white;
    display: block;
  }
`

export const BtnBuy = styled.button`
  background-image: linear-gradient(to bottom, ${colorGradientGreen1}, ${colorGradientGreen2});
  padding: 0 15px;
  border: 1px solid ${colorGreen};
  box-shadow: 1px 1px 5px ${colorGreen};
  width: 100%;
  height: 50px;
  ${textShadowGreen}
  
  font-family: Progress_Bold_Italic;
  font-size: 25px;
  color: white;
  line-height: 50px;

  &:hover{
    opacity: .8;
  }
`

export const EmptyCart = styled.div`
  span{
    font-size: 23px;
    color: $color-red;
    display: inline-block;
    margin-left: 15px;
  }
  .tutorial{
    font-size: 24px;
    margin-top: 30px;
  }
`