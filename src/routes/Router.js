import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Auth from './auth/Auth';
import Products from './products/Products';
import Categories from './categories/Categories';
import AllProducts from './all-products/AllProducts';
import AllCategories from './all-categories/AllCategories';
import Header from '../component/header/Header';
import Search from './search/Search';

const Routes = () => {
    return (
        <>
        <Header/>
         <Switch>
            <Route path='/home' component={Home} />
            <Route path='/auth' component={Auth} />
            <Route path='/products/:id' component={Products} />
            <Route path='/categories/:id' component={Categories} />

            <Route path='/allcategories' component={AllCategories} />
            <Route path='/allproducts' component={AllProducts} />
            <Route path="/search/:productName" component={Search} />


       </Switch>
        </>
      
    );
}

export default Routes;
