import './App.css';
import Counter from "./Counter";
import { CounterProvider } from './CounterContext.tsx';
import CounterDisplay from './CounterDisplay.tsx';

function App() {
  return (
    <CounterProvider>
      <div>
        <h1>Demitri's House of Buttons</h1>
        <h2>Counter #1: <CounterDisplay /></h2>
        <Counter />
        <h2>Counter #2: <CounterDisplay /></h2>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;