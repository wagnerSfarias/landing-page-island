import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerImages from '../../components/ContainerImages'
import Paradise from '../../assets/paradise.jpg'

import {
  Container,
  Main,
  Presentation,
  Strip,
  ContainerPresentation,
  ContainerText,
  Text,
  BackgroundOne,
  BackgroundTwo,
  ImageBeach,
} from './styles'

export default function Home() {
  const [animationTwo, setAnimationTwo] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    const handleScroll = event => {
      if (window.scrollY > 700) {
        setAnimationTwo(true)
      } else if (window.scrollY > 20) {
        setAnimation(true)
      } else {
        setAnimation(false)
        setAnimationTwo(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <Presentation>
          <Strip></Strip>

          <ContainerPresentation>
            <h1>Famoso paraiso tropical</h1>
            <p>
              Pra quem busca relaxar e fugir dos estresses da cidade, esse é o
              local ideal para passar as férias perfeitas!
            </p>
          </ContainerPresentation>

          <ImageBeach src={Paradise} />
        </Presentation>

        <ContainerText>
          <Text animationText={animation}>
            Essa ilha possui uma área de 90 KM<sup>2</sup>, com 60% do seu
            espaço composta por uma floresta densa, formada por diversas
            espécies de plantas.
          </Text>
        </ContainerText>

        <BackgroundOne />

        <ContainerText>
          <Text animationText={animationTwo}>
            Já os outros 40%, é composta por praias desertas com vistas
            incríveis e um mar calmo, a maioria delas são de fácil acesso por
            trilhas, que variam de leves e de curta duração até mais extensas
            com obstáculos.
          </Text>
        </ContainerText>

        <BackgroundTwo />
        <ContainerImages />
      </Main>
      <Footer />
    </Container>
  )
}
