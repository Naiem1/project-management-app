import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const authState = useSelector((state) => state.auth.user);
  console.log('==========================', authState);
  const { Component } = props;
  const navigate = useNavigate();

  // useEffect(() => {
  //   let login = authState;
  //   if (!login) {
  //     navigate('/login');
  //   }
  // });

  if (!authState?.email) {
    navigate('/login');
  }
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
