import React from 'react'
import {
  Container,
  Icons,
  Detail,
  DetailText,
  ContainerContacts,
  Logo,
} from './styles'
import { Home, Phone, Marker, Google, Instagram, Facebook } from './icons'
import LogoImg from '../../assets/logo.svg'

export default function Footer() {
  return (
    <Container>
      <Detail>
        <Logo src={LogoImg} />
        <DetailText>
          <p>
            <Home />
            Ilha da magia, 200 - Paraíso
          </p>
          <p>
            <Phone />
            +32 132 558 544 497
          </p>
          <p>
            <Marker />
            paraiso@tropical.com
          </p>
        </DetailText>
      </Detail>
      <ContainerContacts>
        CopyRight &copy; 2023
        <Icons>
          <Google />
          <Facebook />
          <Instagram />
        </Icons>
      </ContainerContacts>
    </Container>
  )
}
