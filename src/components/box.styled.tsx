import { styled } from 'styled-components'

export const Box = styled.div`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
