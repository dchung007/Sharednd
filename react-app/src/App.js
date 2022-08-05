import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import SpotsList from './components/SpotsList';
import CreateSpot from './components/CreateSpot';
import CreateImage from './components/CreateImage';
import SpotDetails from './components/SpotDetails';
import EditSpot from './components/EditSpot';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/spots/new' exact={true}>
          <CreateSpot />
        </ProtectedRoute>
        <ProtectedRoute path='/spots/:spotId' exact={true}>
          <SpotDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/spots/:spotId/edit' exact={true}>
          <EditSpot />
        </ProtectedRoute>
        <ProtectedRoute path='/spots/:spotId/images/new' exact={true}>
          <CreateImage />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <SpotsList />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
