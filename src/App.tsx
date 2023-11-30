import React from 'react'
import './App.css'
import { Box } from './components/box.styled'
import { StyledCard } from './components/Card.styled'
import { HeaderCard } from './components/HeaderCard'
import { PhotoCard } from './components/photoCard/PhotoCard'
import { TextCard } from './components/TextCard'

function App() {
  return (
    <div>
      <Box>
        <StyledCard>
          <PhotoCard aria-label="Card photo" />
          <HeaderCard>Headline</HeaderCard>
          <TextCard>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</TextCard>
        </StyledCard>
      </Box>
    </div>
  )
}

export default App
