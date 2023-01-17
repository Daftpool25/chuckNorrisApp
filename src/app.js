import React, { useState } from 'react';
import {Link, Route, Routes, BrowserRouter} from "react-router-dom"
import About from './components/pages/about';
import Home from './components/pages/home';
import getData from './services/axiosServices';

//Styles
import "./styles/styles.scss"
import linkedin from "./images/linkedin.svg"
import github from "./images/github.svg"
import burger from "./images/menu.png"




function App() {

  const [joke, setJoke] = useState("");
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const [likeStatus,setLikeStatus]=useState(false)
  const [menuStatus,setMenuStatus]=useState(false)


  function newLike() {

    if(likeStatus){
      setLike(like+1);
      setLikeStatus(false)
    }else{alert("Already voted");}

  }

  function newDisLike() {
    if(likeStatus){
      setDisLike(disLike+1);
      setLikeStatus(false)
    }else{alert("Already voted");}

  }


  function getJoke() {
    getData().
      then((response) =>{
          if(response.status===200){
            setJoke(response.data);
            setLikeStatus(true)}
      }).
      catch((error) => {alert(error)})
  }

  return (
    <BrowserRouter>
        <main className="menu">
                <span>|</span>
                <Link className="tittleText" to="/">Home</Link>
                <span>|</span>
                <div className='iconsContainer'>
                    <span>|</span>
                    <Link className="tittleText" to="/about">About</Link>
                    <span>|</span>
                    <a href="https://www.linkedin.com/in/christopher-acosta-dev26" ><img alt="linkedin.svg" src={linkedin}></img></a>
                    <span>|</span>
                    <a href="https://github.com/Daftpool25"><img  alt="github.svg" src={github}></img></a>
                    <span>|</span>
                </div>
                


        </main>
        <main className="menuMobile">
          <div className="menuHeader"><img onClick={menuStatus? () => setMenuStatus(false):() => setMenuStatus(true)} alt="menu" src={burger}></img></div>
          <div className="menuBody">
              {
                menuStatus?
            <div className='iconsContainer'>
               <span>|</span>
                    <Link className="tittleText" to="/">{"<="}</Link>
                <span>|</span>
                <Link className="tittleText" to="/about">About</Link>
                <span>|</span>
                <a href="https://www.linkedin.com/in/christopher-acosta-dev26" ><img alt="linkedin.svg" src={linkedin}></img></a>
                <span>|</span>
                <a href="https://github.com/Daftpool25"><img  alt="github.svg" src={github}></img></a>
                <span>|</span>
            </div>
                :
                <div></div>
              }
          </div>
        </main>
        <div className='container'>
            
            <Routes>
                <Route exact path='/' element={<Home 
                        request={() =>getJoke()} 
                        data={joke.value} 
                        getLikes={like} 
                        increaseL={newLike} 
                        increaseD={newDisLike}
                        getDisLikes={disLike} />}
                />
                <Route path='/about' element={<About/>}/>
            </Routes>
                  
        </div>
    </BrowserRouter>
  )
}

export default App