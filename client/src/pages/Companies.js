import React from "react";

const Companies = () => {
    return (
        <div>
            
            <p>Please answer the following questions to help us determine the right opportunities for you!  </p>

            <p>Question 1: What type of freelance developer are you? </p>
            <label className="answers">
                <input type="checkbox" />Front End
                <input type="checkbox" />Back End
                <input type="checkbox" />Full Stack
            </label>

            <p>Question 2: What development languages do you use? </p>
            <label className="answers">
                <input type="checkbox" />HTML + CSS
                <input type="checkbox" />Javascript
                <input type="checkbox" />React
                <input type="checkbox" />Python
            </label>

            <p>Question 3: When are you available to start working? </p>
            <label className="answers">
                <input type="checkbox" />Immediately
                <input type="checkbox" />One To Two Weeks
                <input type="checkbox" />One Month
                <input type="checkbox" />3 Months
            </label>

            <p>Question 4: What level of commitment are you looking for? </p>
            <label className="answers">
                <input type="checkbox" />Full Time
                <input type="checkbox" />Part Time
                <input type="checkbox" />Hourly
                <input type="checkbox" />I'll Decide Later
            </label>

            <p>Question 5: When do you need the developer to start? </p>
            <label className="answers">
                <input type="checkbox" />Immediately
                <input type="checkbox" />One To Two Weeks
                <input type="checkbox" />One Month
                <input type="checkbox" />I'll Decide Later
            </label>
            
        </div>
    );
};

export default Companies;

