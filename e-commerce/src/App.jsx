import './App.css';
import { HomePage} from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import {Routes, Route } from 'react-router';
import {OrdersPage} from './pages/OrdersPage';
import {TrackingPage} from './pages/TrackingPage';

function App() {
  return (
    <Routes> 
       <Route index element ={<HomePage/>}/>
       <Route path= "checkout" element= { <CheckoutPage/>} />
       <Route path = "Orders" element ={<OrdersPage/>} />
       <Route path = 'Tracking' element = {<TrackingPage/>}/>
    </Routes>
  )
}

export default App
