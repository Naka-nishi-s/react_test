import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import images from '/images/image_top.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <button>TOP</button>
          <button>プロフィール</button>
          <button>作品一覧</button>
        </div>
        <div>
          <h1>NAGASAWA Gallery</h1>
        </div>
        <div>
        <img src={images}/>
        </div>
      </div>
    </>
  )
}

export default App
