import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};
export default App;
