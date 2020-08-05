import React from 'react';
import ShareIcon from '../../images/shareIcon.svg';

const ShareButton = () => {
  const copy = () => {
    const textToCopy = document.querySelector('#text-to-copy');
    textToCopy.select();
    document.execCommand('copy');
    console.log('copiou')
    alert('Link copiado!');
  };
  return (
    <div>
      <input
        type="text"
        value={document.URL}
        id="text-to-copy"
        readOnly
        style={{ display: 'none' }}
      />
      <input
        data-testid="share-btn"
        type="image"
        src={ShareIcon}
        alt="Share icon"
        onClick={() => copy()}
      />
    </div>
  );
};

export default ShareButton;
