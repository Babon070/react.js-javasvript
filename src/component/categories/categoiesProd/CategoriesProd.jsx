import React from 'react';
import UseFetchData from '../../../hook/useFetchData';
import Container from '../../../utilis/Container';
import '../categoiesProd/CategoriesProd.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom';




const CategoriesProd = () => {


    const [data] = UseFetchData('/categories?offset=0&limit=6')

    return  (
        <section>
            <Container>
                <div className='categories__wrap'>
                    <div className='categories__wrap--title'>
                        <h2>Score these trending kicks</h2>
                        <span>
                            <Link to='/allcategories' className='link__see--all'>
                                See all categories
                            </Link>
                            <AiOutlineArrowRight/>
                            </span>
                    </div>

                    <div  className='main__category'>
                       {
                            data.map(category => 
                                <div  key={category.id} className='category__card'>
                                    <Link key={category.id} className='category__link' to={`/categories/${category.id}`}>
                                        <div  key={category.id}>
                                           <img className='category__img' src={category.image} alt="" />
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

export default CategoriesProd;
