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



// return different navigation items depending on the outcome of the Auth.loggedIn().
//  If it returns true, and we're logged in, we want to display navigation items tailored to the user.
// If it returns false, we'll display the default items for logging in and signing up.

// need to add resposiveness to buttons 
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>AlphaDev</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <button className='btn m-4'> <Link to="/">Home</Link></button>
              <button className='btn m-4'> <Link to="/companies">Companies</Link></button>
              <button className='btn m-4'> <Link to="/devolopers">Developers</Link></button>

              <button className='btn m-4'> <Link to="/" onClick={logout}>Logout</Link></button>

              {/* <a href="/" onClick={logout}>
                Logout
              </a> */}
            </>
          ) : (
            <>
             <button className='btn m-4'> <Link to="/login">Login</Link></button>
             <button className='btn m-4'>  <Link to="/signup">Signup</Link> </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
