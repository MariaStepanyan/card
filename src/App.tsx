import './App.css'
import { ButtonCard, ButtonCardSecond } from './components/ButtonCard'
import { StyledCard } from './components/StyledCard'
import { HeaderCard } from './components/HeaderCard'
import { PhotoCard } from './components/PhotoCard'
import { TextCard } from './components/TextCard'
import Img from './assets/images/photoCard.png'
import { ContentCard } from './components/ContentCard'
import { BtnWrap } from './components/BtnWrap'

function App() {
  return (
    <StyledCard aria-label="Product card">
      <PhotoCard src={Img} alt="Card photo" />
      <ContentCard aria-label='product information'>
        <HeaderCard>Headline</HeaderCard>
        <TextCard>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </TextCard>
        <BtnWrap aria-label='buttons'>
          <ButtonCard>See more</ButtonCard>
          <ButtonCardSecond>Save</ButtonCardSecond>
        </BtnWrap>
      </ContentCard>
    </StyledCard>
  )
}

export default App
