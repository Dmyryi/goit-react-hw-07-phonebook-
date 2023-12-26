export const getContacts = state =>
  state.myContacts ? state.myContacts.items : [];

export const getFilter = state =>
  state.myContacts ? state.myContacts.filter : '';

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  // Check if filter is defined before converting to lowercase
  const normalizedFilter = filter ? filter.toLowerCase() : '';

  if (!contacts) {
    return [];
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
