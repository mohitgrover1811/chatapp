import './App.css'
import Login from './components/Login';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className='App'>
      <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
      </Routes>  
    
      
     </div>
  );
}

export default App;
