import { createSelector } from 'reselect';

export const getMyContactsState = state => state.myContacts || {};
export const getContacts = state => getMyContactsState(state).items || [];
export const getFilter = state => getMyContactsState(state).filter || '';

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    // Фильтрация контактов
    const filteredItems = items.filter(item => {
      const itemName = item.name || '';
      return itemName.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredItems;
  }
);
