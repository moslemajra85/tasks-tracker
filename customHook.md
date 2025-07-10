# Introduction to Custom Hooks in React

Custom Hooks are a powerful feature in React that let you extract component logic into reusable functions. They allow you to write cleaner, more modular code by separating concerns and avoiding code duplication.

## What is a Custom Hook?

A custom Hook is a JavaScript function whose name starts with `use` and that can call other Hooks. They allow you to reuse stateful logic across different components without having to rewrite it every time.

### Key Rules of Custom Hooks

- **Name must start with `use`**: This is a convention that React uses to identify Hooks.
- **Can call other Hooks**: Custom Hooks can use built-in Hooks like `useState`, `useEffect`, and `useContext`.
- **Should encapsulate logic, not UI**: Custom Hooks should focus on stateful logic and not render any JSX.

## Why Use Custom Hooks?

- **Reusability**: You can reuse the same logic in multiple components.
- **Readability**: They help to keep your components clean and easy to read.
- **Separation of Concerns**: You can separate the logic from the UI, making your code easier to maintain.

---

## Example: Creating a `useLocalStorage` Hook

A common use case for a custom Hook is to interact with the browser's `localStorage`. Let's create a `useLocalStorage` Hook that will allow us to store and retrieve data from `localStorage`.

### The `useLocalStorage` Hook

This Hook will act like `useState`, but it will also sync the state with `localStorage`.

#### `useLocalStorage.js`

```javascript
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Read from localStorage on the initial render
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error reading from localStorage', error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn('Error writing to localStorage', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

### How to Use the `useLocalStorage` Hook

You can use the `useLocalStorage` Hook in any component just like you would use `useState`.

#### `App.jsx`

```javascript
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('username', '');

  return (
    <div>
      <h1>Hello, {name || 'Guest'}!</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
```

### How It Works

- **On the first render**: The Hook checks if a value exists in `localStorage` with the given key. If it does, it uses that value; otherwise, it falls back to the `initialValue`.
- **On updates**: Whenever the state changes, the `useEffect` Hook is triggered, and the new value is saved to `localStorage`.

---

## Common Use Cases for Custom Hooks

Here are some other examples of custom Hooks you can create:

- **`useFetch`**: To handle data fetching, loading, and error states.
- **`useForm`**: To manage form state and handle submissions.
- **`useDarkMode`**: To manage the theme of your application.

By creating your own custom Hooks, you can build a library of reusable logic that will make your development process faster and more efficient.
