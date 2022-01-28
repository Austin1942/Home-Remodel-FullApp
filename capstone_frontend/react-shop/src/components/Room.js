import React from "react"
import{Card} from 'react-bootstrap'
import {Link } from "react-router-dom";

function Room()
{    
    

   
    return(
        <div class="container" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_960_720.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '200vw',
        height: '175vh'}}>
            <div class="row" style={{ paddingTop:"75px"}}>
                    <div class="col"></div>
                    <div class="col">
                            <Card style={{ alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg" />
                            <Card.Body>
                                
                                
                                <Link to="/home"><button type="button" class="btn btn-warning btn-lg">Kitchen</button></Link>
                                
                            </Card.Body>
                            </Card>
                    </div>
                    <div class="col">
                
                    <Card style={{ alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/29/07/55/modern-minimalist-bathroom-3115450_960_720.jpg" />
                            <Card.Body >
            
                        
                                <Link to="/remodel"><button type="button" class="btn btn-warning btn-lg">Bathroom</button></Link>
                            </Card.Body>
                            </Card>
                    </div>
                            <div class="col"></div>
            </div>
            <div class="row" style={{ padding:"25px"}}>
                    <div class="col"></div>
                    <div class="col">
                            <Card style={{alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg" />
                            <Card.Body>
                                
                       
                                <Link to="/home"><button type="button" class="btn btn-warning btn-lg">Living Area</button></Link>
                            </Card.Body>
                            </Card>
                    </div>
                    <div class="col">
                
                    <Card style={{ alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/07/27/14/05/household-862595_960_720.jpg" />
                            <Card.Body >
                            
                        
                                <Link to="/home"><button type="button" class="btn btn-warning btn-lg">Basement</button></Link>
                            </Card.Body>
                            </Card>
                    </div>
                            <div class="col"></div>
            </div>
            
        </div>
    )
}

export default Room