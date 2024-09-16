import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./components/Counter";
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {

  const envVar = import.meta.env.VITE_ENV_VAR;
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <h1>{envVar}</h1>

      <h1>Valor del contador: {count}</h1>
      <Counter/>

      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
