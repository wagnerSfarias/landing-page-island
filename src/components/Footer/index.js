import React from 'react'
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa'
import {
  Container,
  Icons,
  Detail,
  DetailText,
  ContainerContacts,
  Logo,
} from './styles'

import LogoImg from '../../assets/logo.svg'

export default function Footer() {
  return (
    <Container>
      <Detail>
        <Logo src={LogoImg} />
        <DetailText>
          <p>Rua Principal, 01</p>
          <p>+32 132 558 544 497</p>
          <p>paraiso@tropical.com</p>
        </DetailText>
      </Detail>
      <ContainerContacts>
        CopyRight &copy; 2023
        <Icons>
          <FaGoogle />
          <FaFacebook />
          <FaInstagram />
        </Icons>
      </ContainerContacts>
    </Container>
  )
}
