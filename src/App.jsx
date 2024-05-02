import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className={'title'}>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
              <h1>Counter</h1>
          </div>
          <div className="count-info">
              count is {count}
          </div>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  +
              </button>
              <button onClick={() => setCount((count) => count - 1)}>
                  -
              </button>
          </div>
      </>
  )
}

export default App
