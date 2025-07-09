import React from 'react';


const AboutHero = (props) => {
    return (
        <>
        <div className='bg-cover bg-center h-[630px] m-8 mt-16'style={{ backgroundImage: `url(${props.Img})` }}>
        <div className='text-center pt-8 text-4xl font-bold text-white'>
            <h1>Minha experiência</h1>
        </div>
        <div className='text-center pt-8 text-4xl font-bold text-white '>
            <p>Minha hisoria</p>
        </div>
        </div>
        </>
    );
};

export default AboutHero;