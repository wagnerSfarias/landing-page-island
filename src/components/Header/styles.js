import styled from 'styled-components'
import banner from '../../assets/home.svg'

export const Container = styled.div`
  background: url(${banner});
  background-size: cover;
  background-position: center top;
  height: 80vh;
`
export const BackgroundTitle = styled.img`
  height: 70vh;
`
export const Title = styled.div`
  color: #fff;
  position: absolute;
  top: 10%;
  left: 3%;

  h1 {
    font-size: 50px;
    font-weight: 500;
  }

  h2 {
    font-size: 25px;
    font-weight: 300;
  }
`
