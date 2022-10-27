import React from 'react'
import { useDispatch, useSelector } from 'react-redux/'
import counterReducer, { decrement, increment, incrementByValue } from './Reducers'

const App = () => {
  const { count } = useSelector(state => state.counter)
  const dispatch=useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByValue(10))}>Increment By Value</button>
    </div>
  )
}

export default App