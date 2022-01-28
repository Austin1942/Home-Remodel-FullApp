import {Button, Card} from 'react-bootstrap';
import React,{useState, useEffect} from 'react';



function Tool()
{    
    const [tool,setTool]=useState([]);
    console.log(tool);
    useEffect(()=>{
      toolList();
    },[])
  
    const toolList = async()=>{
      const response = await fetch("127.0.0.1:5000/tool");
      console.log(response);
      const jsonData=await response.json();
      console.log(jsonData);
      setTool(jsonData)
    }
     
    
    
    return(
      <>
      
      <div className="container1s">
        {tool.map((values)=>{
          return(
            <>
                <div class="row" style={{ paddingTop:"75px"}}>
                <div class="col">
                    <Card style={{ alignItems:"center", padding:"15px", backgroundColor:"grey", width: '18rem' }}>
                    <Card.Img stlye={{width:'30px', }} variant="top"  src={values.image} alt={values.tool_name} />
                    <Card.Body>
                        <Card.Title>{values.tool_name}</Card.Title>
                        <Card.Text>
                        {values.avg_price}

                        {values.description}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                </div>
      
            </>
          )
        })}
        
      </div>
      </>
    )
}

export default Tool