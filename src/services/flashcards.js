import { api } from './api';

const flashcardURL = (userId, categoryId) => `/users/${userId}/categories/${categoryId}/flashcards`;

export const getFlashcards = async (userId, categoryId) => {
    return await api.get(flashcardURL(userId, categoryId));
}

export const getFlashcard = async (userId, categoryId, flashcardId) => {
    return await api.get(`${flashcardURL(userId, categoryId)}/${flashcardId}`);
}

export const createFlashcard = async (userId, categoryId, flashcard) => {
    const { data } =  await api.post(flashcardURL(userId, categoryId), flashcard);
    return data;
}

export const updateFlashcardCompleted = async (userId, categoryId, flashcardId) => {
    return await api.put(`${flashcardURL(userId, categoryId)}/${flashcardId}/completed`);
}

export const resetAllFlashcards = async (userId, categoryId) => {
    return await api.put(flashcardURL(userId, categoryId));
}

export const updateFlashcard = async (userId, categoryId, flashcardId, updatedFlashcard) => {
    const { data } = await api.put(`${flashcardURL(userId, categoryId)}/${flashcardId}`, updatedFlashcard);
    return data;
}

export const deleteFlashcard = async (userId, categoryId, flashcardId) => {
    const { data } = api.delete(`${flashcardURL(userId, categoryId)}/${flashcardId}`);
    return data;
}