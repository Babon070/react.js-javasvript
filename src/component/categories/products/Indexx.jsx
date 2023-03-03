import React from 'react';
import UseFetchData from '../../../hook/useFetchData';
import { Link } from 'react-router-dom';
import Container from '../../../utilis/Container';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Index = () => {
    // const [data] = UseFetchData('/categories?offset=0&limit=6')

    const [data] = UseFetchData('/products?offset=0&limit=6')
    const [products] = UseFetchData('/products')
    
    return (
        <section>
             <Container>
                <div className='categories__wrap'>
                    <div className='categories__wrap--title'>
                        <h2>Score these trending kicks</h2>
                        <span>
                            <Link to='/allproducts' className='link__see--all'>
                                See all products
                            </Link>
                            <AiOutlineArrowRight/>
                            </span>
                    </div>
                    
                    <div  className='main__category'>
                       {
                            data.map(category => 
                                <div  key={category.id} className='category__card'>
                                    <Link key={category.id} className='category__link' to={`/products/${category.id}`}>
                                        <div  key={category.id}>
                                           <img className='category__img' src={category.images} alt="" />
                                        </div>
                                        <h3>{category.name}</h3>
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

export default Index;
