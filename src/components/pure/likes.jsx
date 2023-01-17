import React from 'react';
import good from "../../images/like.svg"
import bad from "../../images/dislike.svg"


function Likes({clickLikes, clickDislikes,likes,dislikes}) {
  return (
    <div>
        <div className="likesContainer" onClick={clickLikes}>
            <div className="likeButton">
                  <img alt="like.svg" src={good} ></img>
                  <span className="spanText">Like ({likes})</span>
            </div>
            <div className="disLikeButton" onClick={clickDislikes}>
                  <img alt="dislike.svg" src={bad} ></img>
                  <span className="spanText">Dislike ({dislikes})</span>
            </div>

        </div>

    </div>
    
  )
}

export default Likes