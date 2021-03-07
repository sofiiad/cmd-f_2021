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
      <Typing className="greta-text" speed={5}>
      Hi all, I am Greta Thunberg, one of the youngest climate activists. 
      You may recognize me as the bold and direct woman who is on strike from school for climate, or from my many speeches denouncing the lack of action from the government. 
      Climate change is very important and will affect all of us. 
      Our house is on fire and we have the right to demand a safe future. 
      That is why if we work together to adopt changes, such as reducing our meat consumption, we will help reduce the carbon footprint of humans on Earth.

      Raising livestock, more specifically red meat, is one of the biggest greenhouse gas emitters. 
      It requires a lot of freshwater and resources to feed and raise the cattle, these resources could be used to feed more people instead. 
      Furthermore, the cattle need a place to graze, hence land being cleared for that purpose resulting in the erosion of the soil. 
      Other times, more dramatic land clearing happens such as deforestation. 
      Consequently, this leads to the loss of habitats for many animals and less trees are present to absorb CO2. 
      A meat based diet produces more emissions per unit than a plant based diet. 
      To help the Earth and reduce the carbon footprint, it is possible to reduce emissions by choosing plant based alternatives and reducing the consumption of red meat.
      </Typing>
        <Button className="greta-btn" variant="primary" size="lg" active onClick={() => history.push('/story')}>
          Return
        </Button>
      </div>
    );
  }
