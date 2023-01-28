import React, { useState } from 'react'
const App = () => {

// useStateの初期値がtextに入る
// setTextは値を更新する際に呼び出す
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  return (
    <>
      <p>text : {text}</p>
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={() => alert(text)}>値の確認</button>
    </>
  )
}

export default App;