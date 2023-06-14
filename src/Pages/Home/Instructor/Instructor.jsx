import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Instructor = () => {
    const [instructors, setInstructros] = useState([])
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-woad.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructros(data))
    }, [])
    return (
        <section className='my-10'>
            <SectionTitle
                heading={"Our Instructors"}
                discription={"A meditative means of discovering dysfunctional perception and cognition, as well as overcoming it to release any suffering, find inner peace and salvation."}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    instructors.map(instructor => <SwiperSlide key={instructor._id}>
                        <div className=' group relative items-center overflow-hidden justify-center cursor-pointer rounded-lg'>
                            <img className='h-96 w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform' src={instructor.image_url} alt="" />
                            <div className=' absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className=' absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] group-hover:translate-y-0 transition-all'>
                                <h1 className='text-lg font-bold text-white'>{instructor.name}</h1>
                                <p className='text-xs text-white'>{instructor.role}</p>
                                <Link to={`/instructorInfo/${instructor._id}`}><button className='btn btn-outline btn-info btn-sm rounded-lg py-2 px-4 mt-4 text-white'>See more</button></Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Instructor;