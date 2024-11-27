import React from 'react'
import { useNavigate } from 'react-router-dom';
import image_profile from '/images/image_profile.jpg'
import './App.css'
import Footer from './Footer';

function Profile() {
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
        <div className='profile-content'>
          <h1>プロフィール</h1>
          <img className='image_profile' src={image_profile} /> 
          <p>こんにちは。私は長澤良宗と申します。<br/>
            <br/>
            現在Webアプリケーションのバックエンド開発やテストを中心にITエンジニアとして働いています。<br/>
            特にバックエンド開発ではFastAPI(Python)を活用したAPI開発と、<br/>
            それをAWS上にデプロイするモダンなUXの構築を得意としています。<br/>
            今後はフロントエンドの技術習得に向けReactで作成したWebサイトの個人開発を行い、<br/>
            フルスタックエンジニアとしてより多くの価値を社会に提供し、<br/>
            人々の生活をより便利で豊かにすることを目標にしていきたいと思います。<br/>
            どうぞよろしくお願いいたします。</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Profile
