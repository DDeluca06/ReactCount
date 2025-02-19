import { useCounter } from './CounterContext.tsx';

function Counter() {
  const { count, setCount } = useCounter();
return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;