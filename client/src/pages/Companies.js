import React from "react";
import { Link } from 'react-router-dom';

const Companies = () => {
    return (


    
        <div>
            <h1 className="mb-2 py-2 title text-center">Let's Talk!</h1>
        <h2 className="mb-2 py-2 text-center"> Let us know what skills your company is looking for by answering the following questions.</h2>
           
           <div className="text-center mb-2 py-2 ">
                <p>Question 1: What role are you looking to hire? </p>
                <select className="answers mb-2 py-2">
                    <option value="checkbox">Front End</option>
                    <option value="checkbox">Back End</option>
                    <option value="checkbox">Full Stack</option>
                </select>

                <p className="mb-2 py-2">Question 2: What development languages are you looking to use? </p>
                <select className="answers mb-2 py-2">
                    <option value="checkbox">HTML + CSS</option>
                    <option value="checkbox">Javascript</option>
                    <option value="checkbox">React</option>
                    <option value="checkbox">Python</option>
                </select>

                <p className="mb-2 py-2">Question 3: How long would the project be for? </p>
                <select className="answers mb-2 py-2">
                    <option value="checkbox">Two Weeks or Less</option>
                    <option value="checkbox">One Month</option>
                    <option value="checkbox">Three Months</option>
                    <option value="checkbox">Six Months</option>
                </select>

                <p className="mb-2 py-2">Question 4: What level of commitment would you require from the developer? </p>
                <select className="answers mb-2 py-2">
                    <option value="checkbox">Full Time</option>
                    <option value="checkbox">Part Time</option>
                    <option value="checkbox">Hourly</option>
                    <option value="checkbox">I'll Decide Later</option>
                </select>

                <p className="mb-2 py-2">Question 5: When do you need the developer to start? </p>
                <select className="answers mb-2 py-2">
                    <option value="checkbox">Immediately</option>
                    <option value="checkbox">One To Two Weeks</option>
                    <option value="checkbox">One Month</option>
                    <option value="checkbox">I'll Decide Later</option>
                </select>
        </div>

        <div className="container flex-row justify-space-between justify-center align-center">
        <h2 className="mb-2 py-2"> Click Submit to discover your talent:</h2>

        <button className='submitbtn m-2 py-2'>  <Link to="/resComp">Submit</Link> </button>
                </div>

        </div>
    );
};

export default Companies;