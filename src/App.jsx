import './App.css'
import PhrasesRam from './components/PhrasesRam'
import phrases from './data/phrases.json'
import { useState } from 'react'

function App() {

 const [index, setIndex] = useState(0)
 const backgroundRam = [{src:'/fondocuatro.png'}, {src:'/fondotres.png'}, {src:'/fondo1.png'},{src:'/fondo2.jpg'},{src:'/fondo3.jpg'}, {src:'/fondo4.jpg'}, {src:'/fondouno.jpg'},{src:'/fondocuatro.png'}, {src:'/fondotres.png'}, {src:'/fondo1.png'},{src:'/fondo2.jpg'},{src:'/fondo3.jpg'}, {src:'/fondo4.jpg'}, {src:'/fondodos.png'}, {src:'/fondouno.jpg'}]

 const chargePhrases = () => {
  if(index < phrases.length - 1){
    setIndex(Math.floor(Math.random()*backgroundRam.length - 0 +1 ))+ 0
  }
 }
 document.body.style.backgroundImage = `url(${backgroundRam[index].src})`

  return (
    <>
      <PhrasesRam
      data = {phrases[index]}
      />
      <button className= "ovButton" onClick={chargePhrases}>Prueba tu suerte</button>
    </>
  )
}

export default App
