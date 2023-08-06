import { api } from './api';

const categoryURL = userId => `/users/${userId}/categories`

export const getCategories = async userId => {
    return await api.get(categoryURL(userId));
}

export const getCategory = async (userId, categoryId) => {
    return await api.get(`${categoryURL(userId)}/${categoryId}`);
}

export const createCategory = async (userId, name) => {
    const { data } = await api.post(`${categoryURL(userId)}`, { name });
    return data;
}

export const deleteCategory = async (userId, categoryId) => {
    const { data } = api.delete(`${categoryURL(userId)}/${categoryId}`);
    return data;
}

export const updateCategory = async (userId, categoryId, updatedName) => {
    const { data } = await api.put(`${categoryURL(userId)}/${categoryId}`, { name: updatedName });
    return data;
}