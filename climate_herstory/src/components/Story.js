import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import kitchen from '../img/story.png';
import {Link} from 'react-router-dom';

export default function Story() {
    
    const history = useHistory();
    
    return (
        //Setting background image
      <div className="container-fluid story-bgimage">
        <img className="story-img" src={kitchen} alt="Story Image" />
        

        <Button className="storyrachel-btn" variant="primary" size="lg" active onClick={() => history.push('/rachel')} />
        <Button className="storygreta-btn" variant="primary" size="lg" active onClick={() => history.push('/greta')}/>
        <Button className="storygladys-btn" variant="primary" size="lg" active onClick={() => history.push('/gladys')}/>
        <Button className="storygladys-btn" variant="primary" size="lg" active onClick={() => history.push('/gladys')}>
          Gladys </Button>


            <Button className="start-btn" variant="primary" size="lg" active onClick={() => history.push('/intro')}>
              Finish
            </Button>
          </div>
        );
  }