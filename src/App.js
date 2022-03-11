import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom'
import Nav from './Component/nav';
import Home from './Component/home';
import Gallery from './Component/gallery';

function App() {
  return (
    <div className="App">

      <Home />

    </div>
  );
}

export default App;
