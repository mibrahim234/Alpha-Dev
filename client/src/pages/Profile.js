import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Profile = () => {
    
    const { loading, data } = useQuery(QUERY_ME)
    // const [profile, setProfile] = useState([])
    const userData = data?.me || [];

    // useEffect(() => {
    //     console.log(data);
    //     setProfile(data)
    // }, [data])


    //     Have a card component here with username, email
    // --developers choices and delete icon on the right of the card, change info button?, takes you back to the developer page

    // if data isn't here yet, say loading..
  if (loading) {
   return <h1 className='page-title m-2 py-5'>LOADING...</h1>
  }

    return (
        <div className="container flex-row justify-space-between justify-center align-center">

            <h1 className="mb-2 py-2 title text-center">
            Hello, {userData.username} </h1>
             <h2>Here is your current information.</h2>
           

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Card>
            <CardContent className="card1">
                    <h1>Username: {data.me.username}</h1>
                    <h1>Email: {data.me.email}</h1>
                </CardContent>

                <CardContent className="card1">
                    <h1>Preferred Role: {data.me.position.preferredRole}</h1>
                 </CardContent>

                 <CardContent className="card1">
                    <h1 className="mb-2 py-2">Developer Language: {data.me.position.language}</h1>
                    </CardContent>

                    <CardContent className="card1">
                    <h1>Level of Commitment: {data.me.position.length}</h1>
                    </CardContent>

                    <CardContent className="card1">
                    <h1>Availability: {data.me.position.commitment}</h1>
                    </CardContent>

                    <CardContent className="card1">
                    <h1>When Can You Start: {data.me.position.startDate}</h1>
                    </CardContent>
            </Card>
         </Grid>
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