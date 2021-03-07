import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import greta from '../../img/greta.jpg';
import Typing from 'react-typing-animation';

//Jaanaki Amal intro page

export default function Steak() {
   
  const history = useHistory();
    
  return (
    //Setting background image
    <div className="container-fluid greta-bgimage">
      <img className="greta-img" src={greta} alt="Greta Thunberg Image"/>
      <Typing className="greta-text">
        Hello
      </Typing>
        <Button className="greta-btn" variant="primary" size="lg" active onClick={() => history.push('/story')}>
          Return
        </Button>
      </div>
    );
  }
