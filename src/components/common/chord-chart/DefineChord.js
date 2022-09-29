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
            <div className='flex flex-col justify-center items-center'>
                <ChordChart position={wantedChord}/>
                
                <p className='font-bold text-info'>{chord}</p>
            </div>
        </>
    );
}

export default DefineChord;
