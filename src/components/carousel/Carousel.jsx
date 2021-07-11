import React, { useEffect, useState } from 'react';

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

const Carousel = (props) => {
    const [current, setCurrent] = useState(0);
    const { data, time} = props;
    
    // nav function to move the slides forward
    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    }

    // nav function to move the slides backwards
    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    }

    // useEffect used to automatically scroll the slides within the specified time
    useEffect(() => {
        const next = ( current + 1 ) % data.length;
        const id = setTimeout(() => setCurrent(next), time);
        return () => clearTimeout(id);
    }, [current]);

    return (
        <div>
            <h2>Related Products</h2>
            <LeftNav handleClick={prevSlide} />
            <div className="carousel">
            {
                // map through the data objects provided and choose the one to display when the index matches
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