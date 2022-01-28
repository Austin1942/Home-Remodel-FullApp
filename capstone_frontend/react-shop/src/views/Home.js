import React from "react"
import{Card, Button} from 'react-bootstrap'
import {Link } from "react-router-dom";



function Home()
{    
    return(
        <div class="container" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2019/01/13/11/49/iceland-3930162_960_720.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}>
            <div class="row" style={{ padding:"75px"}}>
            <div class="col"></div>
            <div class="col">
                    <Card style={{padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/12/07/05/17/park-224443_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Exterior Work</Card.Title>
                       
                        <Link to="/home"><Button variant="primary">Workin' Outside</Button></Link>
                    </Card.Body>
                    </Card>
            </div>
            <div class="col">
                
            <Card style={{ padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg" />
                    <Card.Body >
                        <Card.Title>Interior Work</Card.Title>
                        
                        <Link to="/room"><Button onClick="/Room"variant="primary">Workin' Inside</Button></Link>
                    </Card.Body>
                    </Card>
            </div>
            <div class="col"></div>
            </div>
        </div>
    )
}

export default Home