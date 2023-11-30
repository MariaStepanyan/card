import React from 'react'
import './App.css'
import { Box } from './components/box.styled'
import { StyledCard } from './components/Card.styled'
import { PhotoCard } from './components/photoCard/PhotoCard'

function App() {
  return (
    <div>
      <Box>
        <StyledCard>
          <PhotoCard aria-label="Card photo" />
        </StyledCard>
      </Box>
    </div>
  )
}

export default App
