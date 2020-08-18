import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmail } from '../actions/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    const RegEx = /[A-Z0-9]{1,}@[A-Z0-9]{2,}.[A-Z0-9]{2,}/i;
    if (RegEx.test(event.target.value)) {
      this.setState({
        email: event.target.value,
      });
    }
  }

  handlePassword(event) {
    if (event.target.value.length > 6) {
      this.setState({
        password: event.target.value,
      });
    }
    return null;
  }

  handleSubmit() {
    console.log('test', this.state.email);
    const email = this.state.email;
    const user = { email: this.state.email };
    localStorage.mealsToken = '1';
    localStorage.cocktailsToken = '1';
    localStorage.user = JSON.stringify(user);
    this.props.getEmail1(email);
    // event.preventDefault();
  }

  render() {
    return (
      <form>
        <h3>Login</h3>
        <label htmlFor="email">
          E-mail
          <input
            onChange={this.handleEmail}
            type="email"
            name="email"
            data-testid="email-input"
            required
            pattern="[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            onChange={this.handlePassword}
            data-testid="password-input"
            type="password"
            name="senha"
            required
            minLength="6"
          />
        </label>
        <Link to="/comidas">
          <button
            disabled={!this.state.email || !this.state.password}
            type="button"
            onClick={() => this.handleSubmit()}
            data-testid="login-submit-btn"
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  getEmail1: PropTypes.func.isRequired,
};

const mapDispacthToProps = (dispatch) => ({
  getEmail1: (email) => dispatch(getEmail(email)),
});

export default connect(null, mapDispacthToProps)(Login);
