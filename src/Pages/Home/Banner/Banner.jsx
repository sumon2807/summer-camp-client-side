import React from 'react';
import banner1 from '../../../../public/assets/banner/Banner-2.webp'
import banner2 from '../../../../public/assets/banner/banner2.jpg'
import banner3 from '../../../../public/assets/banner/banner3.jpg'
import banner4 from '../../../../public/assets/banner/banner1.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className=' absolute transform -translate-y-1/2 left-5 right-5 top-1/3 text-center flex flex-col w-1/2 justify-center items-center mx-auto'>
                    <h3 className=' text-slate-400 text-4xl font-semibold'>Online</h3>
                    <h1 className='lg:text-7xl text-cyan-500 lg:font-extrabold lg:my-4'>Yoga Classes</h1>
                    <p className='text-slate-400 pt-4'>Yoka is the most popular online yoga classes, trusted by 100,000+ customers. Our instructers are well-known and certified.</p>
                    <button className='btn btn-outline btn-info mt-20'>Browse Courses</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle btn-outline btn-sm btn-info">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline btn-sm btn-info">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner3} className="w-full " />
                <div className=' absolute transform -translate-y-1/2 left-5 top-1/3 flex flex-col w-1/2 items-start'>
                    <h3 className=' text-slate-400 text-4xl font-bold ml-20'>Online</h3>
                    <h1 className='text-7xl text-cyan-500 font-extrabold my-4 ml-20'>Yoga Classes</h1>
                    <p className='text-slate-400 pt-4 ml-20'>Yoka is the most popular online yoga classes, trusted by 100,000+ customers. Our instructers are well-known and certified.</p>
                    <button className='btn btn-outline btn-info my-8 ml-20'>Browse Courses</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle btn-outline btn-sm btn-info">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-outline btn-sm btn-info">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner2} className="w-full " />
                <div className=' absolute transform -translate-y-1/2 left-5 right-5 top-1/3 flex flex-col w-1/2 justify-center items-center mx-auto text-center'>
                    <h3 className=' text-slate-600 text-4xl font-bold mt-36'>Online</h3>
                    <h1 className='text-7xl text-slate-100 font-extrabold my-8 '>Yoga Classes</h1>
                    <p className='text-slate-600 pt-4 px-10 font-bold'>Yoka is the most popular online yoga classes, trusted by 100,000+ customers. Our instructers are well-known and certified.</p>
                    <button className='btn btn-outline mt-8'>Browse Courses</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle btn-outline btn-sm ">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-outline btn-sm ">❯</a>
                </div>
            </div>
            
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className=' absolute transform -translate-y-1/2 right-5 top-1/3 text-center flex flex-col w-1/2 justify-center items-center mx-auto'>
                    <h3 className=' text-slate-100 text-4xl font-bold'>Online</h3>
                    <h1 className='text-7xl text-slate-700 font-extrabold my-4'>Yoga Classes</h1>
                    <p className='pt-4 text-neutral-100'>Yoka is the most popular online yoga classes, trusted by 100,000+ customers. Our instructers are well-known and certified.</p>
                    <button className='btn btn-outline my-8'>Browse Courses</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle btn-outline btn-sm ">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-outline btn-sm ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;