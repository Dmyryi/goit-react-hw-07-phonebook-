// contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

import {
  addContact,
  fetchContacts,
  deleteContacts,
} from '../contactShelf/contactsOperation';

export const contactsSlice = createSlice({
  name: 'myContacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(
        fetchContacts.pending,
        addContact.pending,
        deleteContacts.pending,
        state => {
          state.isLoading = true;
        }
      )
      .addCase(
        fetchContacts.rejected,
        addContact.rejected,
        deleteContacts.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      )
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      });
  },
});

export const { updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
