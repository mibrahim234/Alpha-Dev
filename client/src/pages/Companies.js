import React from "react";

const Companies = () => {
    return (



        //handle sumbit -- on submit
        <div>

            <p>Please answer the following questions to help us determine the right talent for your company!  </p>

                <p>Question 1: What role are you looking to hire? </p>
                <select className="answers">
                    <option value="checkbox">Front End</option>
                    <option value="checkbox">Back End</option>
                    <option value="checkbox">Full Stack</option>
                </select>

                <p>Question 2: What development languages are you looking to use? </p>
                <select className="answers">
                    <option value="checkbox">HTML + CSS</option>
                    <option value="checkbox">Javascript</option>
                    <option value="checkbox">React</option>
                    <option value="checkbox">Python</option>
                </select>

                <p>Question 3: How long would the project be for? </p>
                <select className="answers">
                    <option value="checkbox">Two Weeks or Less</option>
                    <option value="checkbox">One Month</option>
                    <option value="checkbox">Three Months</option>
                    <option value="checkbox">Six Months</option>
                </select>

                <p>Question 4: What level of commitment would you require from the developer? </p>
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
                
                <select className="submit">
                    <option value="submit" />
                </select>           
        </div>
    );
};

export default Companies;