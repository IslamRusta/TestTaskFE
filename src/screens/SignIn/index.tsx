import React, { useState } from 'react';
import { TextField, Box, Button } from '@material-ui/core';
import { Response } from '../../utils/firebase';
import firebaseService from '../../services/firebase';
import './styles.css';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [referralCode, setReferralCode] = useState<string>('');
  const [response, setResponse] = useState<Response | null>(null);

  const onChangeEmailHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeReferralCodeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setReferralCode(event.target.value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await firebaseService.signUp(email, referralCode);
    setResponse(response);
  };

  return (
    <Box className="signin__box">
      <form className="signin__form" onSubmit={onSubmitHandler}>
        <TextField
          className="signin__form__input"
          error={!!response && !response?.success}
          onChange={onChangeEmailHandler}
          id="email"
          label="Email"
        />
        <TextField
          className="signin__form__input"
          onChange={onChangeReferralCodeHandler}
          id="referralCode"
          label="Referral Code (optional)"
        />
        <div className="signin__form__message">
          {
            response && <p className={response.success ? 'success__text' : 'error__text'}>{response.message}</p>
          }
        </div>
        <Button type="submit" variant="contained" color="primary" disabled={email.length === 0}>
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default SignIn;
