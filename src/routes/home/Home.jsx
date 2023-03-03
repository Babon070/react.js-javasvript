import React from 'react';
import Add from '../../component/add/Add';
import CategoriesProd from '../../component/categories/categoiesProd/CategoriesProd';
import CategoriesHeader from '../../component/categories/categories-header/Categories_Header';
import Indexx from '../../component/categories/products/Indexx';
import Footer from '../../component/footer/Footer';
import MainProduct from '../../component/main-product/Main-Product';
import Products from '../../component/products/Products'
import Categor from '../../component/categories/categories-item/Categor';
// import Search from '../../component/search/Search';


const Home = () => {
    return (
        <>
            <main>
                <Categor/>
                <CategoriesHeader/>
                <Add/>
                <CategoriesProd/>
                <Indexx/>
                <MainProduct/>
                <Add/>
                <Products/>
                <Footer/>
            </main> 
        </>
    );
}

export default Home;
