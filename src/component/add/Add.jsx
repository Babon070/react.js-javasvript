import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../utilis/Container';
import './Add.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import logo from '../../asset/div.svg'
import useFetchData from '../../hook/useFetchData'

const Add = () => {

    const [data] = useFetchData('/products?offset=10&limit=4')

    return (
        <section>
            <Container>
                <Link to='/products'>
                   <div className='add__wrap'>
                        <div className='add__wrap--left'>
                            <span className='span'>Featured</span>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <h3>Deals made easy all year long.</h3>
                            <p>Free shipping. Best prices.</p>

                            <button>
                            Get your thing
                            <span><AiOutlineArrowRight/></span>
                            </button>
                        </div>

                        <div className='add__wrap--right'>
                            <div className='wrapper'>
                                {
                                    data.map(product => 
                                        <div key={product.id} className='main__img-wrap'>
                                            <Link id="RouterNavLink" to={`/products/${product.id}`} className='link__wrap'>
                                              <div>
                                                    <img className='img' src={product.images} alt="" />
                                              </div>
                                            </Link>
                                        </div>
                                            
                                        )
                                }
                            </div>
                        </div>
                   </div>
                </Link>
            </Container>
        </section>
    );
}

export default Add;
