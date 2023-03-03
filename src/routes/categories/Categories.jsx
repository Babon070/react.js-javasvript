import React from 'react';
import UseFetchData from '../../hook/useFetchData';
import { Link, useParams } from 'react-router-dom';
import Container from '../../utilis/Container'
import './Categories.scss'

const Categories = () => {
    const categoryIdData = useParams();
    const [data] = UseFetchData(`/categories/${categoryIdData.id}/products`)
    console.log(data);

    function trimDescription(str){
        return 
    }
    return (
        <section>
           <Container>
                <div className='category__wrap'>
                    {
                        data.map( category => 

                            <div className='product__item' key={category.id}>
                                <Link to={`/products/${category.id}`}>
                                   {
                                     category.images?.at(0) && category.images?.at(0).startsWith("https://")
                                     ? 
                                     <img  className='product__image' src={category.images?.at(0)} alt="" />
                                     : 
                                     <img className='product__image' src='https://avatars.mds.yandex.net/i?id=74061e540998b0a7e99da029152a6c485dd1c0cb-8312178-images-thumbs&n=13'/>
                                   }
                                    <h3>{category.title}</h3>
                                </Link>
                                <div className='product__info'>
                                    <div>
                                        <p>{trimDescription(category.description)}</p>
                                        <strong >${category.price}</strong>
                                    </div>

                                    {/* <div className='heart-icon'>
                                        {likedProducts?.find(p => p?.id === product?.id) ? <BsFillSuitHeartFill onClick={() => removeFromProducts(product)} style={{color: "red"}} /> : <FiHeart onClick={()=> addToLike(product)} />}
                                    </div> */}
                                </div>
                                
                            </div>

                          
                            )
                    }
                </div>
           </Container>
        </section>
    );
}

export default Categories;
