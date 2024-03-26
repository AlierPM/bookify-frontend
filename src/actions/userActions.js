import { registerError, registerUser, loginUser, loginError } from "../reducers/userReducer";
import axios from 'axios';

// user registration
export const userRegister = (userData) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:3000/api/v1/auth", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const result = await response.json();
        localStorage.setItem('access-token', response.headers.get('access-token'));
        localStorage.setItem('client', response.headers.get('client'));
        localStorage.setItem('uid', response.headers.get('uid'));
        dispatch(registerUser(result));
    }
    catch (error) {
        console.error('Error during registration:', error.message);
        dispatch(registerError(error.message));
    }
};

// user login
export const userLogin = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3000/api/v1/auth/sign_in", userData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        if (!response.status === 200) {
            throw new Error('Login failed');
        }

        const accessToken = response.headers['access-token'];
        const client = response.headers['client'];
        const uid = response.headers['uid'];

        localStorage.setItem('access-token', accessToken);
        localStorage.setItem('client', client);
        localStorage.setItem('uid', uid);
        
        dispatch(loginUser(response.data));
    }
    catch (error) {
        console.error('Error during login:', error.message);
        dispatch(loginError(error.message));
    }
};