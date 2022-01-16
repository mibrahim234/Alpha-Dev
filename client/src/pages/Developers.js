import React, {useState} from "react";
import { Link } from 'react-router-dom';

// class DeveloperForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state.
//     }
// }

const Developers = () => {

    const [devQuestion1, setDevQuestion1] = useState("")
    const [devQuestion2, setDevQuestion2] = useState("")
    const [devQuestion3, setDevQuestion3] = useState("")
    const [devQuestion4, setDevQuestion4] = useState("")
    const [devQuestion5, setDevQuestion5] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        console.log(devQuestion1, devQuestion2, devQuestion3, devQuestion4, devQuestion5);
    }


    return (

        <div>
            <h1 className="mb-2 py-2 title text-center">Let's Talk!</h1>
            <h2 className="mb-2 py-2 text-center"> Let us help you find the right opportunities! Answer the following questions!</h2>
            
            <form id="developer-form" >
                <div className="text-center mb-2 py-2 ">
                    <p>Question 1: What type of freelance developer are you?</p>
                    <select className="answers mb-2 py-2" onChange={(e)=>{
                        const selectedAnswer1=e.target.value;
                        setDevQuestion1(selectedAnswer1)
                    }}>
                        <option value="FrontEnd">Front End</option>
                        <option value="Backend">Back End</option>
                        <option value="Full Stack">Full Stack</option>
                    </select>
                    {devQuestion1}

                    <p className="mb-2 py-2">Question 2: What development languages do you use? </p>
                    <select className="answers mb-2 py-2" onChange={(e)=>{
                        const selectedAnswer2=e.target.value;
                        setDevQuestion2(selectedAnswer2)
                    }}>
                        <option value="HTML+CSS">HTML + CSS</option>
                        <option value="JavaScript">Javascript</option>
                        <option value="React">React</option>
                        <option value="Python">Python</option>
                    </select>
                    {devQuestion2}

                    <p className="mb-2 py-2">Question 3: What is your level of experience? </p>
                    <select className="answers mb-2 py-2" onChange={(e)=>{
                        const selectedAnswer3=e.target.value;
                        setDevQuestion3(selectedAnswer3)
                    }}>
                        <option value="Entry-level">Entry-level</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Mid-level">Mid-level</option>
                        <option value="Senior or Executive-level">Senior or Executive-level</option>
                    </select>
                    {devQuestion3}
                
                    <p className="mb-2 py-2">Question 4: What level of commitment are you looking for? </p>
                    <select className="answers mb-2 py-2" onChange={(e)=>{
                        const selectedAnswer4=e.target.value;
                        setDevQuestion4(selectedAnswer4)
                    }}>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Hourly">Hourly</option>
                        <option value="I'll Decide Later">I'll Decide Later</option>
                    </select>
                    {devQuestion4}

                    <p className="mb-2 py-2">Question 5: When are you available to start working? </p>
                    <select className="answers mb-2 py-2" onChange={(e)=> {
                        const selectedAnswer5=e.target.value;
                        setDevQuestion5(selectedAnswer5)
                    }}>
                        <option value="Immediately">Immediately</option>
                        <option value="One To Two Weeks">One To Two Weeks</option>
                        <option value="One Month">One Month</option>
                        <option value="3 Months<">3 Months</option>
                    </select>
                    {devQuestion5}
                    </div>

                    <div className="container flex-row justify-space-between justify-center align-center">
                <h2 className="mb-2 py-2"> Click Submit to discover your talent:</h2>

                <button className='submitbtn m-2 py-2'>  <Link to="/resDev">Submit</Link> </button>

                {devQuestion1}
                {devQuestion2}
                {devQuestion3}
                {devQuestion4}
                {devQuestion5}
                        </div>
            </form>
                

        </div>
    );
};

export default Developers;

