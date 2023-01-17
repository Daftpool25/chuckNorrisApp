import React, { useEffect } from 'react'

function Jokes({get,jokesList}) {
  
    
  return (
    <div className="principalBtnTittleContainer">
        <h1>Chuck Norris Jokes</h1>
        <button className="nextButton" onClick={get}>{jokesList===undefined? "New Joke!":"Say Something more!"}</button>

    </div>
  )
}

export default Jokes