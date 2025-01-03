"use client"

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../counterSlice';

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button type='submit' onClick={() => dispatch(increment())}>Increment</button>
      <button type='submit' onClick={() => dispatch(decrement())}>Decrement</button>
      <button type='submit' onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;