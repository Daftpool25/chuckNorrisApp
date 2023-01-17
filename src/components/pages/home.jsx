import React from 'react'
import PrincipalDashboard from "../container/PrincipalDashboard"

function Home({request,data, getLikes, getDisLikes,increaseL,increaseD}) {
  return (
    <PrincipalDashboard getJoke={request} Joke={data} data1={getLikes} data2={getDisLikes}
    increaseLikes={increaseL} increaseDisLikes={increaseD}/>
  )
}

export default Home