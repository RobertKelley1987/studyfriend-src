import { api } from './api';

export const getSession = async () => {
    return await api.get('/users/session');
}

export const signUpUser = async (email, password) => {
    const { data } = await api.post('/users/signup', { email, password });
    return data;
}

export const logInUser = async (email, password) => {
    const { data } = await api.post('/users/login', { email, password });
    return data;
}

export const logOutUser = async () => {
    return await api.post('/users/logout');
}

