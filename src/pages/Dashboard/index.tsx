import React from 'react';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  console.log(user);
  return (
    <>
      <h1>Dashboard</h1>
      <p>Olá</p>
      <button type="button" onClick={() => signOut()}>
        SignOut
      </button>
    </>
  );
};

export default Dashboard;
