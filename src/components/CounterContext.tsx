import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our context, because this is TypeScript, and TypeScript blows.
interface CounterContextType {
    count: number;
    setCount: (count: number) => void;
}

// Create context with a default value of undefined
// We use angle brackets here to specify the type of the context we are creating
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Creating the provider, which will be used to wrap the components that need access to the context
interface CounterProviderProps {
    children: ReactNode;
}

// This is our provider component, which will wrap the components that need access to the context... I think? Maybe? I don't know.
// I'm just a comment, I don't know what I'm talking about. I'm just here to confuse you. Sorry. Maybe. I don't know. Maybe I'm just a placeholder for a real comment that someone will write later. Maybe. I don't know.
export function CounterProvider({ children }: CounterProviderProps) {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}

// My first custom hook! I'll frame this up on my wall one day...
// This hook returns our context, or throw an error if the context is undefined.
export function useCounter() {
    const context = useContext(CounterContext);
    if (context === undefined) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
  return context;
}
