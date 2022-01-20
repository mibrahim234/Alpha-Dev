// page will be company mock data 
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
 import Grid from '@mui/material/Grid';
 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
 
 const Companies = () => { 
    const [companies, setCompanies] = useState([])

    // hardcode fake image for now 
    useEffect(() => {
        const tempCompanies = [{ 
        companyName: "Etsy",
        Image: "",
        jobTitle: "Full Stack",
        startDate: "Immediately",
        language: "JavaScript"
        // url slide in here 
     }, 
     { 
        companyName: "Airbnb", 
        Image: "",
        jobTitle: "Backend",
        startDate: "One Month",
        language: "Ruby"

     },
     { 
        companyName: "Sarwar Consults", 
        Image: "",
        jobTitle: "Frontend",
        startDate: "One week",
        language: "React"

     },
     { 
        companyName: "Salesforce", 
        Image: "",
        jobTitle: "Backend",
        startDate: "Two Months",
        language: "Apex"

     },
     { 
        companyName: "FedEx", 
        Image: "",
        jobTitle: "FrontEnd",
        startDate: "Three days",
        language: "JavaScript"

     },
     { 
        companyName: "Snapchat", 
        Image: "",
        jobTitle: "FullStack",
        startDate: "One month",
        language: "Python"

     }
    ]
    setCompanies(tempCompanies) 
    }, [])

    return (
        <div className="container flex-row justify-space-between justify-center align-center">

            <h1 className="mb-2 py-2 title text-center">Here are the companies AlphaDev has worked with!</h1>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {companies.map((company, index) => {
            return (
                <Grid item xs={2} sm={4} md={4} key={index}>
            <Card>
            <CardContent className="card1">
            <h1 className="mb-2 py-2">{company.companyName}:</h1>
            </CardContent>  

            {/* <CardContent className="card1">
          <h2 className="mb-2 py-2">{company.Image}</h2>
          </CardContent> */}

          <CardContent className="card1">
          <h2>Role: {company.jobTitle}</h2>
          </CardContent>

          <CardContent className="card1">
          <h3>Start Date: {company.startDate}</h3>
          </CardContent>

          <CardContent className="card1">
          <h3>Favorite: {company.language}</h3>
          </CardContent>
        </Card>
        </Grid>
            )
        })}
        </Grid>

        </div>
    )
};

export default Companies;