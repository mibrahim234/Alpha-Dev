import React from "react";

const Companies = () => {
    return (
        <div>
            
            <p>Please answer the following questions to help us determine the right opportunities for you!  </p>

            <p>Question 1: What type of freelance developer are you? </p>
            <select className="answers">
                <option value="FrontEnd">Front End</option>
                <option value="Backend">Back End</option>
                <option value="checkbox">Full Stack</option>
            </select>

            <p>Question 2: What development languages do you use? </p>
            <select className="answers">
                <option value="checkbox">HTML + CSS</option>
                <option value="checkbox">Javascript</option>
                <option value="checkbox">React</option>
                <option value="checkbox">Python</option>
            </select>

            <p>Question 3: When are you available to start working? </p>
            <select className="answers">
                <option value="checkbox">Immediately</option>
                <option value="checkbox">One To Two Weeks</option>
                <option value="checkbox">One Month</option>
                <option value="checkbox">3 Months</option>
            </select>

            <p>Question 4: What level of commitment are you looking for? </p>
            <select className="answers">
                <option value="checkbox">Full Time</option>
                <option value="checkbox">Part Time</option>
                <option value="checkbox">Hourly</option>
                <option value="checkbox">I'll Decide Later</option>
            </select>

            <p>Question 5: When do you need the developer to start? </p>
            <select className="answers">
                <option value="checkbox">Immediately</option>
                <option value="checkbox">One To Two Weeks</option>
                <option value="checkbox">One Month</option>
                <option value="checkbox">I'll Decide Later</option>
            </select>
            
        </div>
    );
};

export default Companies;

