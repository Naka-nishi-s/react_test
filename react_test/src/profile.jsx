import React from 'react'
import { useNavigate } from 'react-router-dom';
import image_profile from '/images/image_profile.webp'
import './App.css'

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
          <img className='profile-title' src={image_profile} /> 
          <p>こんにちは。私は長澤良宗と申します。<br/>
            現在、Webアプリケーションの開発を中心にフロントエンドエンジニアとして働いています。<br/>
            特に、ReactやTypeScriptを活用したモダンなUI/UXの構築を得意としています。<br/>
            これまで、パフォーマンスの最適化やユーザーエクスペリエンスの向上を目的とした<br/>
            プロジェクトに数多く関わってきました。APIとの連携や状態管理ライブラリの導入を通じて、<br/>
            効率的でスケーラブルなアプリケーション開発に努めています。<br/>
            チーム開発ではGitやCI/CDツールを活用し、アジャイル開発のプロセスを大切にしながら、<br/>
            迅速かつ確実なリリースを目指しています。また、新しい技術やツールの習得にも積極的で、<br/>
            技術コミュニティに参加しつつ、自分自身のスキルセットを常に更新しています。<br/>
            趣味はコーディングだけでなく、機械学習やIoTにも興味があり、<br/>
            プライベートでも個人プロジェクトを進めています。私の目標は、技術を通じて社会に価値を提供し、<br/>
            人々の生活をより便利で豊かにすることです。<br/>
            どうぞよろしくお願いいたします。</p>
        </div>
      </div>
    </>
  )
}

export default Profile
