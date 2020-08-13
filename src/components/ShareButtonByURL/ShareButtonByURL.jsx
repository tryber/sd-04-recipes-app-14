import PropTypes from 'prop-types';
import React from 'react';
import copia from 'clipboard-copy';
import ShareIcon from '../../images/shareIcon.svg';

class ShareButtonByURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.copy = this.copy.bind(this);
  }

  copy() {
    const { URL } = this.props;
    copia(URL);
    // const copied = this.state.copied;
    this.setState({ copied: true });
  }

  render() {
    const { dataTestId } = this.props;
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
          data-testid={dataTestId}
          type="image"
          src={ShareIcon}
          alt="Share icon"
          onClick={() => {
            this.copy();
          }}
        />
        {this.state.copied && <span>Link copiado!</span>}
      </div>
    );
  }
}

ShareButtonByURL.propTypes = {
  URL: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ShareButtonByURL;
