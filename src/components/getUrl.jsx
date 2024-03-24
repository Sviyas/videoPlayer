import { useState } from 'react';
import '../../stylesheets/userInput.css';

export default function GetUrlFUser({ showForm, getForm }) {
  // ? store the initial state
  const [name, setName] = useState('');

  const [url, setUrl] = useState('');

  const profileName = event => {
    setName(event.target.value);
  };

  const urlValue = event => {
    setUrl(event.target.value);
  };

  const getUserform = () => {
    getForm({ profile: name, url });

    // ? close the form also
    showForm(false);
  };

  return (
    <div className='user-i'>
      <p id='close-btn' onClick={() => showForm(false)}>
        &times;
      </p>
      <input
        type='text'
        id='profile-n'
        placeholder='Name'
        onChange={profileName}
        autoCorrect='off'
        style={{ textDecoration: 'none' }}
      />
      <input
        type='text'
        id='url-q'
        placeholder='Url'
        onChange={urlValue}
        autoCorrect='off'
        style={{ textDecoration: 'none' }}
      />
      <button type='button' id='create-btn' onClick={() => getUserform()}>
        Add
      </button>
    </div>
  );
}
