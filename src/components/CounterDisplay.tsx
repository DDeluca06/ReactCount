import { useCounter } from './CounterContext.tsx';

// Ideally, this is such a small thing that it really shouldn't be its own component and just run in App. But, I know the requirements.
function CounterDisplay() {
  const { count } = useCounter();
  return <>{count}</>;
}

export default CounterDisplay;