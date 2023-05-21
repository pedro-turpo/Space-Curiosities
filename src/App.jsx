import { useState } from 'react'
import './App.css'
import dbSpaceCuriosities from './db/space_curiosities.json'
import { getRandom } from './utils/getRandom'
import TitleBox from './components/TitleBox'
import BodyBox from './components/BodyBox'
import FooterBox from './components/FooterBox'

const bgImages = ['bg1', 'bg2', 'bg3', 'bg4']
const bgPlanets = ['planet1', 'planet2', 'planet3', 'planet4']

function App() {
  const [randomCuriosities, setRandomCuriosities] = useState(getRandom(dbSpaceCuriosities))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))
  const [bgPlanet, setPlanet] = useState(getRandom(bgPlanets))

  const handlerChangephrase = () => {
    setRandomCuriosities(getRandom(dbSpaceCuriosities))
    setBgImage(getRandom(bgImages))
    setPlanet(getRandom(bgPlanets))
  }


  return (

    <main className={`container ${bgImage}`}>
      {/* TIRULO */}
      <TitleBox />
      {/* CUERPO */}
      <div className={`wallpaperPlanet ${bgPlanet}`}>
        <BodyBox randomCuriosities={randomCuriosities.phrase} handlerChangephrase={handlerChangephrase} />
        {/* FOOTER */}
        <FooterBox autorRandomCuriosities={randomCuriosities.author}/>
      </div>
    </main>

  )
}

export default App
