import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  font-size: 50px;
  color: ${( {theme} ) => theme.color.primary};
` 

const CSSJS = () => {
  return (
    <>
      <h2 style={{color: 'red'}}>Hello World</h2>
      <Title>Styled Components</Title>
    </>
    
  )
}

export default CSSJS
