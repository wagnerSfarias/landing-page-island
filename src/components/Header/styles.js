import styled from 'styled-components'
import banner from '../../assets/home.svg'
import BgShadow from '../../assets/background.svg'

export const Container = styled.div`
  background: url(${banner});
  background-size: cover;
  background-position: center top;
  height: 80vh;

  @media (max-width: 970px) {
    height: 70vh;
  }
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 480px) {
    height: 40vh;
  }
`
export const ContainerTitle = styled.div`
  background: url(${BgShadow});
  background-size: cover;
  background-position: center top;
  height: 100%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
export const Title = styled.div`
  color: #fff;
  position: absolute;
  top: 20%;
  left: 3%;

  h1 {
    font-size: 50px;
    font-weight: 300;
  }
  h2 {
    font-size: 25px;
    font-weight: 300;
  }

  @media screen and (max-width: 970px) {
    h1 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    top: 10%;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    top: 7%;
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 14px;
    }
  }
`
