import React from 'react';
import { Fade } from 'react-slideshow-image';

//https://reactjsexample.com/a-react-component-for-image-slideshow-supporting-slide/

//forceUpdate hook
// const useForceUpdate = () => useState()[1];

const fadeProperties = {
  duration: 10000,
  transitionDuration: 5000,
  infinite: true,
  indicators: false,
//   scale: 1,
  arrows: false,
  autoplay: true
}

const Slideshow = ( {imgs, title} ) => {
  
  // hook
  //const forceUpdate = useForceUpdate();
  //console.log('rendering');
  
  return (
    <Fade {...fadeProperties}>

      {imgs.map( (img, index) => 

      <div className="each-fade" key={index}>
        <div style={{
                'height': '50vh', 
                'backgroundImage': `url(${'./imgs/carousel/'+img})`,
                'backgroundAtachment':'center',
                'backgroundPosition':'center',
                'backgroundRepeat':'no-repeat'
                }}>
        </div>
      </div>
      )}
    </Fade>
  )
}

export default Slideshow;