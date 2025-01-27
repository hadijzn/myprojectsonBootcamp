import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Menu from './components/Menu';
import Home from './components/Home';
import Explorer from './components/Explorer';


function App() {
  return (
    <body className=' bg-black  text-white'>
      <Menu/>
      <Home/>
      <Explorer />

      <Users/>
    </body>
  );
}

export default App;
