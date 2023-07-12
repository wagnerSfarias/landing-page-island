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
export const CardImages = styled.img`
  max-height: 250px;
  box-shadow: 1px 20px 10px 3px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    max-width: 250px;
    border-radius: 5px;
    box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.5);
  }
`
