
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerSignup from './CustomerRegister/CustomerSignup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/customersignup' element={<CustomerSignup/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
