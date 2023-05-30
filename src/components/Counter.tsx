
//useReducerをimport
import React, {useReducer} from 'react'
import { Button, ButtonGroup } from '@mui/material'

type CountState = {
    firstCounter: number;
    secondCounter: number;
}

type Action = {
    type: string,
    value?: any
}

//counterの初期値を0に設定
//2つのcountStateを扱う。それぞれのinitialStateを設定
const initialState:CountState ={
  firstCounter: 0,
  secondCounter: 100
}
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState:CountState, action:Action)=> {

    switch (action.type){
        case 'increment1':
            return {...countState, firstCounter: countState.firstCounter + action.value}
        case 'decrement1':
            return {...countState, firstCounter: countState.firstCounter - action.value}
        case 'increment2':
            return {...countState, secondCounter: countState.secondCounter + action.value}
        case 'decrement2':
            return {...countState, secondCounter: countState.secondCounter - action.value}
        case 'reset1':
            return {...countState, firstCounter: initialState.firstCounter}
        case 'reset2':
            return {...countState, secondCounter: initialState.secondCounter}
        default:
            return countState
    }
}

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState)
  return (
    <>
      <h2>カウント：{count.firstCounter}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>dispatch({type: 'increment1', value: 1})}>increment1</Button>
        <Button onClick={()=>dispatch({type: 'decrement1', value: 1})}>decrement1</Button>
        <Button onClick={()=>dispatch({type: 'reset1'})}>reset</Button>
      </ButtonGroup>
      <h2>カウント2：{count.secondCounter}</h2>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        <Button onClick={()=>dispatch({type: 'increment2', value: 100})}>increment2</Button>
        <Button onClick={()=>dispatch({type: 'decrement2', value: 100})}>decrement2</Button>
        <Button onClick={()=>dispatch({type: 'reset2'})}>reset</Button>
      </ButtonGroup>
    </>
  )
}

export default Counter2;
