import InputField from "./InputField";
import PropTypes from 'prop-types';

const Signup = ({ onToggle }) => {
  return (
    <div className="login-container">
      <h2 className="form-title">Sign up</h2>

      <form action="#" className="login-form">
        <InputField type="text" placeholder="Full Name" icon={<span className="material-icons">person</span>} />
        <InputField type="email" placeholder="Email address" icon={<span className="material-icons">mail</span>} />
        <InputField type="password" placeholder="Password" icon={<span className="material-icons">lock</span>} />
        <InputField type="password" placeholder="Confirm Password" icon={<span className="material-icons">lock</span>} />

        <button type="submit" className="login-button">Sign Up</button>
      </form>

      <p className="signup-prompt">
        Already have an account? <a href="#" onClick={onToggle} className="signup-link">Log in</a>
      </p>
    </div>
  )
}

Signup.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Signup; 