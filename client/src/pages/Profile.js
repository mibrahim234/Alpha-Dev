import React from "react";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>

            <h1 className="mb-2 py-2 title text-center">Here is your current information.</h1>
            <h2 className="mb-2 py-2 text-center"> Companies will contact you shortly. </h2>

            {/* Have a card component here with username, email
            --developers choices and delete icon on the right of the card, change info button?, takes you back to the developer page
             */}
        </div>
    )
};

export default Profile;
// className="container flex-row justify-space-between justify-center align-center"

// import React, { useEffect, useState } from 'react'
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import { Link } from 'react-router-dom';
// import Card from "./components/Card";

// // const [card, setCard] = useState([])

// // const handleDelete = async (id) => {
// //     await
// // }

// // const newCard = card.filter()
//  //then set delete as a prop
// const resDev = () => {
//     return (
//         <Container>
//             <Grid container spacing={3}>
//         <h1 className="mb-2 py-2 title text-center">AlphaDev Developers</h1>
//         {/* <Card/> */}
//         {/* <h2 className="mb-2 py-2 text-center"> We will contact you shortly!</h2> */}
//         </Grid>
//         </Container>
//     )
// }

// export default resDev