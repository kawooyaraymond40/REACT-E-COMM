import './App.css';
import { HomePage} from './pages/HomePage';
import {Routes, Route } from 'react-routers';

function App() {
  return (
    <Routes>
       <Route index element ={<HomePage/>}/>
       <Route path= "checkout" element= { <div>games</div>} />
    </Routes>
  )
}

export default App
