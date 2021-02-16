import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import {getProducts} from './Redux/actions/products-actions';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import ProductPage from './Components/Products/ProductPage';
import Search from './Components/Search/Search';
import Cms from './Components/Cms/Cms';
import Authentication from './Components/Authentication/Authentication';
import Footer from './Components/Footer/Footer';

const App = ({getProducts, authorizedUser}) => {
    useEffect(() => getProducts(), []);

    return (
        <div className="App">
            <Header />
            <Nav />
            <Route exact path='/'>
                <Main />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
            <Route exact path='/products'>
                <Products />
            </Route>
            <Route path='/products/:index' component={ProductPage} />
            <Route exact path='/search'>
                <Search />
            </Route>
            <Route exact path='/cms'>
                {!authorizedUser ? <Redirect to='/authentication' /> : <Cms />}
            </Route>
            <Route exact path='/authentication'>
                {authorizedUser ? <Redirect to='/cms' /> : <Authentication />}
            </Route>
            <Footer />
        </div>
    );
};

App.propTypes = {
    getProducts: PropTypes.func,
    authorizedUser: PropTypes.object
};

const mapStateToProps = state => {
    return {
        authorizedUser: state.cms.authorizedUser,
    }
};

const mapDispatchToProps = {
    getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
