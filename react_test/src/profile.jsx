import React from 'react'
import image_profile from '/images/image_profile.webp'
import './App.css'

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="button-container">
          <button>TOP</button>
          <button>プロフィール</button>
          <button>作品一覧</button>
        </div>
          <div>
            <h1>プロフィール</h1>
            <img className="profile-title" src={image_profile} /> 
            <p>こんにちは。私は○○（名前）と申します。現在、Webアプリケーションの開発を中心にフロントエンドエンジニアとして働いています。特に、ReactやTypeScriptを活用したモダンなUI/UXの構築を得意としています。
これまで、パフォーマンスの最適化やユーザーエクスペリエンスの向上を目的としたプロジェクトに数多く関わってきました。APIとの連携や状態管理ライブラリの導入を通じて、効率的でスケーラブルなアプリケーション開発に努めています。
チーム開発ではGitやCI/CDツールを活用し、アジャイル開発のプロセスを大切にしながら、迅速かつ確実なリリースを目指しています。また、新しい技術やツールの習得にも積極的で、技術コミュニティに参加しつつ、自分自身のスキルセットを常に更新しています。
趣味はコーディングだけでなく、機械学習やIoTにも興味があり、プライベートでも個人プロジェクトを進めています。私の目標は、技術を通じて社会に価値を提供し、人々の生活をより便利で豊かにすることです。
どうぞよろしくお願いいたします。</p>
            {/* <img src={image_top} /> */}
          </div>
      </div>
    </>
  )
}

export default App
