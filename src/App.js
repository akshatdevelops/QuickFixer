
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerSignup from './CustomerRegister/CustomerSignup';
import ServiceSignup from './ServiceRegister/ServiceSignup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/customersignup' element={<CustomerSignup/>}/>
      <Route path="/servicesignup" element={<ServiceSignup/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
