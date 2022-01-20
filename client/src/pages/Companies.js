// page will be company mock data 
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
 import Grid from '@mui/material/Grid';
 import Container from '@mui/material/Container';
 import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

 
 const Companies = () => { 
    const [companies, setCompanies] = useState([])

    // hardcode fake image for now 
    useEffect(() => {
        const tempCompanies = [{ 
        companyName: "Amazon", 
        jobTitle: "Full Stack Developer",
        startDate: "Immediately"
        // url slide in here 
     }, 
     { 
        companyName: "Delta", 
        jobTitle: "Frontend",
        startDate: "One Month"
     },
     { 
        companyName: "Dell", 
        jobTitle: "Backend",
        startDate: "One week"
     }
    ]
    setCompanies(tempCompanies) 
    }, [])

    return (
        <div className="container flex-row justify-space-between justify-center align-center">

            <h1 className="mb-2 py-2 title text-center">Here are the companies AlphaDev has worked with!</h1>

             {/* <Container>
//             <Grid container justify="space-around" spacing={5}>
      // fake company pictures and info?
    // 6 pictures 
//       </Grid>
//         </Container> */}
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {companies.map((company, index) => {
            return (
                <Grid item xs={2} sm={4} md={4} key={index}>
            <Card>
            <CardContent className="card1">
            <h1 className="mb-2 py-2 title text-center">{company.companyName}</h1>
            
            </CardContent>  
          <CardContent className="card1">
          <h2 className="mb-2 py-2 title text-center">{company.jobTitle}</h2>
          </CardContent>

          <CardContent className="card1">
          <h3 className="mb-2 py-2 title text-center">{company.startDate}</h3>
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