import React, { useState } from 'react'

const Counter = () => {
  const initialState = Math.floor(Math.random() * 10) + 1
  const [count, setCount] = useState(initialState)

  return (
    <>
      <div>
        <p>現在の数字は{count}です</p>
        <button onClick={() => setCount(prevState => prevState + 1)}>
          + 1
        </button>
        <button onClick={() => setCount(count - 1)}>- 1</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount(initialState)}>ランダムセット</button>
      </div>
    </>
  )
}

export default Counter;