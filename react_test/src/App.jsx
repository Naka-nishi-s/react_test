import React from 'react'
import image_top_title from '/images/image_top_title.png'
import image_top from '/images/image_top.webp'
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
            <img className="top-title" src={image_top_title} /> 
            <img src={image_top} />
          </div>
      </div>
    </>
  )
}

export default App
