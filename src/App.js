import './App.css';
import { Routes, Route } from 'react-router-dom'
import ForgotPassword from './Component/ForgotPassword';
import ResetPasswordForm from './Component/ResetPasswordForm';
import WelcomePage from './Component/WelcomePage';
import Register from './Component/Register';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<ForgotPassword />} />
        <Route path='/Reset-password/:resetToken' element={<ResetPasswordForm />} />
        <Route path='/Welcome' element={<WelcomePage />} />
        <Route path='/Register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
