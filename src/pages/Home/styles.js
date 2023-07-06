import styled, { keyframes } from 'styled-components'
import FlorestImg from '../../assets/florest.jpg'
import BeachImg from '../../assets/beach.jpg'

const rotate = keyframes`
  0% {
            transform: translateX(-300px);
            opacity: 0;
  }
  100% {
            transform: translateX(0);
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
  height: 40vh;
  position: relative;
`
export const Strip = styled.div`
  background: #4798cd;
  height: 100%;
  width: 70px;
  position: absolute;
  right: 15%;

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 50px;
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
    font-size: 18px;
    font-weight: 300;
    width: 70%;
    margin-top: 10px;
  }
`
export const ImageBeach = styled.img`
  width: 400px;
  position: absolute;
  bottom: 10%;
  right: 3%;
  border-radius: 10px;
  box-shadow: -3px 4px 20px 10px rgba(0, 0, 0, 0.6);
`

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  height: auto;
  padding: 15px 0 10px 50px;
`
export const Text = styled.p`
  animation-name: ${props => (props.animationText ? rotate : 'none')};
  animation-duration: 4s;
  animation-timing-function: linear;

  width: 60%;
  padding: 5px 0 5px 50px;
  border-left: 2px solid #000;
  line-height: 30px;
  font-size: 20px;
  font-weight: 300;
  height: 90%;
`

export const BackgroundOne = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-position: 50% 50%;
  background-image: url(${FlorestImg});
  background-size: cover;
  background-attachment: fixed;
`
export const BackgroundTwo = styled.div`
  width: 100%;
  height: 80vh;
  background-position: 50% 50%;
  background-image: url(${BeachImg});
  background-size: cover;
  background-attachment: fixed;
`
