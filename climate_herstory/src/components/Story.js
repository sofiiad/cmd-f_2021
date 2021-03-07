import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import kitchen from '../img/story.png';
import Typing from 'react-typing-animation';

export default function Story() {
    
    const history = useHistory();
    
    return (
        //Setting background image
      <div className="container-fluid story-bgimage">
        <img className="story-img" src={kitchen} alt="Story Image" />
        <Typing className="story-text" speed={5}>
              <span>
                Click on the items that you think contibute to climate change (5 in total)
            </span>
      </Typing>
        <Button className="storyrachel-btn" variant="primary" size="lg" active onClick={() => history.push('/rachel')} />
        <Button className="storygreta-btn" variant="primary" size="lg" active onClick={() => history.push('/greta')}/>
        <Button className="storygladys-btn" variant="primary" size="lg" active onClick={() => history.push('/gladys')}/>
        <Button className="storydeforestation-btn" variant="primary" size="lg" active onClick={() => history.push('/bertawangari')}/>
        <Button className="storyisatou-btn" variant="primary" size="lg" active onClick={() => history.push('/isatou')}/>


            <Button className="start-btn" variant="primary" size="lg" active onClick={() => history.push('/thanks')}>
              Finish
            </Button>
          </div>
        );
  }