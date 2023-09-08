import { Route, Routes } from 'react-router-dom';
import Register from '../../pages/RegisterPage';
import Login from '../../pages/LoginPage';
import Board from '../../pages/BoardPage';
import Protected from '../../components/Protected';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Protected Component={Board} />}/>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
