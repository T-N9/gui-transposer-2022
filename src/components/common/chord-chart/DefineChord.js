import React from 'react';

/* Components */
import ChordChart from './ChordChart';

/* Util */
import extractChord from '../../../chordDB';

const DefineChord = ({
    chord
}) => {

    const { wantedChord } = extractChord(chord); 

    return (
        <>
            <div className='flex flex-col cursor-pointer justify-center items-center bg-white rounded-md'>
                <ChordChart position={wantedChord}/>
                
                <p className='font-bold text-light-md'>{chord}</p>
            </div>
        </>
    );
}

export default DefineChord;
