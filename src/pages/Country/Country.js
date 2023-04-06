import React from 'react'
import CountryContainer from './style'
import { useParams } from 'react-router-dom'

const Country = () => {
  const params = useParams()
  return (
    <CountryContainer>Country {params.name}</CountryContainer>
  )
}

export default Country