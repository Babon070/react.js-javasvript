import React from 'react'
import { useParams, Link  } from 'react-router-dom'
import UseFetchData from '../../hook/useFetchData'
import Container from '../../utilis/Container'
import "./AllProducts.scss"

export default function AllProducts() {

  // const categoryIdData = useParams()
  const [data] = UseFetchData(`/products`)
  function trimDescription(){
    return
  }
  return (
    <>
     <Container>
      <h1></h1>
        <div className='product'>
            {
              data.map(ele=> 
                <div className='product__item' key={ele.id}>
                                <Link to={`/products/${ele.id}`}>
                                   {
                                     ele.images?.at(0) && ele.images?.at(0).startsWith("https://")
                                     ? 
                                     <img  className='product__image' src={ele.images?.at(0)} alt="" />
                                     : 
                                     <img className='product__image' src='https://avatars.mds.yandex.net/i?id=74061e540998b0a7e99da029152a6c485dd1c0cb-8312178-images-thumbs&n=13'/>
                                   }
                                    <h3>{ele.title}</h3>
                                </Link>
                                <div className='product__info'>
                                    <div>
                                        <p>{ele.description}</p>
                                        <strong >${ele.price}</strong>
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
    </>
  )
}
