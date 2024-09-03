import { useEffect, useState } from "react"
import "./App.css"
import { getAllJokes, postNewJoke } from "./services/jokeService"
import stevePic from "./assets/steve.png"
export const App =  () => {
  const [oneLiner, setOneLiner] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setunToldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [toldCount, setToldCount] = useState(0)
  const [untoldCount, setUntoldCount] = useState(0)
  useEffect(() => {
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
    })
  }, [oneLiner])
  useEffect(() => {
    
    const filteredToldJokes = allJokes.filter(joke => {
      
      if (joke.told) {  
        return joke
        
      }
      })
      
    const filteredunToldJokes = allJokes.filter(joke => {
      if (!joke.told) {
        return joke
      }
      })
    setToldJokes(filteredToldJokes)
    setunToldJokes(filteredunToldJokes)
    setUntoldCount(filteredunToldJokes.length)
    setToldCount(filteredToldJokes.length)

  }, [allJokes])
  return (
  <div className="app-container">
    <div className="app-heading">
      <div className="app-heading-circle">
        <img className="app-logo" src={stevePic} alt="Good job Steve" />
      </div>
      <h1 className="app-heading-text">Chuckle Checklist</h1>

    </div>
    <h2 className="headers">Jokes</h2>
    <div className="joke-add-form">
      

      <input className="joke-input" type="text" placeholder="New One Liner" value={oneLiner} onChange={(event) => {
        setOneLiner(event.target.value)
      }} />
      <button className="joke-input-submit" onClick={async (event) =>{
        await postNewJoke(oneLiner);
        setOneLiner("")
      }}>Submit</button>
      
    </div>
    <div className="joke-lists-container">
      <div className="joke-list-container" id="untold-list">
        <h2 className="headers">Untold Jokes <span className="untold-count">{untoldCount}</span></h2>
        
        <ul>
          {untoldJokes.map(joke =>{
            return (
              <li className="joke-list-item " key={joke.id}>{joke.text}<button id="untold-button" className="joke-switch" onClick={joke.told= true}> <i className="fa-regular fa-face-grin-squint-tears"></i></button></li>
            )
          })}
        </ul>

      </div>
      <div className="joke-list-container" id="told-list">
        <h2 className="headers">Told Jokes <span className="told-count">{toldCount}</span></h2>
        
        <ul>
          {toldJokes.map(joke =>{
            return (
              <li className="joke-list-item" key={joke.id}>{joke.text}<button className="joke-switch"><i className="fa-solid fa-face-grin-tongue-wink"></i></button></li>
            )
          })}
        </ul>

      </div>
      

    </div>

  </div>
  )
}
