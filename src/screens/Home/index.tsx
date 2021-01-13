import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { Box, Button, CircularProgress } from '@material-ui/core';
import referralServiceAPI from '../../services/api';
import { clearLocalStorage, getValueFromLocalStorage } from '../../utils/localStorage';
import './styles.css';

function Home() {
  const history = useHistory();
  const [user, setUser] = useState<Record<string, unknown>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUserData = async (email: string) => {
      const referralCode = getValueFromLocalStorage('referralCode');
      setLoading(true);
      const response = await referralServiceAPI.signIn(email, referralCode);
      setLoading(false);
      if (response.success) {
        setUser(response.body);
      } else {
        history.push('/');
      }
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user && user.email) {
        getUserData(user.email);
      }
      clearLocalStorage();
    });
  }, []);

  const logoutHandler = async () => {
    try {
      await firebase.auth().signOut();
      clearLocalStorage();
    } finally {
      history.push('/');
    }
  };

  if (loading) {
    return (
      <Box className="home__box">
        <h1>Loading data from our servers...</h1>
        <CircularProgress className="loader" />
      </Box>
    );
  }

  return (
    <Box className="home__box">
      {
        user ? (
          <Box className="home__box">
            <h1>Welcome, {user.email}</h1>
            <h2>Invited users: {user.invited}</h2>
            <h2>Your referral code: {user.referralCode}</h2>
          </Box>
        ) : (
          <Box className="home__box">
            <h1>Loading data from external service...</h1>
            <CircularProgress className="loader" />
          </Box>
        )
      }
      <Button onClick={logoutHandler} type="submit" variant="contained" color="secondary">
        Logout
      </Button>
    </Box>
  );
}

export default Home;
