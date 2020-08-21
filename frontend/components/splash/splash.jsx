import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class SplashCarousel extends React.Component {
    render() {
        return (
            <div className='carousel-container'>
                <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                        <div>
                            <img src={window.images.splash1}  height= '800px' width='500px'/>
                        </div>
                        <div>
                            <img src={window.images.splash2} height='800px' width='500px'/>
                        </div>
                        <div>
                            <img src={window.images.splash3} height='800px' width='500px'/>
                        </div>
                </Carousel>

            </div>
        );
    }
};

export default SplashCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
