import styled from 'styled-components'

export const Container = styled.div`
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
export const CardImages = styled.div`
  max-height: 300px;

  p {
    font-weight: 300;
    font-size: 20px;
    margin-top: 8px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    p {
      font-size: 16px;
    }
  }
`
export const Image = styled.img`
  max-height: 250px;
  width: 100%;
  box-shadow: 1px 5px 10px 3px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    max-width: 250px;
    border-radius: 5px;
  }
`
