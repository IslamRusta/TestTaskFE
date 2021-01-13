import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import firebase from 'firebase';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import { getValueFromLocalStorage } from './utils/localStorage';

function App() {
  const history = useHistory();

  useEffect(() => {
    const signInWithEmailLink = async (email: string) => {
      try {
        await firebase.auth().signInWithEmailLink(email, window.location.href);
        history.push('/home');
      } catch (error) {
        history.push('/');
      }
    };

    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      const email = getValueFromLocalStorage('email');
      if (email) {
        signInWithEmailLink(email);
      }
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
