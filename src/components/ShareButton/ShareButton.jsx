import React from 'react';
import ShareIcon from '../../images/shareIcon.svg';

const ShareButton = () => {
  const copy = () => {
    const textToCopy = document.querySelector('#text-to-copy');
    textToCopy.select();
    document.execCommand('copy');
  };
  return (
    <div>
      <input type="text" value={document.URL} id="text-to-copy" readOnly />
      <button type="button" onClick={() => copy()} data-testid="share-btn">
        <img src={ShareIcon} alt="Share icon" />
      </button>
    </div>
  );
};

export default ShareButton;
