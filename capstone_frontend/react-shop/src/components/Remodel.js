import React from "react"
import{Card} from 'react-bootstrap'
import {Link } from "react-router-dom";

function Remodel()
{    
    return(
        <div class="container" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2016/05/08/23/20/keys-1380134_960_720.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '200vw',
        height: '175vh'}}>
            <div class="row" style={{ paddingTop:"75px"}}>
                    <div class="col"></div>
                    <div class="col">
                            <Card style={{ alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/23/00/56/bathroom-1851566_960_720.jpg" />
                            <Card.Body>
                                
                                
                                <Link to="/tool"><button type="button" class="btn btn-info btn-lg">Sink and Faucet</button></Link>
                                
                            </Card.Body>
                            </Card>
                    </div>
                    <div class="col">
                
                    <Card style={{ alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/27/22/59/wc-1284608_960_720.jpg" />
                            <Card.Body >
            
                        
                                <Link to="/tool"><button type="button" class="btn btn-info btn-lg">Toilet</button></Link>
                            </Card.Body>
                            </Card>
                    </div>
                            <div class="col"></div>
            </div>
            <div class="row" style={{ padding:"25px"}}>
                    <div class="col"></div>
                    <div class="col">
                            <Card style={{alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/12/28/23/26/bath-1937412_960_720.jpg" />
                            <Card.Body>
                                
                       
                                <Link to="/tool"><button type="button" class="btn btn-info btn-lg">Shower and Bath</button></Link>
                            </Card.Body>
                            </Card>
                    </div>
                    <div class="col">
                
                    <Card style={{ alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/12/13/00/25/sink-1090429_960_720.jpg" />
                            <Card.Body >
                            
                        
                                <Link to="/tool"><button type="button" class="btn btn-info btn-lg">Bathroom Cabinets</button></Link>
                            </Card.Body>
                            </Card>
                    </div>
                            <div class="col"></div>
            </div>
            
        </div>
    )
}

export default Remodel