import React from 'react'
import Heading from './style'
import {BsMoon} from 'react-icons/bs'

const Header = () => {
  return (
    <Heading>
        <h3>Where in the world?</h3>
        <button><BsMoon /> Dark Mode</button>
    </Heading>
  )
}

export default Header