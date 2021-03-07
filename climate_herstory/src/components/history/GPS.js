import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import gladys from '../../img/gladys.jpg';
import Typing from 'react-typing-animation';

//Jaanaki Amal intro page

export default function GPS() {
   
  const history = useHistory();
    
  return (
    //Setting background image
    <div className="container-fluid gladys-bgimage">
      <img className="gladys-img" src={gladys} alt="Gladys West Image"/>
      <Typing className="gladys-text" speed={5}>
        <span>Since the industrial revolution, cars have been a staple way to efficiently transport ourselves. 
        Hello, I am Gladys West and I am an African American mathematician that helped contribute a lot to the GPS system. 
        Education has always been a passion of mine and I realised early on that it would be the best way to escape the cycle of working in the fields. 
        Being the second black woman hired at the Naval Proving Ground in Virginia, I have always been a trailblazer in my life. 
        My understanding of satellite data, from 1960 through the 80s,  has allowed GPS studies to progress tremendously. 
        Although my work went unrecognized for a while,one of my sorority sisters read my alumni profile and recognized my work. Consequently, so did the US air force as well!
         
        Vehicles are one of the biggest air polluters. They release carbon dioxide as well as other greenhouse gases. 
        Greenhouse gases are known for trapping heat in the atmosphere, slowly causing the temperature of the Earth to rise. 
        The warming of the Earth is problematic as it leads to many imbalances such as the melting of glaciers and the rise of sea level. 
        Furthermore, car pollutants affect humans in different ways: it might cause increased respiratory problems or irritation for the skin and eyes. 
        To help reduce pollution from cars walking, biking and public transport are all great ways to minimize your impact.
        </span>
      </Typing>
        <Button className="gladys-btn" variant="primary" size="lg" active onClick={() => history.push('/story')}>
          Return
        </Button>
      </div>
    );
  }
