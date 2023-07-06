import React from 'react'
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa'
import {
  Container,
  ContainerIcons,
  Icons,
  Detail,
  DetailText,
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
          <p>+55 132 5585-4447</p>
          <p>paraiso@tropical.com</p>
        </DetailText>
      </Detail>
      <ContainerIcons>
        CopyRight &copy; 2020
        <Icons>
          <FaGoogle />
          <FaFacebook />
          <FaInstagram />
        </Icons>
      </ContainerIcons>
    </Container>
  )
}
