import React, { useState } from 'react';
import styles from './PhoneBookForm.module.css';

import { getVisibleContacts } from '../../redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactShelf/contactsOperation';
import { nanoid } from 'nanoid';

export default function PhoneBookForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleChangeNumber = evt => {
    setPhone(evt.currentTarget.value);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const normalizedName = name.toLowerCase();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      alert(`${name}: is already in contacts`);
      return;
    }

    try {
      // Assuming addContact is an asynchronous function that fetches data from the backend
      await dispatch(addContact({ id: nanoid(), name, phone }));
      reset();
    } catch (error) {
      console.error('Error adding contact:', error.message);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label class={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          required
        />
      </label>
      <label class={styles.label}>
        Number
        <input
          type="tel    "
          name="phone"
          value={phone}
          onChange={handleChangeNumber}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
