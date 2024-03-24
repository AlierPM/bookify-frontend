import { loginSuccess, loginFailure } from '../reducers/authSlice';
import axios from 'axios';

export const loginUser = (email, pwd) => async dispatch => {
  const response = await axios.post('http://localhost:3000/api/v1/auth/sign_in', { 
    email: email,
    password: pwd
  });
  if (response.status !== 200) {
    dispatch(loginFailure(response.data.errors));
    return;
  }
  const userId = response.data.data.id;
  dispatch(loginSuccess(userId));
};
