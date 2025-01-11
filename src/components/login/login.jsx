// import SocialLogin from "./SocialLogin";
import InputField from "./InputField";
import { useState } from 'react';
import './login.css'
import Signup from './signup';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  if (!isLogin) {
    return <Signup onToggle={toggleForm} />;
  }

  return (
    <div className="login-container">
      <h2 className="form-title">Log in</h2>
      {/* <SocialLogin /> */}

      

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="#" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-prompt">
        Don&apos;t have an account? <a href="#" onClick={toggleForm} className="signup-link">Sign up</a>
      </p>
    </div>
  )
}

export default Login;
