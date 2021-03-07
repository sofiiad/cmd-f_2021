import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function Home() {
    
    const history = useHistory();

    // const routeChange = () =>{ 
    //     let path = "/intro"; 
    //     history.push(path);
    //   }
    
    return (
        //Setting background image
      <div className="container-fluid homepage-bgimage">
        
            <Button className="start-btn" variant="primary" size="lg" active onClick={() => history.push('/intro')}>
              Start
            </Button>
          </div>
        );
  }

  
