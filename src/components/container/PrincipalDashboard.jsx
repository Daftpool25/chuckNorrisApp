import React from 'react'
import Jokes from '../pure/jokes'
import Likes from '../pure/likes'
import chuck from "../../images/chuck.png"


function PrincipalDashboard({getJoke,Joke, data1, data2,increaseDislikes,increaseLikes}) {
  return (
    <div className='dashboard'>
        <div className='imgContainer'>
            <div className="dialogBox">
              <div>
                <p>{Joke}</p>
              </div>
            </div>
             <img className="imgResponsive" src={chuck} alt="chuck"/>
        </div>        
        <div className='dataContainer'>
          <Jokes get={getJoke} jokesList={Joke}></Jokes>
          <Likes likes={data1} 
                dislikes={data2}
                clickDislikes={increaseDislikes} 
                clickLikes={increaseLikes}>

          </Likes>
        </div>
    </div>
  )
}

export default PrincipalDashboard