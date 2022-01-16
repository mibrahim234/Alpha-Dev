import React from "react";
import { Link } from 'react-router-dom';

const Developers = () => {
    return (



        <div>
            <h1 className="mb-2 py-2 title text-center">Let's Talk!</h1>
        <h2 className="mb-2 py-2 text-center"> Let us help you find the right opportunities! Answer the following questions!</h2>

        <div className="text-center mb-2 py-2 ">
            <p>Question 1: What type of freelance developer are you? </p>
            <select className="answers mb-2 py-2">
                <option value="FrontEnd">Front End</option>
                <option value="Backend">Back End</option>
                <option value="checkbox">Full Stack</option>
            </select>

            <p className="mb-2 py-2">Question 2: What development languages do you use? </p>
            <select className="answers mb-2 py-2">
                <option value="checkbox">HTML + CSS</option>
                <option value="checkbox">Javascript</option>
                <option value="checkbox">React</option>
                <option value="checkbox">Python</option>
            </select>

            <p className="mb-2 py-2">Question 3: What is your level of experience? </p>
            <select className="answers mb-2 py-2">
                <option value="checkbox">Entry-level</option>
                <option value="checkbox">Intermediate</option>
                <option value="checkbox">Mid-level</option>
                <option value="checkbox">Senior or Executive-level</option>
            </select>
        
            <p className="mb-2 py-2">Question 4: What level of commitment are you looking for? </p>
            <select className="answers mb-2 py-2">
                <option value="checkbox">Full Time</option>
                <option value="checkbox">Part Time</option>
                <option value="checkbox">Hourly</option>
                <option value="checkbox">I'll Decide Later</option>
            </select>
     
            <p className="mb-2 py-2">Question 5: When are you available to start working? </p>
            <select className="answers mb-2 py-2">
                <option value="checkbox">Immediately</option>
                <option value="checkbox">One To Two Weeks</option>
                <option value="checkbox">One Month</option>
                <option value="checkbox">3 Months</option>
            </select>
            </div>

            <div className="container flex-row justify-space-between justify-center align-center">
        <h2 className="mb-2 py-2"> Click Submit to discover your talent:</h2>

        <button className='submitbtn m-2 py-2'>  <Link to="/response">Submit</Link> </button>
                </div>

        </div>
    );
};

export default Developers;

