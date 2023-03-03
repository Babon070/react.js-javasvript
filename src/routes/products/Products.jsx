import React from 'react';
import useFetchData from '../../hook/useFetchData';
import Container from '../../utilis/Container';
import { useParams } from 'react-router-dom';
import './Products.scss'
import { Link } from 'react-router-dom';

const Products = () => {

    const productsId = useParams()
    const [data] = useFetchData(`/products/${productsId.id}`)
    const [selectPrice] = useFetchData('/products?offset=0&limit=5')
  console.log(data);

    return (
        <section className='single__product'>
            <Container>
                <h2 className='title'>EXTRA <span>$10</span> OF 3+ ITEMS WITH CODE <span>100FF2023TECH</span></h2>
            <div className='single__product--wrapper'>
                    <img className='products__logo' width={500} src={data.images?.at(0)} alt="" />
                    <div className='single__wrap'>
                        <div className='title__product'>
                            <div className='title__product-head'>
                                <span>Condition: &nbsp;</span>
                                <h1>{data.title}</h1>
                            </div>
                            <div className='title__product-price'>
                                <span>Price:</span>
                                        <select>
                                                {
                                                     selectPrice.map((price,i) => 
                                                        <option  key={price.id} selected={true} >{price.price}</option>
                                                         )
                                                }
                                        </select>
                            </div>
                            <div className='title__product-desc'>
                                <span>Description:</span>
                                <p> {data.description}</p>                  
                            </div>
                           
                           
                            {/* <div className='title__product--btn-price'>
                                <div className='block'>
                                    <span>Price</span>
                                    <strong>${data.price}</strong> 
                                </div>
                                <Link className='btn__card--product'>Add to card</Link>
                            </div> */}
                        </div> <hr />

                        <div className='product__bottom'>
                            <div className='product__bottom--price'>
                                <div className='block'>
                                    <span>Price</span>
                                    <strong>${data.price}</strong> 
                                </div>
                                <div className='desc-p'>
                                    <Link to='/moreinfos' className='desc-link'>
                                             No Interest if paid in full in 6 <br /> mo on $99+*
                                    </Link>
                                </div>
                            </div>

                            <div className='product__bottom--btn'>
                                
                                <Link  className='btn__buy-buy'>
                                    Buy It Now
                                </Link>

                                <Link className='btn__buy-add'>
                                    Add to cart
                                </Link>
                                <Link className='btn__buy-watchlist'>
                                    Add to Watchlist
                                </Link>
                            </div>
                        </div>
                      
                    </div>
            </div>
            </Container>
        </section>
    );
}

export default Products;
