import styled from 'styled-components'
import { BtnWrap } from './BtnWrap'
import { ButtonCard, ButtonCardSecond } from './ButtonCard'
import { ContentCard } from './ContentCard'
import { HeaderCard } from './HeaderCard'
import { PhotoCard } from './PhotoCard'
import { TextCard } from './TextCard'

type CardPropsType = {
  src: string
  heading: string
  text: string
}

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard aria-label="Product card">
      <PhotoCard src={props.src} alt="Card photo" />
      <ContentCard aria-label="product information">
        <HeaderCard>{props.heading}</HeaderCard>
        <TextCard>{props.text}</TextCard>
        <BtnWrap aria-label="buttons">
          <ButtonCard>See more</ButtonCard>
          <ButtonCardSecond>Save</ButtonCardSecond>
        </BtnWrap>
      </ContentCard>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  max-width: 300px;
  width: 100%;
  padding: 10px 10px 22px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px 5px #0000001a;
  font-weight: bold;
  position: relative;
`
