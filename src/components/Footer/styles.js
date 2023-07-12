import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  background: #4798cd;
`
export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
`
export const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 300;
  color: #231f20;

  @media screen and (max-width: 768px) {
    gap: 7px;
    font-size: 16px;
  }
`
export const Logo = styled.img`
  max-height: 120px;
`
export const ContainerContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #231f20;
  width: 80%;
  margin: 10px auto 0;
  padding: 10px 50px 20px;
  font-size: 18px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    padding: 10px 0px 20px;
    font-size: 16px;
  }
`
export const Icons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 25px;
  color: #fff;

  svg {
    transition: all 450ms ease-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.3);
      color: #000;
    }
    @media screen and (max-width: 768px) {
      &:hover {
        transform: none;
        color: #fff;
      }
    }
  }
`
