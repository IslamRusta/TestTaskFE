import networkClient from './networkClient';
import { Response } from '../utils/firebase';
import { responseFormatter } from '../utils/firebase';

class ReferralServiceAPI {
  async signIn(email: string, referralCode: string | Nothing): Promise<Response> {
    try {
      const response = await networkClient.post('/signin', { email, referralCode });
      return responseFormatter(true, 'Check you email for the sign up link', response.data as Record<string, unknown>);
    } catch (error) {
      return responseFormatter(false, 'Couldn\t sign up, try again later');
    }
  }
}

export type Nothing = null | undefined;

export default new ReferralServiceAPI();
