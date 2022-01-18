import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const resComp = () => {
    return (
        <div className="container1 flex-row justify-space-between justify-center align-center">
       
        <Card>
        <CardContent className="card1">
        <h1 className="mb-2 py-2 title text-center">Here are your results!</h1>
        {/* <h2 className="mb-2 py-2 text-center"> We will contact you shortly!</h2> */}
        <CardContent className="card1">
        <Typography>
         <h1 className="text-center"> Lateefah Jana Vicario </h1>
        </Typography>
      </CardContent>
        </CardContent>
      <CardMedia
        component="img"
        image="/images/newbeardguy.jpg"
        alt="Beard Guy Smiling"
        className='img'
      />

      
      <CardContent className="card1">
        <Typography>
        <h3>Hi, I'm a full stack web developer with senior level experience. <br></br>Interested in a cross-functional software development role, that touches all parts of the stack. <br></br> Looking for a team of humble and talented people which embrace new technology and encourage autonomy. </h3>
        </Typography>
      </CardContent>


      <CardActions className="card1">
      <button className='btn1 m-2 py-2'>  <Link to="/Companies">Try Again</Link></button>
      <button style={{ marginLeft: "auto" }} type="submit" className='btn1 m-2 py-2'>  <Link to="/Developers">Add Developer</Link> </button>
      </CardActions>
    </Card>
    </div>
  );
}


export default resComp
