import React from 'react'
import Sea from '../../assets/sea.jpg'
import CoconutTree from '../../assets/coconut-Tree.jpg'
import Trail from '../../assets/trail.jpg'

import { Container, CardImages, Image } from './styles'

export default function ContainerImages() {
  return (
    <Container>
      <CardImages>
        <Image src={Sea} />
        <p>Ilha das Conchas</p>
      </CardImages>
      <CardImages>
        <Image src={CoconutTree} />
        <p>Praia dos Sonhos</p>
      </CardImages>
      <CardImages>
        <Image src={Trail} />
        <p>Trilha para praia dos milagres.</p>
      </CardImages>
    </Container>
  )
}
