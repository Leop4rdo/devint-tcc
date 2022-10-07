import React, { useState } from "react";
import Button from "../Button";
import Icon from "../Icon";

interface ICarouselProps extends React.PropsWithChildren {

}

export const CarouselItem : React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="carousel-item">
            {children}
        </div>
    );
};

const Carousel: React.FC<ICarouselProps> = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex:number) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) -1;
        } else if (newIndex >= React.Children.count(children)){
            newIndex = 0
        }

        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel">
            <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {children}
            </div>

            <div className="swipers">
                <Icon name="chevron_left" onClick={() => {updateIndex(activeIndex - 1)}} />
                <Icon name="chevron_right"onClick={() => {updateIndex(activeIndex + 1)}} />
            </div>
        </div>
    );
}

export default Carousel;