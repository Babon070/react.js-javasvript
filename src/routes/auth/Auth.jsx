import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../utilis/Container';
import { Switch, Route } from 'react-router-dom';
import Login from './sign/Login';
import Register from './register/Register';


const Auth = () => {
    return (
        <section>
           <div className='auth'>
                <ul>
                    <li>
                        <NavLink activeClassName='active__link' className="auth__popup--link" to="/auth/register">
                            Registratsia
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active__link' className="auth__popup--link" to="/auth/login">
                            Kirish
                        </NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/auth/register" component={Register}/>
                    <Route path="/auth/login" component={Login}/>
                </Switch>
           </div>
        </section>
    );
}

export default Auth;
