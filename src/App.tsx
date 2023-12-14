import './App.css'
import { Card } from './components/Card'
import Img from './assets/images/photoCard.png'

function App() {
  return (
    <Card
      src={Img}
      heading="Headline"
      text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
  ornare in venen."
    />
  )
}

export default App
