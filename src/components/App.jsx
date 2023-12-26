import React from 'react';
import PhoneBookForm from './PhoneBook/PhoneBookForm';
import PhoneBookList from './PhoneBook/PhoneBookList';
import Filter from './Filter';

function App() {
  return (
    <div
      style={{
        width: '300px',
        padding: '20px',
        display: 'block',
      }}
    >
      <PhoneBookForm />
      <Filter />
      <PhoneBookList />
    </div>
  );
}

export default App;
