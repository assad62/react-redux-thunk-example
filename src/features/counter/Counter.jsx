import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  React.useEffect(()=>{
      dispatch(incrementAsync(Number(80)))
  },[])


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
         
          onClick={() => dispatch(incrementAsync(Number(80) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}