

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