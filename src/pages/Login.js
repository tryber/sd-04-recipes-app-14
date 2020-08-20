import PropTypes from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
      <div className="text-center">
        <form className="form-signin">
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          {/* <label className="sr-only" htmlFor="email">
            E-mail
          </label> */}
          <input
            className="form-control"
            onChange={this.handleEmail}
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            data-testid="email-input"
            required
            pattern="[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}"
          />
          {/* <label htmlFor="senha">Senha:</label> */}
          <input
            className="form-control"
            onChange={this.handlePassword}
            data-testid="password-input"
            type="password"
            name="senha"
            required
            placeholder="Senha"
            minLength="6"
          />
          <Link to="/comidas">
            <button
              disabled={!this.state.email || !this.state.password}
              type="button"
              onClick={() => this.handleSubmit()}
              data-testid="login-submit-btn"
              className="btn btn-lg btn-primary btn-block"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
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
