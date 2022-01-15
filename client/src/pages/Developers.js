import React from "react";

const Developers = () => {
    return (
        <div>
            <form>
            <p>Please answer the following questions to help us determine the right talent for your company!  </p>

                <p>Question 1: What role are you looking to hire? </p>
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

                <p>Question 3: How long would the project be for? </p>
                <label className="answers">
                    <input type="checkbox" />Two Weeks or Less
                    <input type="checkbox" />One Month
                    <input type="checkbox" />Three Months
                    <input type="checkbox" />Six Months
                </label>

                <p>Question 4: What level of commitment would you require from the developer? </p>
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
                </label> {"\n"}
                
                <label className="submit">
                    <input type="submit" />
                </label>
            </form>
            
            
        </div>
    );
};

export default Developers;