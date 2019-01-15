import React from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;

  // Flex
  ${({ direction }) => direction ? `flex-direction: ${direction}` : null}
  ${ ({ maxWidth }) => maxWidth ? `max-width: ${maxWidth}px` : null }
  ${({ fit, grow = 0 }) => `flex-grow: ${fit ? 1 : grow}`}
  ${({ fit }) => fit ? 'flex-basis: 0' : null}
  ${({ align }) => `align-items: ${align}`}
  ${({ justify }) => `justify-content: ${justify}`}

  // Spacial
  ${({ padding = [0, 0, 0, 0], paddX = 0, paddY = 0 }) => {
    const [t, r, b, l] = padding
    return `padding: ${paddX || t}rem ${paddY || r}rem ${paddX || b}rem ${paddY || l}rem`
  }}
  ${({ margin = [0, 0, 0, 0], marginX = 0, marginY = 0 }) => {
    const [t, r, b, l] = margin
    return `padding: ${marginX || t}rem ${marginY || r}rem ${marginX || b}rem ${marginY || l}rem`
  }}
`
export default FlexContainer





