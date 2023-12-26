import React, { useEffect } from 'react';
import { deleteContacts } from '../../redux/contactShelf/contactsOperation';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors/selectors';
import { fetchContacts } from '../../redux/contactShelf/contactsOperation';

export default function PhoneBookList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContactsData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContactsData();
  }, [dispatch]);

  return (
    <div>
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <p>
              {item.name}: {item.phone}
            </p>
            <button onClick={() => dispatch(deleteContacts(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
