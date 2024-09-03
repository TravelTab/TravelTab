import React from 'react';
import 'FirstPage/loginbutton.css';

const LoginButton: React.FC = () => {
  return (
    <button className="login-button">
      <div className="rectangle-4-0" />
      <p className="text-1">로그인</p>
    </button>
  );
};

export default LoginButton;