import './App.css';
import Counter from "./components/Counter";
import { CounterProvider } from './components/CounterContext';
import CounterDisplay from './components/CounterDisplay';

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