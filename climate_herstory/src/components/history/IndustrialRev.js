import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ammal from '../../img/AmmalJanakiCartoon.gif';
import Typing from 'react-typing-animation';

//Jaanaki Amal intro page

export default function IndustrialRev() {
   
  const history = useHistory();
    
  return (
    //Setting background image
    <div className="container-fluid intro-bgimage">
      <img className="ammal-img" src={ammal} alt="Ammal Janaki Image"/>
      <Typing className="ammal-text">
        <span>Hello to all curious people! 
        My name is Janaki Ammal and I am an Indian botanist. 
        I am most famous for my work producing hybrid crosses of sugarcanes and cytogenetics, 
        the study of genetic composition and patterns of gene expression in plants. 
        For me, understanding plants and preserving the rich biodiversity of India are one of my main focuses. 
        In this mini game, you will go through time and learn about more impressive women in STEM 
        who have each contributed to the advancement of science and technology. 
        You will also learn about the ecological impact of some common items and how you can help reduce your carbon footprint.
      </span>
      </Typing>
        <Button className="continue-btn" variant="primary" size="lg" active onClick={() => history.push('/story')}>
          Return
        </Button>
      </div>
    );
  }
