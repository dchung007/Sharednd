import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import './LoginForm.css'

const LoginForm = ({ hideModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoEmail = 'demo@email.com';
  const demoPassword = 'password';

  const demoLogin = async (e) => {
    await dispatch(login(demoEmail, demoPassword))
  }




  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    hideModal()
    // return <Redirect to='/' />;
  }

  return (
    <div>
      <form className='login-form' onSubmit={onLogin}>
        <div className='form-title'>
          <h1>
            Welcome to Sharednd
          </h1>
          <h4>
            Login now!
          </h4>
        </div>
        <ul className='login-form-list'>
          <div className='errors-list'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <li>
            <label htmlFor='email'>Email<span className="required">*</span>
              <input
                className="field-login"
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </label>
          </li>
          <li>
            <label htmlFor='password'>Password<span className="required">*</span>
              <input
                className="field-login"
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
            </label>
          </li>
          <li className='login-button'>
            <button className='login-button' type='submit'>Login</button>
          </li>
        </ul>
      </form>
      <div>
        <button className='demo-button-login' onClick={demoLogin}>Log in with Demo User</button>
      </div>
    </div>
  );
};

export default LoginForm;
