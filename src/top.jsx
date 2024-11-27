import React from 'react'
import { useNavigate } from 'react-router-dom';
import image_top_title from '/images/image_top_title.png'
import image_top from '/images/image_top.png'
import './App.css'
import Footer from './Footer';

function Top() {
  const navigate = useNavigate();
  const goToTop = () => {
    navigate('/');
  };
  const goToProfile = () => {
    navigate('/profile');
  };
  const goToCollection = () => {
    navigate('/collection');
  };
  return (
    <>
      <div className='parent-container'>
        <div className='button-container'>
          <button onClick={goToTop}>TOP</button>
          <button onClick={goToProfile}>プロフィール</button>
          <button onClick={goToCollection}>作品一覧</button>
        </div>
        <div className='top-container'>
          <img className='top-title' src={image_top_title} /> 
          <img className='top-image' src={image_top} />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Top
