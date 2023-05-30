import { useContext, useState } from 'react'
import './App.css'
import Counter from './components/Count'
import Timer from './components/Timer'
import {CtrlDOMRef, CtrlDOMState} from './components/Ref'
import ContextMain from './components/ContextSample/ContextMain'
import Counter2 from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <CtrlDOMState/> */}
      {/* <CtrlDOMRef/> */}
      {/* <Counter/> */}
      <Timer/>
      {/* <ContextMain/> */}
      {/* <Counter2/> */}
    </div>
  )
}

export default App
