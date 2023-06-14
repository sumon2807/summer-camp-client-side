import React from 'react';

const SectionTitle = ({heading, discription}) => {
    return (
        <div>
            <h2 className="text-cyan-500 lg:font-semibold text-6xl underline">{heading}</h2>
            <p className="text-slate-400 w-2/3 py-8">{discription}</p>
        </div>
    );
};

export default SectionTitle;