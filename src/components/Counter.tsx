// Counter.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';
import { AppDispatch } from '../redux/store';

const Counter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Componente Counter</h2>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Incrementar por 10</button>
    </div>
  );
};

export default Counter;
