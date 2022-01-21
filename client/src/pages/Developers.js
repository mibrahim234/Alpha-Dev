import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { UPDATE_DEV_USER } from "../utils/mutations";
import { useHistory } from "react-router-dom";


const Developers = () => {

    let history = useHistory();

    const [formState, setFormState] = useState( { position: { preferredRole: "", language: "", length: "", commitment: "", startDate:"" } } )
    const { preferredRole, language, length, commitment, startDate } = formState;

    const [updateDevUser, { error }] = useMutation(UPDATE_DEV_USER);

    function handleChange(e) {
        setFormState({...formState, position:{...formState.position, [e.target.name]: e.target.value }})
    }
    // console.log(formState)

    const handleSubmit = async event => {
        event.preventDefault();
        // console.log(formState);

        try {
            // add user answers to database
            await updateDevUser({
                variables: { ...formState }
            });
            history.push("/profile")
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div>
            <h1 className="mb-2 py-2 title1 text-center">Let's Talk!</h1>
            <h2 className="mb-2 py-2 text-center"> Let us help you find the right opportunities! Answer the following questions!</h2>
            
            <form id="developer-form" onSubmit={handleSubmit} >
                <div className="text-center mb-2 py-2 ">
                    <p>Question 1: What type of freelance developer are you?</p>
                    <select className="answers mb-2 py-2" name="preferredRole" defaultValue={preferredRole} onChange={handleChange}>
                        <option value="FrontEnd">Front End</option>
                        <option value="Backend">Back End</option>
                        <option value="Full Stack">Full Stack</option>
                    </select>


                    <p className="mb-2 py-2">Question 2: What development languages do you use? </p>
                    <select className="answers mb-2 py-2" name="language" defaultValue={language} onChange={handleChange} >
                        <option value="HTML+CSS">HTML + CSS</option>
                        <option value="JavaScript">Javascript</option>
                        <option value="React">React</option>
                        <option value="Python">Python</option>
                    </select>


                    <p className="mb-2 py-2">Question 3: What is your level of experience? </p>
                    <select className="answers mb-2 py-2" name="length" defaultValue={length} onChange={handleChange}>
                        <option value="Entry-level">Entry-level</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Mid-level">Mid-level</option>
                        <option value="Senior or Executive-level">Senior or Executive-level</option>
                    </select>

                
                    <p className="mb-2 py-2">Question 4: What level of commitment are you looking for? </p>
                    <select className="answers mb-2 py-2" name="commitment" defaultValue={commitment} onChange={handleChange}>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Hourly">Hourly</option>
                        <option value="I'll Decide Later">I'll Decide Later</option>
                    </select>


                    <p className="mb-2 py-2">Question 5: When are you available to start working? </p>
                    <select className="answers mb-2 py-2" name="startDate" defaultValue={startDate} onChange={handleChange}>
                        <option value="Immediately">Immediately</option>
                        <option value="One To Two Weeks">One To Two Weeks</option>
                        <option value="One Month">One Month</option>
                        <option value="3 Months">3 Months</option>
                    </select>
                </div>

                    <div className="container flex-row justify-space-between justify-center align-center">
                        <h2 className="mb-2 py-2"> Click Submit to discover your opportunity:</h2>
                        <button type="submit" className='submitbtn m-3 py-2'>Submit</button>
                    </div>

                    {/* <button type="submit" className='submitbtn m-3 py-2' onClick={() => handleSubmitData(Id)}>
                            ><Link to="/profile">Submit</Link></button> */}
            </form>
        </div>
    );
};

export default Developers;

