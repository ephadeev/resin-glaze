import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Cart from './Components/Cart/Cart';
import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Route path='/'>
        <Main />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/cart/:index' component={CartPage} />
      <Route path='/search'>
        <Search />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
