import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularClassItem from '../PopularClassItem/PopularClassItem';

const PopularClasses = () => {
    const [popular, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-woad.vercel.app/classes')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])
    return (
        <section className='my-10'>
            <SectionTitle
                heading={"Popular Online Classes"}
                discription={"A meditative means of discovering dysfunctional perception and cognition, as well as overcoming it to release any suffering, find inner peace and salvation."}
            ></SectionTitle>
            <div className='grid lg:grid-cols-3 gap-2 my-10'>
                {
                    popular.map(item=> <PopularClassItem
                    key={item._id}
                    item={item}
                    ></PopularClassItem>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;



