# React + Vite + TypeScript + SWC + TailwindCSS + Redux Toolkit + React Router DOM

This is a starter template that combines modern technologies for fast and efficient web application development in React, using **Vite** with support for **TypeScript** and **SWC** (a fast JavaScript compiler), along with **TailwindCSS** for styling, **React Router DOM** for routing, and **Redux Toolkit** for global state management.

## Usage
```bash
npm run install
```

## TailwindCSS Setup
Install TailwindCSS and its necessary dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure the `tailwind.config.js` and `postcss.config.js` files. Make sure to add the paths to your template files so TailwindCSS can correctly process the styles.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your main CSS file, such as `index.css` or `App.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## React Router DOM Setup
Install React Router DOM for routing:
```bash
npm install react-router-dom
```
In your `App.tsx` file, import the necessary components from React Router DOM like BrowserRouter, Routes, Route, and Link to define routes and navigation:
```tsx
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```
Create the respective pages (Home.tsx and About.tsx) in the `src/pages/` folder.

## Redux Toolkit Setup
Install Redux Toolkit and React Redux:
```bash
npm install @reduxjs/toolkit react-redux
```
 Create the folder `src/redux` and configure the store in `redux/store.ts`:
```ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```
Create a slice to manage the state, such as a counter in `redux/slices/counterSlice.ts`:
```ts
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```
In the `App.tsx` file, use the global state with React Redux:
```tsx
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Counter from './components/Counter';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <h1>Counter value: {count}</h1>
      <Counter />
    </>
  );
}

export default App;
```

In the `Counter.tsx` component, dispatch actions to modify the global state:
```tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

const Counter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```
## Vite Environment Variables
In your .env file, you can define custom variables. You need to add `VITE_`:
```env
VITE_ENV_VAR="My environment variable"
```
In your code, you can access them using import.meta.env:
```tsx
const envVar = import.meta.env.VITE_ENV_VAR;
```
## Scripts
To run the application locally:
```bash
npm run dev
```
To build the application for production:
```bash
npm run build
```
## Contributing
If you encounter any issues or want to add new features, feel free to open an issue or submit a pull request.
## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
