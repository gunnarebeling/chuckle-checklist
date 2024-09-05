import { useEffect, useState } from "react"
import "./App.css"
import { changeJoke, deleteJoke, getAllJokes, postNewJoke } from "./services/jokeService"
import stevePic from "./assets/steve.png"
import { JokesAddForm } from "./components/JokesAddForm"
import { JokesList } from "./components/JokesList"
export const App =  () => {
  
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setunToldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [toldCount, setToldCount] = useState(0)
  const [untoldCount, setUntoldCount] = useState(0)
  const [oneLiner, setOneLiner] = useState("")

  
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
      <JokesAddForm setOneLiner={setOneLiner} oneLiner={oneLiner}/>
    <div className="joke-lists-container">
      <div className="joke-list-container" id="untold-list">
        <h2 className="headers">Untold Jokes <span className="untold-count">{untoldCount}</span></h2>
        
        <ul>
          {untoldJokes.map(joke =>{
            return (
              <JokesList joke={joke} deleteJoke={deleteJoke} setAllJokes={setAllJokes} allJokes={allJokes} changeJoke={changeJoke} key={joke.id}/>
            )
          })}
        </ul>

      </div>
      <div className="joke-list-container" id="told-list">
        <h2 className="headers">Told Jokes <span className="told-count">{toldCount}</span></h2>
        
        <ul>
          {toldJokes.map(joke =>{
            return (
              <JokesList joke={joke} deleteJoke={deleteJoke} setAllJokes={setAllJokes} allJokes={allJokes} changeJoke={changeJoke} key={joke.id}/>
            )
          })}
        </ul>
      </div>    
    </div>
  </div>
  )
}
