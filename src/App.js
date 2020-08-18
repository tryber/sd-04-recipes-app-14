import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import * as Pages from './pages/index';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/comidas/:id/in-progress" component={Pages.FoodInProgress} />
        <Route exact path="/comidas/:id" component={Pages.FoodDetail} />
        <Route exact path="/comidas" component={Pages.Foods} />
        <Route exact path="/bebidas/:id/in-progress" component={Pages.DrinkInProgress} />
        <Route exact path="/bebidas/:id" component={Pages.DrinkDetail} />
        <Route exact path="/bebidas" component={Pages.Drinks} />
        <Route exact path="/explorar/comidas/ingredientes" component={Pages.ExploreFoodIngredients} />
        <Route exact path="/explorar/comidas/area" component={Pages.ExploreFoodOrigin} />
        <Route exact path="/explorar/comidas" component={Pages.ExploreFood} />
        <Route exact path="/explorar/bebidas/ingredientes" component={Pages.ExploreDrinksIngredients} />
        <Route exact path="/explorar/bebidas/area" component={Pages.ExploreDrinksOrigin} />
        <Route exact path="/explorar/bebidas" component={Pages.ExploreDrinks} />
        <Route exact path="/explorar" component={Pages.Explore} />
        <Route exact path="/perfil" component={Pages.Perfil} />
        <Route exact path="/receitas-feitas" component={Pages.DoneRecipes} />
        <Route exact path="/receitas-favoritas" component={Pages.FavoriteRecipes} />
        <Route exact path="/" component={Pages.Login} />
        <Route component={Pages.NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
