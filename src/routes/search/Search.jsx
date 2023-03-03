import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import UseFetchData from '../../hook/useFetchData'
import Container from '../../utilis/Container'
import './Search.scss'

function Search() {
    const [filterResult, setFilterResult] = useState([])
    const productResult = useParams()
    const [data] = UseFetchData(`/products/?title=${productResult.productName}`)

    if (filterResult.length > 0) {
        data = filterResult
      }
  return (
    <section className='search__wrap'>
        <Container>
        <div className="search__result--wrapper">
          {data.map((searchItem) => (
            <div key={searchItem.id} className="search__item--wrapper">
              <Link to={`/products/${searchItem.id}`}>
                <img width={350} src={searchItem.images?.at(0)} alt="" />
                <h2>{searchItem.title}</h2>
              </Link>
              <div className="search__card--info">
                <p>{searchItem.description}</p>
                <strong>${searchItem.price}</strong>
                <button className="btn__card--product">Add to card</button>
              </div>
            </div>
          ))}
        </div>
        </Container>
    </section>
  )
}

export default Search