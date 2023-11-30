import './App.css'
import { Box } from './components/box.styled'
import { ButtonCard, ButtonCard2 } from './components/ButtonCard'
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
          <TextCard>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </TextCard>
          <ButtonCard>See more</ButtonCard>
          <ButtonCard2>Save</ButtonCard2>
        </StyledCard>
      </Box>
    </div>
  )
}

export default App
