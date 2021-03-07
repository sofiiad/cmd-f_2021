import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import berta from '../../img/berta.jpg';
import wangari from '../../img/wangarimaathai.jpg';
import Typing from 'react-typing-animation';

//Jaanaki Amal intro page

export default function Deforestarion() {
   
  const history = useHistory();
    
  return (
    //Setting background image
    <div className="container-fluid deforestation-bgimage">
          <img className="berta-img" src={berta} alt="Berta Caceres Image" />
          <img className="wangari-img" src={wangari} alt="Wangari Maathai Image"/>
      <Typing className="wangari-text" speed={5}>
              <span>Hello! I am Wangari Maathai, an environmental and political activist from Kenya,
              as well as the first African woman to receive a coveted Nobel Peace Prize. 
              I founded the Green Belt movement in 1977, an initiative to plant trees in order
              to benefit communities, fight deforestation and stop erosion.
                </span>
          </Typing>
          <Typing className="berta-text" startDelay={9500} speed={5}>
              <Typing.Delay ms={100} />
              <span>
                  Hi my name is Berta Isabel Cáceres Flores and I am a Honduran advocate for the
                  preservation of the environment and indigenous rights. 
                  In my life, 
                  I always stood up for what I believed in. At the age of 19, I co founded the National Council of Popular and Indigenous Organizations of Honduras (COPINH). 
                  I helped the Lenca people from Rio Blanco preserve their land by manifesting against the construction of a dam on the Gualcarque river. 
                  This dam would be built on sacred land and cut off the access to clean water, food and necessary medicine for the Lenca people. 
                  It also violated their right to live sustainably from the resources on their land.
                  I successfully managed to halt the project and the company building the dam moved locations. 
                  Sadly, my life was cut short when I was assassinated. 
                  However, I want my story to inspire everyone to not give up what they believe in.
            </span>
          </Typing>
          
        <Button className="deforestation-btn" variant="primary" size="lg" active onClick={() => history.push('/story')}>
          Return
        </Button>
      </div>
    );
  }