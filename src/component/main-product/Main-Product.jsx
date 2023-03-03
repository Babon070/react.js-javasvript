import React from 'react';
import './MainProduct.scss'
import Container from '../../utilis/Container';
import UseFetchData from '../../hook/useFetchData';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const MainProduct = () => {

    const [products] = UseFetchData('/products?offset=10&limit=6')

    return (
        <section>
            <Container>
            <div className='categories__wrap'>
                    <div className='categories__wrap--title'>
                        <h2>Extra 20% off for Presidents' Day</h2>
                        <span>
                            <Link className='link__see--all' to='/products'>
                                See all
                            </Link>
                            <AiOutlineArrowRight/>
                        </span>
                    </div>
                    <div className='main__category'>
                       {
                            products.map(products => 
                                <div  key={products.id} className='category__card'>
                                    <Link key={products.id} className='category__link' to={`/products/${products.id}`}>
                                        <div  key={products.id}>
                                           <img className='category__img' src={products.images} alt="" />
                                        </div>
                                        <h3>{products.title}</h3>
                                    </Link>
                                </div>
                                )
                        }
                    </div>
                       
                </div>
            </Container>
        </section>
    );
}

export default MainProduct;
