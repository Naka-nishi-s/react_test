import React from 'react'
import { useNavigate } from 'react-router-dom';
import image_top_title from '/images/image_top_title.png'
import image_profile from '/images/image_top.webp'
import './App.css'

function Top() {
  const navigate = useNavigate();
  const goToTop = () => {
    navigate('/');
  };
  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <>
      <div className="parent-container">
        <div className="button-container">
          <button onClick={goToTop}>TOP</button>
          <button onClick={goToProfile}>プロフィール</button>
          <button>作品一覧</button>
        </div>
          <div>
            <img className="top-title" src={image_top_title} /> 
            <img src={image_profile} />
          </div>
      </div>
    </>
  )
}

export default Top
