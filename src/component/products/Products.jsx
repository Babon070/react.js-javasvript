import React from 'react';
import UseFetchData from '../../hook/useFetchData';
import Container from '../../utilis/Container';
import './Products.scss'
import { Link } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Products = () => {
    const [data] = UseFetchData('/products?offset=10&limit=5')
    return (
        <section>
            <Container>

           
                        
                <div className='product__wrap'>
                    <div className='categories__wrap--title'>
                        <h2>Score these trending kicks</h2>
                        <span>
                            <Link to='/products' className='link__see--all'>
                                See all 
                            </Link>
                            <AiOutlineArrowRight/>
                            </span>
                    </div>
                    <div className='main'>
                    {
                        data.map(products => 
                        <div  key={products.id} className='main__product'>
                            <Link key={products.id} className='main__product--link' to={`/products/${products.id}`}>
                                <div className='wrap__img'  key={products.id}>
                                   <img className='category__img' src={products.images} alt="" />
                                </div>
                                <h3>${products.price}</h3>
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

export default Products;
