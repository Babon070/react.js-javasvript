import React, { Children, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../utilis/Container';
import {FiShoppingCart} from 'react-icons/fi'
import {GrNotification} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'
import './Header.scss'
import useFetchData from '../../hook/useFetchData';
import instance from '../../api/instance';


const Header = () => {
    
    const [searchresult, setSearchResult] = useState([])
    const [searchValue, SetSearchValue] = useState('')
 
    function giveSearchProd(e) {
        SetSearchValue(e.target.value)

        instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
                .then(response => setSearchResult (response))
                .catch(err => console.log(err))
    }
    console.log(searchresult);

    function giveMoreResult(e) {
        e.preventDefault();

        window.location.pathname = `/search/${searchValue}`
    }


    const uslocation = useLocation()
    const [data] = useFetchData("/categories")

   
    return uslocation.pathname.includes('/auth') ? (<></>) : (
        <section>
            <Container>
               <div className='header__wrap'>
                    <div className='header__wrap--top'>
                        <div className='header__wrap--top-left'>
                            <ul className='header__wrap--top-left-firstUl'>
                                <li>
                                    Hi!
                                    &nbsp;
                                    <span>
                                    <Link to="/auth">
                                        Sign in
                                    </Link>
                                    </span>
                                    <span>
                                    &nbsp;
                                        or
                                        &nbsp;
                                        <Link to='/home'>
                                            register
                                        </Link>
                                    </span>
                                </li>
                                <li>Daily Deals</li>
                                <li>Brand Outlet</li>
                                <li>Help & Contact</li>
                            </ul>

                            <ul className='header__wrap--top-left-twoUl'>
                                <li>Sell</li>
                                <li>Watchlist
                                    <ul>
                                        <li></li>
                                    </ul>
                                </li>
                                <li>My eBay</li>
                                <li> <Link to='/notification' > <GrNotification/> </Link>  </li>
                                <li> <Link to='/shopping' className='icon-two'> < FiShoppingCart/> </Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='header__wrap--bottom'>
                        <div className='header__wrap--bottom-block'>
                            <ul className='header__wrap--bottom-block-ul'>
                                <li>
                                    <h1>
                                        <Link to='/home'>
                                            <img className='ebay__logo' src="https://purepng.com/public/uploads/large/purepng.com-ebay-logologobrand-logoiconslogos-251519938326w1a5t.png" alt="" />
                                        </Link>
                                    </h1>
                                </li>
                                <li><h2>Shop by <br/> category</h2></li>
                                <li>
                                    <form className='form' onSubmit={giveMoreResult}>
                                      
                                        <ul>
                                            <li>
                                                <input
                                                onChange={giveSearchProd}
                                                 type="text" 
                                                 placeholder='Search for anythin'
                                                 className='search__input'
                                                 />
                                                { searchresult?.length > 0 &&  searchValue ?  <div>

                                                    {
                                                        searchresult.map(item => 
                                                            <Link to={`/product/${item.id}`} className='search__item-link'>
                                                                <p>{item.title}</p>
                                                            </Link>
                                                            )
                                                    }

                                                 </div> : <></>}

                                                <span className='icon-span'>
                                                    <AiOutlineSearch/>
                                                </span>
                                            </li>
                                            <li>
                                                <div>
                                                    <select>
                                                        {
                                                            data.map((c,i) => 
                                                               <option  key={c.id} selected={true} >{c.name}</option>
                                                                )
                                                        }
                                                    </select>
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <button className='form__button' type='submit'>
                                                    Serach
                                                </button>
                                            </li>
                                            <li>
                                                <span>Advanced</span>
                                            </li>
                                        </ul>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
               </div>
            </Container>
        </section>
    );
}

export default Header;
