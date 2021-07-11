import React, { useEffect, useState } from 'react';
import './Carousel.css'

const LeftNav = () => {
    
}

const RightNav = () => {

}

const Carousel = ({data}) => {
    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    }

    return (        
        <div>    
            <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {index === current && <img src={item.productImageUrl} alt={item.productImageAltText}/>}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Carousel;