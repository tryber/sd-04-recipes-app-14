import React from 'react';
import copia from 'clipboard-copy';
import ShareIcon from '../../images/shareIcon.svg';

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copiado: false,
    };
    this.copy = this.copy.bind(this);
  }

  copy() {
    copia(document.URL);
    // const copiado = this.state.copiado;
    this.setState({ copiado: true });
  }

  render() {
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
          onClick={() => this.copy()}
        />
        {this.state.copiado && <span>Link copiado!</span>}
      </div>
    );
  }
}

export default ShareButton;
