

export const postNewJoke = async (oneLiner) =>{
       
    const postOption =
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: oneLiner, told: false})
        }
     await fetch('http://localhost:8088/jokes', postOption )
              
            
          
    
}
export const getAllJokes = () => {
    return fetch('http://localhost:8088/jokes').then(res => res.json())
}
export const changeJoke = async (joke) => {
   joke.told = !joke.told
   const postOption =
        {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(joke)
        }
   fetch(`http://localhost:8088/jokes/${joke.id}`, postOption )
}
export const deleteJoke = async (event, jokeList, setallJokes) =>{
    const targetJoke = event.id
    
            
    const response = await fetch(`http://localhost:8088/jokes/${targetJoke}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    })
    const filteredJokes = jokeList.filter(jokes => jokes.id !== parseInt(targetJoke))
    setallJokes(filteredJokes)
}
   
    




