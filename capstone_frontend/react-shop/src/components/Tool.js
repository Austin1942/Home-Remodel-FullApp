import React from "react"
import{Card, Button} from 'react-bootstrap'



function Tool()
{    
    return(
        <>
        
        <div class="container" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_960_720.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '200vw',
        height: '175vh'}}>
            <div class="d-grid gap-2 col-6 mx-auto">
                    <Button href={'https://youtu.be/vpq_jFyf8Yo'} variant="danger" size="lg">
                    Learn How To Do It
                    </Button>
            </div>
            <div class="row" style={{ paddingTop:"75px"}}>
                    <div class="col">
                    <Card style={{padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.ebayimg.com/images/g/w-sAAOSws25eTFqM/s-l640.jpg" />
                            <Card.Body >
                            <Card.Title class="fs-2">Hammer</Card.Title>
                            <Card.Title>Average Price</Card.Title>
                            <Card.Text>$30.00</Card.Text>
                            <Card.Text>The tool of most thunder whielding Norse gods</Card.Text>                        
                            <Button variant="danger" size="lg">
                            Just Start Swinging
                            </Button>
                            </Card.Body>
                            </Card>
                    </div>
                    <div class="col">
                            <Card style={{padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81fAxch2KfL._AC_SL1500_.jpg" />
                            <Card.Body>
                            <Card.Title class="fs-2">Cordless Drill</Card.Title>
                            <Card.Title>Average Price</Card.Title>
                            <Card.Text>$100.00</Card.Text>
                            <Card.Text>The Cordless drill is good for all applications of work</Card.Text>                                 
                            <Button href={'https://youtu.be/Wae3pbitz4I'} variant="danger" size="lg">
                            How To Use It
                            </Button>
                                
                            </Card.Body>
                            </Card>
                    </div>
                    <div class="col">
                
                    <Card style={{padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://static.grainger.com/rp/s/is/image/Grainger/4YE48_AS01" />
                            <Card.Body >
                            <Card.Title class="fs-2">Sawzall</Card.Title>
                            <Card.Title>Average Price</Card.Title>
                            <Card.Text>$120.00</Card.Text>
                            <Card.Text>A saw that is used in so many applications it has earned the title SAWS All</Card.Text>                         
                            <Button href={'https://youtu.be/8F2Owjt8Qpw'} variant="danger" size="lg">
                            How To Use It
                            </Button>
                            </Card.Body>
                            </Card>
                    </div>
                            <div class="col">
                            <Card style={{padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                                <Card.Img variant="top" src="https://images.thdstatic.com/productImages/0a8f54f8-f8e1-4df9-9bd4-7ea8731d1b39/svn/hdx-caulk-guns-hd128c-64_1000.jpg" />
                            <Card.Body>
                            <Card.Title class="fs-2">Caulking Gun</Card.Title>
                            <Card.Title>Average Price</Card.Title>
                            <Card.Text>$30.00</Card.Text>
                            <Card.Text>A hand tool to apply caulking evenly and accurately</Card.Text>
                            <Button href={'https://youtu.be/JerPx89WOi8'} variant="danger" size="lg">
                            How To Use It
                            </Button>
                            </Card.Body>
                            </Card>
                            </div>
            </div>
            
        </div>
        </>
    )
}

export default Tool