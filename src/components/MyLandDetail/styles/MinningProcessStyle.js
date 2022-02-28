import styled from "styled-components";
import {
  textShadowGreen,
  colorGreen,
  colorGradientGreen2,
  colorGradientGreen1,
} from "src/common/styleComponentGlobal";

export const MinningProcessFrame = styled.div`
  background-color: rgba(0, 0, 0, 0.74);
  padding: 15px;
`
export const Title = styled.div`
  background-image: linear-gradient(to right, rgba(255, 54, 0, 0.8), rgba(255, 54, 0, 0.8));
  background-repeat: no-repeat;
  background-position: 0 64%;
  background-size: 443px 15px;
`
export const RewardAndStatus = styled.div`
  width: 50%;
  font-size: 20px;
  color: ${colorGreen};
  span{
    color: white;
    font-size: 35px;
    text-shadow: -1px 0 ${colorGreen}, 0 1px ${colorGreen}, 1px 0 ${colorGreen}, 0 -1px ${colorGreen};
    display: inline-block;
    margin-left: 5px;
  }
`
export const CharacterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`
export const CharacterImg = styled.div`
  width: 167px;
  height: 167px;
  border: 1px solid #00FFFF;
  background-image: url('/images/character.jpg');
  background-position: center;
  background-size: cover;
`
export const LeftSide = styled.div`
  font-family: HemiHeadRg_BoldItalic;
  font-size: 22px;
  color: #00FFFF;
  p{
    margin-bottom: 0;
  }
  span{
    color: white;
  }
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  img{
    display: block;
  }
  span{
    font-family: HemiHeadRg_BoldItalic;
    font-size: 27px;
    color: white;
    display: block;
    margin-left: 10px;
  }
`
export const BtnChangeHero = styled.button`
  background-image: linear-gradient(to bottom, ${colorGradientGreen2}, #0A0E00);
  border: 1px solid ${colorGreen};
  padding: 5px 20px;
  display: block;
  margin: 0 auto;

  color: white;
  font-family: Progress_Bold_Italic;
  font-size: 18px;
  ${textShadowGreen}

  &:hover{
    opacity: 0.7
  }
`
export const BtnStopMinning = styled.button`
  background-image: linear-gradient(to right, #A20E00, #470036);
  border: 1px solid #E50303;
  padding: 5px 20px;
  display: block;
  margin: 0 auto;

  color: white;
  font-family: Progress_Bold_Italic;
  font-size: 18px;
  text-shadow: 2px 2px 15px rgba(221, 0, 0, 0.8);

  &:hover{
    opacity: 0.7
  }
`
export const TextNoHero = styled.div`
  font-family: Helvetica_Light_Oblique;
  font-size: 24px;
  color: white;
  text-align: center;

  margin: 70px auto;
`
export const BtnChooseHero = styled.button`
  background-image: linear-gradient(to right, #0A6300, #0A0000);
  border: 1px solid ${colorGreen};
  padding: 0px 30px;
  display: block;
  margin: 0 auto 15px;

  color: white;
  font-family: Progress_Bold_Italic;
  font-size: 30px;
  ${textShadowGreen}
`