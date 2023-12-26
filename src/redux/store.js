import { configureStore } from '@reduxjs/toolkit';

import myContactsReducer from './myContacts/myContacts';

export const store = configureStore({
  reducer: {
    myContacts: myContactsReducer,
  },
});
