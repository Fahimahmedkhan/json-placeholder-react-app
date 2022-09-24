import React from 'react';

/**
 * It returns a div with a class of 'w-full h-96 bg-blue-800 text-white text-center flex flex-col
 * space-y-10' and contains three h1 tags, two h2 tags, and one h3 tag.
 * @returns A React component.
 */
const Banner = () => {
    return (
        <div className='w-full h-96 bg-blue-800 text-white text-center flex flex-col space-y-10'>
            <h1 className='text-6xl mt-10'>JSON Placeholder</h1>
            <h2 className='text-3xl'>Free fake API for testing and prototyping.</h2>
            <h2 className='text-3xl'>Powered by JSON Server + LowDB. Tested with XV.</h2>
            <h3 className='text-xl'>As of Oct 2021, serving ~1.7 billion requests each month.</h3>
        </div>
    );
};

export default Banner;