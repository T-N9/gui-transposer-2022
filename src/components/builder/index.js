import React from 'react';

/* Components */
import GenSection from './GenSection';

const SongBuilder = () => {

    return (
        <section className='container mx-auto my-4'>
            <div className='max-w-2xl mx-auto'>
                <h1>Song Builder</h1> 
                <GenSection/>
            </div>
        </section>
    );
}

export default SongBuilder;
