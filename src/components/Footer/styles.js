import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 1) 5%,
    rgba(71, 152, 205, 1) 70%
  );
`
export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 10%;
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

  @media screen and (max-width: 480px) {
    max-height: 90px;
  }
`
export const ContainerContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #231f20;
  width: 80%;
  margin: 10px auto 0;
  padding: 10px 50px 20px;
  font-size: 16px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    padding: 10px 0px 20px;
    font-size: 14px;
  }
`
export const Icons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 25px;
  color: #231f20;
`
