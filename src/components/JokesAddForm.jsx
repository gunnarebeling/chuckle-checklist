import { postNewJoke } from "../services/jokeService";

export const JokesAddForm = ({setOneLiner, oneLiner}) => {
    
    return (
        <div className="joke-add-form">
            <input className="joke-input" type="text" placeholder="New One Liner" value={oneLiner} onChange={(event) => {
                setOneLiner(event.target.value)
            }} />
            <button className="joke-input-submit" onClick={async (event) =>{
                await postNewJoke(oneLiner);
                setOneLiner("")
            }}>Submit</button> 
        </div>
    )
}