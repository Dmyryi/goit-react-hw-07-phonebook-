import { combineReducers, createReducer, createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperation';

const item = createReducer([], builder => {
  builder.addCase(fetchContacts.fulfilled, (_, action) => action.payload);
});

const isLoading = createReducer(false, builder => {
  builder
    .addCase(fetchContacts.pending, () => true)
    .addCase(fetchContacts.fulfilled, () => false)
    .addCase(fetchContacts.rejected, () => false);
});

const error = createReducer(null, builder => {
  builder
    .addCase(fetchContacts.rejected, (_, action) => action.payload)
    .addCase(fetchContacts.pending, () => null);
});

export default combineReducers({
  item,
  isLoading,
  error,
});
