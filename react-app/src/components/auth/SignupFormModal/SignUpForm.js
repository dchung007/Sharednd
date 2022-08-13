import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, signUp } from '../../../store/session';
import './SignupForm.css'

const SignUpForm = ({ hideModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoEmail = 'demo@email.com';
  const demoPassword = 'password';

  const demoLogin = async (e) => {
    e.preventDefault()
    await dispatch(login(demoEmail, demoPassword))
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp(username, name, email, password, repeatPassword));
    if (data) {
      setErrors(data)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    hideModal()
    // return <Redirect to='/' />;
  }

  return (
    <div className='signup-form' >
      <form onSubmit={onSignUp}>
        <div className='form-title'>
          <h1>
            Welcome to Sharednd
          </h1>
          <h4>
            Sign up now!
          </h4>
        </div>
        <div className='signup-form-list'>
          <div className='errors-list'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>Username<span className="required">*</span></label>
            <input
              className="field-signup"
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Full Name<span className="required">*</span></label>
            <input
              className="field-signup"
              type='text'
              name='name'
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <div>
            <label>Email<span className="required">*</span></label>
            <input
              className="field-signup"
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Password<span className="required">*</span></label>
            <input
              className="field-signup"
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password<span className="required">*</span></label>
            <input
              className="field-signup"
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div>
            <button className='signup-button' type='submit'>Sign Up</button>
          </div>
          <div>
            <button
              type='button'
              className='demo-button-signup'
              onClick={demoLogin}>Log in with Demo User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
