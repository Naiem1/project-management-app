import { Route, Routes } from 'react-router-dom';
import Register from '../../pages/RegisterPage';
import Login from '../../pages/LoginPage';

const AppRouter = () => {
  return (
    <Routes>
      
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
