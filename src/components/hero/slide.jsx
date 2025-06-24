import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/custom.css';

const Slide = () => {
  return (
    <div className='mt-4'>
    <div style={{ width: '100vw', overflow: 'hidden' }}>
      <Carousel fade interval={2000}>
        <Carousel.Item>
          <img
            className="img-fluid w-100 mb-4 hero-image"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
            src="https://media.powerlook.in/mycustomfolder/banner_30_.jpg?aio=w-3840"
            alt="First slide"
            // style={{ objectFit: 'cover', height: '600px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid w-100 mb-4 hero-image"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
            src="https://cdn-media.powerlook.in/mycustomfolder/banner_27_.jpg?aio=w-3840"
            alt="Second slide"
            // style={{ objectFit: 'cover', height: '600px' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
};

export default Slide;
