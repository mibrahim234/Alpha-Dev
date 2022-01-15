import React from 'react';
// import { useQuery } from '@apollo/client';f
import { Link } from 'react-router-dom';

// make pages for company and developers 
// need to add responsiveness 

const Home = () => {
    return (
        
        <div>


            <h1 className='page-title m-2 py-5'>Welcome to AlphaDev! <br></br>We connect companies eager to succeed with talented developers. </h1>

          <img src="/images/developer.jpg" alt="Developer Working on code" className='mb-4'/>

          <div className="container flex-row justify-space-between justify-center align-center">

          <button className="btn1 m-4 py-3"> <Link to="/developers">Companies - Find Talent</Link></button>

          <button className="btn1 m-3 py-3"><Link to="/companies">Developers - Find An Opportunity</Link></button>

          </div>

            <h1 className='page-title m-4'>Matching talent with Opportunity.</h1>

            <img src="/images/teamwork.jpg" alt="People working together" className='img1'/>

           
          </div>

    )
  };



export default Home;
