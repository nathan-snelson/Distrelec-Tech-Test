import React, { useState } from 'react';

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import Card from '../card/Card';

import './Carousel.css'

const RightNav = (props) => {
    const {handleClick} = props;

    return (
        <div onClick={handleClick}>
            <ChevronRightIcon className="rightArrow"/>
        </div>
    )
}

const LeftNav = (props) => {
    const {handleClick} = props;

    return (
        <div onClick={handleClick}>
            <ChevronLeftIcon className="leftArrow"/>
        </div>
    )
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
            <h2>Related Products</h2>
            <LeftNav handleClick={prevSlide} />
            <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {index === current && <Card product={item} />}
                        </div>
                    )
                })
            }
            </div>
            <RightNav handleClick={nextSlide}/>
        </div>
    )
}

export default Carousel;