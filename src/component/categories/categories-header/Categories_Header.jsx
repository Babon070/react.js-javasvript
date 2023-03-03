import React from 'react';
import Container from '../../../utilis/Container'
import logo from '../../../asset/div.png'
import './Categories.scss'
import { useLocation } from 'react-router-dom';


const CategoriesHeader = () => {
    const location = useLocation()
    return location.pathname.includes('/auth') ? (<></>) : (
        <section>
            <Container>
                <div className='category_header--wrap'>
                   
                    
                    <div>
                         <img className='category__head--logo' src={logo} alt="" />
                    </div>
                   
                </div>
            </Container>
        </section>
    );
}

export default CategoriesHeader;
