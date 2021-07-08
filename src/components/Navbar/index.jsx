import React from 'react'
import styled from '@emotion/styled'
import * as palette from '../colors'

const Nav = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 600px;
`

const Li = styled.li`
  display: inline-block;
  margin: 1rem;
`

const Link = styled.span`
  position: relative;
  display: block;
  cursor: pointer;  
  font-size: 20px;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    background: ${palette.black};
  }
  &:before {
    left: -2.5px;
  }
  &:after {
    right: 2.5px;
    backgroud: ${palette.black};
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:before {
    background: ${palette.black};
    width: 100%;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover:after {
    kground: transparent;
    width: 100%;
    transition: 0s;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <Li>
          <Link>Home</Link>
        </Li>
        <Li>
          <Link>About</Link>

        </Li>
        <Li>

          <Link>Contact</Link>
        </Li>
      </ul>
    </Nav>
  )
}

export default Navbar
