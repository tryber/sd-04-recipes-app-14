import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import * as Pages from './pages/index';
import store from './store/store';
// Testando na Master

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Pages.Login} />
        <Route exact path="/comidas/:id" component={Pages.FoodDetail} />
        <Route exact path="/bebidas/:id" component={Pages.DrinkDetail} />
        <Route exact path="/comidas" component={Pages.Foods} />
        <Route exact path="/bebidas" component={Pages.Drinks} />
        <Route exact path="/explorar" component={Pages.Explore} />
        <Route exact path="/perfil" component={Pages.Perfil} />
        {/* <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/> */}
      </Switch>
    </Provider>
  );
}

export default App;
