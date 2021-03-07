import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import isatou from '../../img/Isatou_Ceesay.png';
import Typing from 'react-typing-animation';

//Jaanaki Amal intro page

export default function Plastic() {
   
  const history = useHistory();
    
  return (
    //Setting background image
    <div className="container-fluid isatou-bgimage">
      <img className="isatou-img" src={isatou} alt="Isatou Ceesay Image"/>
      <Typing className="isatou-text" speed={5}>
              <span>
                Hello all, I am Isatou Ceesay from The Gambia and I am also known as the “Queen of Recycling”. 
                You must be wondering how I achieved that name? 
                I am responsible for the initiative “One Plastic Bag” where I educate women on how to recycle plastic and use it as material for products that can be sold. 
                I was motivated to start this movement, when I noticed how much plastic and 
                rubbish was prevalent in the streets of my community and how much it was 
                affecting agriculture, animals, and the people. 
                I love to empower women and to help reduce the plastic crisis waste around me by finding creative ways to upcycle it. 
                I am glad that my initiative has helped the women in my community earn a source of income that can be used for their education or to support their family.
                                
                  Single use plastic is one of the leading items in landfill and in the ocean.
                  They are very harmful for the environment as well as animals. 
                  For instance, in oceans sea turtles will see plastic bags and confuse them with jellyfish. 
                  Plastic takes a long time to degrade itself and uses fossil fuels to be made. 
                  An easy way to slowly reduce the use of single use plastic is to trade single use plastic with items that prioritize reusability and sustainability. 
                  Some examples include: replacing a single use plastic water bottle with a metal one,
                  bringing a reusable bag when grocery shopping or buying in bulk to avoid packaging.
            </span>
      </Typing>
        <Button className="isatou-btn" variant="primary" size="lg" active onClick={() => history.push('/story')}>
          Return
        </Button>
      </div>
    );
  }