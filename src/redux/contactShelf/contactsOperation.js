import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://65834a664d1ee97c6bcdc8b8.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const contacts = await axios.get('/contacts');
    console.log('Contacts from API:', contacts);
    return contacts.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async () => {
  try {
    const contacts = await axios.post('/contacts');
    // console.log('Contacts from API:', contacts);
    return contacts.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
});

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const contacts = await axios.delete(`contacts/${contactId}`);
      console.log('Contacts from API:', contacts);
      return contacts.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
);
