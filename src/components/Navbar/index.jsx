import React from 'react'
import styled from '@emotion/styled'
import * as palette from '../colors'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Nav = styled.div`
  // display: table-cell;
  // vertical-align: middle;
  // text-align: center;
  // width: 600px;
  display: flex;
  margin-bottom: 3rem;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 3rem;
`

const LinkSpan = styled.span`
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

const links = [
  'Home',
  'About',
  'Projects',
  'Contact'
]

const Navbar = () => {
  return (
    <Router>
      <Nav>
        <ul>

          {links.map((link, index) => {
            return (
              <Li key={index}>
                <Link 
                  to={`/${link}`} 
                  style={{ 
                    textDecoration: 'none', color: 'black'
                  }}
                ><LinkSpan>{link}</LinkSpan>
                </Link>
              </Li>
            )
          })}

        </ul>
      </Nav>
    </Router>
  )
}

export default Navbar
