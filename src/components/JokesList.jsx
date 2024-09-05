export const JokesList = ({deleteJoke,joke,setAllJokes, allJokes, changeJoke}) => {
    return (  
        <li className="joke-list-item" key={joke.id}>{joke.text} <span className="change-joke-buttons"><button className="delete joke-switch" onClick={() => deleteJoke(joke,allJokes,setAllJokes)}><i className="fa-solid fa-trash-can"></i></button>
                <button className="joke-switch" onClick={() =>{
                const newJokes = allJokes.map((currentJoke =>{
                if (joke.id === currentJoke.id) {
                    changeJoke(currentJoke)

                    
                }
                return currentJoke
                }))
                setAllJokes(newJokes)
                } }><i className="fa-solid fa-face-grin-tongue-wink"></i></button></span></li>       
    )
}