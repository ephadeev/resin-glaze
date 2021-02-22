import React, {useEffect} from 'react';
import 'materialize-css';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import {getProducts} from './Redux/actions/products-actions';
import {getOrders} from './Redux/actions/cms-actions';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Orders from './Components/Cms/Orders';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Products from './Components/Products/Products';
import ProductPage from './Components/Products/ProductPage';
import Search from './Components/Search/Search';
import Cms from './Components/Cms/Cms';
import Authentication from './Components/Authentication/Authentication';
import Footer from './Components/Footer/Footer';
import { AuthContext } from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';

const App = ({getProducts, totalAmount, getOrders}) => {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    
    useEffect(() => getProducts(), []);
    useEffect(() => {
        if (isAuthenticated) {
            getOrders();
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <>
                <Header />
                {/*<Route exact path='/'>
                    <Main />
                </Route>*/}
                <Route exact path='/cart'>
                    <Cart />
                </Route>
                <Route exact path='/checkout'>
                    {totalAmount === 0 ? <Redirect to='/cart' /> : <Checkout />}
                </Route>
                <Route exact path={['/', '/products']}>
                    <Products />
                </Route>
                <Route path='/products/:index' component={ProductPage} />
                <Route exact path='/search'>
                    <Search />
                </Route>
                <Route exact path='/cms'>
                    {!isAuthenticated ? <Redirect to='/authentication' /> : <Cms />}
                </Route>
                <Route exact path='/orders'>
                    {!isAuthenticated ? <Redirect to='/authentication' /> : <Orders />}
                </Route>
                <Route exact path='/authentication'>
                    {isAuthenticated ? <Redirect to='/cms' /> : <Authentication />}
                </Route>
                <Footer />
            </>
        </AuthContext.Provider>
    );
};

App.propTypes = {
    getProducts: PropTypes.func,
    totalAmount: PropTypes.number,
    getOrders: PropTypes.func
};

const mapStateToProps = state => {
    return {
        totalAmount: state.cart.totalAmount
    }
};

const mapDispatchToProps = {
    getProducts,
    getOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
