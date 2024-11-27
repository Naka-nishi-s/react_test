import React from 'react'
import { useNavigate } from 'react-router-dom';
import image_test from '/collection_file/fire_brigade.pdf'
import './App.css'
import Footer from './Footer';

function Collection() {
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
    const handleClick = () => {
        window.open('https://nagasawa993.github.io/VBAtest/');
    };
    const handleClick2 = () => {
        window.open(image_test);
    };
  return (
    <>
      <div className='parent-container'>
        <div className='button-container'>
          <button onClick={goToTop}>TOP</button>
          <button onClick={goToProfile}>プロフィール</button>
          <button onClick={goToCollection}>作品一覧</button>
        </div>
        <div className='collection-content'>
        <h1>作品一覧</h1>
        <div className="grid-container">
          <div onClick={handleClick} key='1' className="grid-item">
              <h3>VBA エキスパート資格問題</h3>
              <p>エクセルVBA エキスパート試験を受けた際に、
                ネットでも勉強できるサイトがあれば便利と思ったので作成</p>
          </div>
          <div onClick={handleClick2} key='2' className="grid-item">
            <h3>消防団ポスター</h3>
            <p>川崎市中原区丸子分団様から相談を受け作成</p>
          </div>
          <div key='3' className="grid-item">
            <h3>Coming soon...</h3>
            <p>Coming soon...</p>
          </div>
          <div key='4' className="grid-item">
            <h3>Coming soon...</h3>
            <p>Coming soon...</p>
          </div>
          <div key='5' className="grid-item">
            <h3>Coming soon...</h3>
            <p>Coming soon...</p>
          </div>
          <div key='6' className="grid-item">
            <h3>Coming soon...</h3>
            <p>Coming soon...</p>
          </div>
          <div key='7' className="grid-item">
            <h3>Coming soon...</h3>
            <p>Coming soon...</p>
          </div>
          <div key='8' className="grid-item">
            <h3>Coming soon...</h3>
            <p>Coming soon...</p>
          </div>
          <div key='9' className="grid-item">
            <h3>Coming soon...</h3>
            <p>Coming soon...</p>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Collection
