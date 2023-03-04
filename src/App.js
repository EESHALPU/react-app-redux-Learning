import './App.css';
// import { Body } from './Components/Body/Body';
// import { Header } from './Components/Header.js/Header';
import {Routes,Route } from 'react-router-dom';
// import { Footer } from './Components/Footer.js/Footer';
import { User } from './Components/User/User';
import { About } from './Components/About/About';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './utils/Sotre/Store';

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
    <Navbar/>
      <Routes>
      <Route path="/" element = {<Home year={2023}/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/register" element = {<User/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
