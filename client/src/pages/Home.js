import React from 'react';
// import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';



const Home = () => {
    return (
        
        <div>
            <h1 className='page-title m-2 py-5'>Welcome to AlphaDev! <br></br>We connect companies eager to succeed with talented developers. </h1>

            <img src="/images/developer.jpg" alt="Developer Working on code" className='mb-4'/>

            <div className="container flex-row justify-space-between justify-center align-center">
              {Auth.loggedIn() ? (
                <>
                  {/* <button className="btn1 m-4 py-3"> <Link to="/companies">Companies - Find Talent</Link></button> */}

                  <button className="btn1 m-3 py-3"><Link to="/developers">Developers - Find An Opportunity</Link></button>
                </>
              ) : (
                <></>
              )}

              
            </div>

            <h1 className='page-title m-4'>Matching talent with Opportunity.</h1>

            <img src="/images/shakinghand.jpg" alt="Boss Shaking Hand, representing opportunity" className='mb-4'/>

           
        </div>

    )
  };



export default Home;
