import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import Footer from '../components/Footer/Footer';

const ExploreFoodOrigin = ({ search }) => {
  return (
    <div>
      <Header search={search} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.buildSearchBtnReducer.isShow,
});

ExploreFoodOrigin.propTypes = {
  search: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ExploreFoodOrigin);
