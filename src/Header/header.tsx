import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import './header.css'
import { COLORS } from '../values/colors'
import { IoIosArrowDown } from 'react-icons/io'
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'

const sizeIcon = 50
const colorIcon = COLORS.PinkBite

const Bounce = styled.div`
  animation: 5s ${keyframes`${bounce}`} infinite;
`

const Header = (): any => (
  <section className="header">
    <h1>Pablo Aldana</h1>
    <h2>Estudiante en Computación</h2>
    <div className="logo-section">
      <a href={'https://github.com/Paldana99'}>
        <span className="p-lg-4">
          <BsGithub size={sizeIcon} color={colorIcon} />
        </span>
      </a>
      <a href={'https://www.linkedin.com/in/p-aldana/'}>
        <span className="p-lg-4">
          <BsLinkedin size={sizeIcon} color={colorIcon} />
        </span>
      </a>
    </div>
    <span className={'position-absolute start-50 translate-middle bottom'}>
      <Bounce>
        <IoIosArrowDown color={colorIcon} size={sizeIcon} />
      </Bounce>
    </span>
  </section>
)

export default Header
