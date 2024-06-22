import React from 'react';
import {useState} from 'react';

function Slides({slides}) {

    const [index, setIndex] = useState(0);

    function handleRestart(){
        setIndex(0);
    }

    function handlePrev(){ 
        setIndex(index-1)
    }

    function handleNext(){
        console.log('next');
        setIndex(index+1);
    }

    const isDisabledNext = index===4 ? true:false;
    const isDisabled = index=== 0 ? true: false; 
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={handleRestart} disabled={isDisabled}>Restart</button>
                <button onClick={handlePrev} disabled={isDisabled}>Prev</button>
                <button onClick={handleNext} disabled={isDisabledNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1>{slides[index].title}</h1>
                <p>{slides[index].text}</p>
            </div>
        </div>
    );

}

export default Slides;
