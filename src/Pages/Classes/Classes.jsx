import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import cover from '../../assets/Images/pagecover/bgcover4.webp'
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import AllClass from '../AllClass/AllClass';
import { useState } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-woad.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Yoku | Classes</title>
            </Helmet>
            <PageCover img={cover} title={'All Classes'}></PageCover>
            <div className='grid grid-cols-3 gap-2 my-10'>
                {
                    classes.map(classItem=> <AllClass
                    key={classItem._id}
                    classItem={classItem}
                    ></AllClass>)
                }
            </div>
        </div>
    );
};

export default Classes;