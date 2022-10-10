import { Swiper, SwiperProps } from "swiper/react";
import React, { ReactNode } from "react";
import {Pagination , A11y} from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'
interface ISlideProps {
    children: ReactNode
    settings: SwiperProps 
}

const Slider: React.FC<ISlideProps> = ({children , settings}) => {
    return (
        <Swiper modules={[Pagination, A11y]} { ... settings}>{children}</Swiper>
    )
}

export default Slider