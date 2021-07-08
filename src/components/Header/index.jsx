import React from 'react'
import styled from '@emotion/styled';
import * as palette from '../colors'

import Navbar from '../Navbar/index'

const Header = styled.div`
  // background-color: ${palette.lightBlue};
  background: url('https://i.imgur.com/PfhoFqY.jpg');
  color: ${palette.black};
  background-size: cover;
  background-position: center;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
`
const Title = styled.h1`
  font-weight: 900;
  font-size: 35px;
`
const List = styled.ul`
  padding: 2rem;
`
const ListItem = styled.li`
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
  }
`

const description = [
  'Front-End Engineer',
  'Musician',
  'Snowboarder',
  'Skateboarder'
]


const Hero = () => {
  return (
    <Header>
      <Navbar />
      <Title>Nick Berliner:</Title>
      <List>
      {description.map((item, index) => {
        return (
          <ListItem key={index}>
            {item}
          </ListItem>
        )
      })}
      </List>
    </Header>
  )
}

export default Hero
