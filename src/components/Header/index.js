import React from 'react'

import { Container, BackgroundTitle, Title } from './styles'
import Background from '../../assets/background.svg'

export default function Header() {
  return (
    <Container>
      <BackgroundTitle src={Background} />
      <Title>
        <h1>ILHA DA MAGIA</h1>
        <h2>Para os amantes de sol, mar e aventura.</h2>
      </Title>
    </Container>
  )
}
