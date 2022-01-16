// header/navbar
import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
// import auth file 

const Header = () => {

// execute the .logout() method, which will remove the token from localStorage and then refresh the application by taking the user back to the homepage.
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1 className='title mb-2 py-2'>AlphaDev</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              {/* <button className='btn m-4'> <Link to="/">Home</Link></button> */}
              <button className='btn m-4 py-2'> <Link to="/companies">Companies</Link></button>
              <button className='btn m-4 py-2'> <Link to="/devolopers">Developers</Link></button>

              <button className='btn m-4 py-2'> <Link to="/" onClick={logout}>Logout</Link></button>
            </>
          ) : (
            <>
             <button className='btn m-4 py-2'> <Link to="/login">Login</Link></button>
             <button className='btn m-4 py-2'>  <Link to="/signup">Signup</Link> </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
