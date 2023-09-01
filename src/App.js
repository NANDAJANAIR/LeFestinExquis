
import './App.css';
import Home from './screens/Home';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
