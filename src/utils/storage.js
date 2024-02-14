// src/utils/storage.js

const STORAGE_KEY = 'contacts';

export const fetchContacts = () => {
  const contacts = localStorage.getItem(STORAGE_KEY);
  return contacts ? JSON.parse(contacts) : [];
};

export const saveContacts = (contacts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};
