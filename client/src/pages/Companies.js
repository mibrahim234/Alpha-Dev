// page will be company mock data 

import React, {useState} from "react";
import { Link } from 'react-router-dom';
 import Grid from '@mui/material/Grid';
 import Container from '@mui/material/Container';

// const Companies = () => {

//         const [formState, setFormState] = useState({ preferredRole: "", language: "", length: "", commitment: "", startDate: ""});
//         const { preferredRole, language, length, commitment, startDate } = formState;

//         function handleChange(e) {
//             setFormState({...formState, [e.target.name]: e.target.value })
//         }
//         console.log(formState)

//         function handleSubmit(e) {
//             e.preventDefault();
//             // console.log(formState);
//         }

//     return (  
//         <div>
//             <h1 className="mb-2 py-2 title text-center">Let's Talk!</h1>
//             <h2 className="mb-2 py-2 text-center"> Let us know what skills your company is looking for by answering the following questions.</h2>
           
//             {/* <Container>
//             <Grid container justify="space-around" spacing={5}>
      
//       </Grid>
//         </Container> */}


//            <form id="company-form" onSubmit={handleSubmit}>
//                 <div className="text-center mb-2 py-2 ">
//                     <p>Question 1: What role are you looking to hire? </p>
//                     <select className="answers mb-2 py-2" name="preferredRole" defaultValue={preferredRole} onChange={handleChange}>
//                         <option value="FrontEnd">Front End</option>
//                         <option value="Backend">Back End</option>
//                         <option value="Full Stack">Full Stack</option>
//                     </select>

//                     <p className="mb-2 py-2">Question 2: What development languages are you looking to use? </p>
//                     <select className="answers mb-2 py-2" name="language" defaultValue={language} onChange={handleChange}>
//                         <option value="HTML+CSS">HTML + CSS</option>
//                         <option value="JavaScript">Javascript</option>
//                         <option value="React">React</option>
//                         <option value="Python">Python</option>
//                     </select>

//                     <p className="mb-2 py-2">Question 3: How long would the project be for? </p>
//                     <select className="answers mb-2 py-2" name="length" defaultValue={length} onChange={handleChange}>
//                         <option value="Two Weeks or Less">Two Weeks or Less</option>
//                         <option value="One Month">One Month</option>
//                         <option value="Three Months">Three Months</option>
//                         <option value="Six Months">Six Months</option>
//                     </select>

//                     <p className="mb-2 py-2">Question 4: What level of commitment would you require from the developer? </p>
//                     <select className="answers mb-2 py-2" name="commitment" defaultValue={commitment} onChange={handleChange}>
//                         <option value="Full-Time">Full-Time</option>
//                         <option value="Part-Time">Part-Time</option>
//                         <option value="Hourly">Hourly</option>
//                         <option value="I'll Decide Later">I'll Decide Later</option>
//                     </select>

//                     <p className="mb-2 py-2">Question 5: When do you need the developer to start? </p>
//                     <select className="answers mb-2 py-2" name="startDate" defaultValue={startDate} onChange={handleChange}>
//                         <option value="Immediately">Immediately</option>
//                         <option value="One To Two Weeks">One To Two Weeks</option>
//                         <option value="One Month">One Month</option>
//                         <option value="I'll Decide Later">I'll Decide Later</option>
//                     </select>
//                 </div>

//                 <div className="container flex-row justify-space-between justify-center align-center">
//                     <h2 className="mb-2 py-2"> Click Submit to discover your talent:</h2>
//                     <button type="submit" className='submitbtn m-2 py-2'>  <Link to="/resComp">Submit</Link> </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Companies;