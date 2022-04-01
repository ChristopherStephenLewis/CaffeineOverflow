import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>Sevla Studio</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/shopping'>Shopping</Link>
                    </li>
                    {!isLoggedIn  && (
                        <li>
                            <Link to='/auth'>Login</Link>
                        </li>
                    )}
                    
                    {isLoggedIn && (
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    )}

                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;