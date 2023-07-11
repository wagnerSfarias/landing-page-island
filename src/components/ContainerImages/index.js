import React from 'react'
import Sea from '../../assets/sea.jpg'
import CoconutTree from '../../assets/coconut-Tree.jpg'
import Trail from '../../assets/trail.jpg'

import { Container, CardImages } from './styles'

export default function ContainerImages() {
  return (
    <Container>
      <CardImages src={Sea} />
      <CardImages src={CoconutTree} />
      <CardImages src={Trail} />
    </Container>
  )
}
