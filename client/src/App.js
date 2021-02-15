import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import {getProducts} from './Redux/actions/products-actions';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Cart from './Components/Cart/Cart';
import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';

const App = ({getProducts}) => {
    useEffect(() => getProducts(), []);

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
            <Route path='/products'>
                <Products />
            </Route>
            <Route path='/cart/:index' component={ProductPage} />
            <Route path='/search'>
                <Search />
            </Route>
            <Footer />
        </div>
    );
};

App.propTypes = {
    getProducts: PropTypes.func
};

const mapDispatchToProps = {
    getProducts
};

export default connect(null, mapDispatchToProps)(App);
