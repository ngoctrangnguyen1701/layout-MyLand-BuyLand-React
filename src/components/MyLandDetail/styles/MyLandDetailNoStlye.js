import styled from "styled-components";
import { colorGreen, boxShadowGreen } from "src/common/styleComponentGlobal";

export const HBG = styled.div`
  padding-right: 30px;
  background: black;
  border: 1px solid ${colorGreen};
  height: 45px;
  width: 181px;

  line-height: 45px;
  text-align: right;
  font-family: Progress_Bold_Italic;
  font-size: 27px;
  color: ${colorGreen};
`
export const BtnCancel = styled.button`
  background: ${colorGreen};
  margin-left: 10px;
  height: 45px;
  width: 90px;
  border: 1px solid ${colorGreen};

  font-family: Progress_Bold_Italic;
  font-size: 17px;
  color: black;
  box-shadow: 1px 1px 5px ${colorGreen};
`
export const IconHouse = styled.img`
  width: 28px;
  height: 28px;
  display: inline-block;
  margin-left: 10px;
`