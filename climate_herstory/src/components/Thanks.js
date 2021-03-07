import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Typing from 'react-typing-animation';

//Jaanaki Amal intro page

export default function Thanks() {
   
  const history = useHistory();
    
  return (
    //Setting background image
    <div className="container-fluid thanks-bgimage">
      
        <Button className="thanks-btn" variant="primary" size="lg" active onClick={() => history.push('/')}>
          Return to Home
        </Button>
      </div>
    );
  }