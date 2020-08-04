import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import ShareButton from '../components/ShareButton/ShareButton';

const Foods = () => (
  <div>
    <Header />
    <SearchBar />
    <RenderFoods />
    <ShareButton />
    <Header />
    <Footer />
  </div>
);

export default Foods;
