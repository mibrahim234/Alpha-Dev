import React from 'react';
// import { useQuery } from '@apollo/client';f
import { Link } from 'react-router-dom';

// make pages for company and developers 
// need to add responsiveness 

const Home = () => {
    return (
        
        <div>
            
            <h1>We connect companies eager to succeed with talented developers! </h1>

            <h1>Matching talent with Opportunity.</h1>

            <button className="btn m-3"> <Link to="/developers">Companies - Find Talent</Link></button>

            <button className="btn m-3"><Link to="/companies">Developers - Find An Opportunity</Link></button>
          </div>

    )
  };



export default Home;
