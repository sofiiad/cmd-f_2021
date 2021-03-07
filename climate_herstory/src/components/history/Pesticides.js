import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import rachel from '../../img/RachelCarson.gif';
import Typing from 'react-typing-animation';

//Jaanaki Amal intro page

export default function Pesticides() {
   
  const history = useHistory();
    
  return (
    //Setting background image
    <div className="container-fluid rachel-bgimage">
      <img className="woman-img" src={rachel} alt="Rachel Image"/>
      <Typing className="rachel-text" speed={5}>
              <span>
                  Hi all, my name is Rachel Carson and I am an American marine biologist and conservationist. 
                  I am best known for my book “Silent Spring”, published in 1962,  which highlighted the dangers of synthetic pesticides to the environment. 
                  I raised concerns about the chemical Dichlorodiphenyltrichloroethane, also known as DDT, and how it is toxic to the environment. 
                   
                  Experimental research on DDT is known to cause effects on the liver, kidney and nervous system of mice, rats and dogs. 
                  When released in the ecosystems, it is widely toxic to many animals, especially marine animals as DDT is insoluble in water. 
                  Additionally, it also leads to eggshells thinning consequently declining the population of certain bird species. 
                  For humans, it is a carcinogen and can accumulate in the body from consuming animals with high levels of DDT. 
                  My legacy is helping ban DDT and other pesticides as well as sparking a nationwide environmental movement. 
            </span>
      </Typing>
        <Button className="rachel-btn" variant="primary" size="lg" active onClick={() => history.push('/story')}>
          Return
        </Button>
      </div>
    );
  }
