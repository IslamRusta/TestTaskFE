import firebase from 'firebase';
import { Response } from '../utils/firebase';
import { responseFormatter } from '../utils/firebase';
import { addValueToLocalStorage } from '../utils/localStorage';

const actionCodeSettings = {
  url: 'http://localhost:3000/',
  handleCodeInApp: true,
};

class FirebaseService {
  async signUp(email: string, referralCode?: string): Promise<Response> {
    try {
      await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
      addValueToLocalStorage('email', email);
      if (referralCode) {
        addValueToLocalStorage('referralCode', referralCode);
      }
      return responseFormatter(true, 'Check your email for the sign up link');
    } catch (error) {
      return responseFormatter(false, error.message);
    }
  }
}

export default new FirebaseService();
