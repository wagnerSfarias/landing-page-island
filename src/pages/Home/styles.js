import styled, { keyframes } from 'styled-components'
import FlorestImg from '../../assets/florest.jpg'
import BeachImg from '../../assets/beach.jpg'

const slideRight = keyframes`
  0% {
      -webkit-transform: translateX(-300px);
      transform: translateX(-300px);
      opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`
export const Container = styled.div`
  min-height: 100vh;
`
export const Main = styled.div`
  min-height: 100vh;
  background: #d9d9d9;
`
export const Presentation = styled.div`
  background: #fff;
  min-height: 300px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const Strip = styled.div`
  background: #4798cd;
  height: 100%;
  width: 70px;
  position: absolute;
  right: 15%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40px;
    bottom: 20%;
    right: 0%;
  }
`
export const ContainerPresentation = styled.div`
  width: 60%;
  padding-top: 60px;
  padding-left: 50px;

  h1 {
    font-size: 35px;
    font-weight: 700;
    text-transform: uppercase;
    color: #231f20;
  }

  p {
    line-height: 28px;
    font-size: 20px;
    font-weight: 300;
    width: 70%;
    margin-top: 10px;
  }

  @media screen and (max-width: 970px) {
    padding-top: 40px;
    padding-left: 10px;
    h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;

    h1 {
      font-size: 28px;
    }
    p {
      line-height: 24px;
      width: 100%;
      margin-top: 10px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 25px;
    }
    p {
      line-height: 20px;
      font-size: 16px;
    }
  }
`
export const ImageBeach = styled.img`
  max-width: 350px;
  position: absolute;
  bottom: 10%;
  right: 3%;
  border-radius: 10px;
  box-shadow: -3px 4px 20px 10px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 970px) {
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    box-shadow: -3px 4px 20px 5px rgba(0, 0, 0, 0.6);
    position: static;
    z-index: 99;
    align-self: flex-end;
    width: 250px;
    margin: 10px 10px 40px;
  }
`
export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  height: auto;
  padding: 15px 0;
`
export const Text = styled.p`
  animation-name: ${props => (props.animationText ? slideRight : 'none')};
  animation-duration: 4s;
  animation-timing-function: linear;

  width: 60%;
  padding: 5px 0 5px 50px;
  border-left: 2px solid #000;
  line-height: 30px;
  font-size: 20px;
  font-weight: 300;
  height: 90%;

  @media screen and (max-width: 768px) {
    width: 90%;
    line-height: 25px;
    font-size: 18px;
    animation: none;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding-left: 15px;
  }
`
export const BackgroundOne = styled.div`
  height: 80vh;
  overflow: hidden;
  background-position: center top;
  background-image: url(${FlorestImg});
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 480px) {
    background-attachment: scroll;
    max-height: 450px;
  }
`
export const BackgroundTwo = styled.div`
  height: 80vh;
  background-position: center top;
  background-image: url(${BeachImg});
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 480px) {
    background-attachment: scroll;
    max-height: 450px;
  }
`
export const ContainerImages = styled.div`
  width: 100%;
  padding: 10% 1%;
  display: flex;
  justify-content: space-around;
  gap: 10px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`
