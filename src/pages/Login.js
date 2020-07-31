import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getFood from '../service';
import { fetchFoodApi, getEmail } from '../actions/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.storeApiRedux = this.storeApiRedux.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.storeApiRedux();
  }

  storeApiRedux() {
    getFood().then((data) => this.props.fetchFoodApi1(data));
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    const user = { email: this.state.email };
    localStorage.mealsToken = '1';
    localStorage.cocktailsToken = '1';
    localStorage.user = JSON.stringify(user);
    this.props.getEmail1(this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <h3>Login</h3>
        <label htmlFor="email">
          E-mail
          <input
            value={this.state.email}
            onChange={this.handleEmail}
            type="email"
            name="email"
            data-testid="email-input"
            required
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input data-testid="password-input" type="password" name="senha" required minLength="6" />
        </label>
        <Link>
          <button onClick={() => this.handleSubmit} data-testid="login-submit-btn">
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  fetchFoodApi1: PropTypes.func.isRequired,
  getEmail1: PropTypes.func.isRequired,
};

const mapDispacthToProps = (dispatch) => ({
  fetchFoodApi1: (data) => dispatch(fetchFoodApi(data)),
  getEmail1: (email) => dispatch(getEmail(email)),
});

export default connect(null, mapDispacthToProps)(Login);
