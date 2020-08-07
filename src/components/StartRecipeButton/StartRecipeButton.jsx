import React from 'react';
import {Link} from 'react-router-dom'

class StartRecipeButton extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const qual = document.URL.slice(22, 29)
    const num = document.URL.slice(30)
    return (
      <Link to={`/${qual}/${num}/in-progress`}>
        <button data-testid="start-recipe-btn" style={{ position: 'fixed', bottom: 0 }}>iniciar receita</button>
      </Link>
    );
  }
}

export default StartRecipeButton;
