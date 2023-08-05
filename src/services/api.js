import axios from 'axios';

const productionUrl = '/api';

export const api = axios.create({ baseURL: productionUrl });