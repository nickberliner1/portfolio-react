import React from 'react'
import styled from '@emotion/styled';
import * as palette from '../colors'

const Header = styled.div`
  background-color: ${palette.lightBlue};
  color: ${palette.black};
  background-size: cover;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
`
const Title = styled.h1`
  font-weight: 900
`

const Hero = () => {
  return (
    <Header>
      <Title>Nick Berliner</Title>
    </Header>
  )
}

export default Hero
