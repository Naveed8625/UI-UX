import React from 'react';
import '../Exp-Page/Exp.css';

function ExpePage() {
    return (
        <div className='expmain'>

            <div id='ExpD1'>
                <p id='p1'>WORK EXPERIENCE</p>
                <h1 className='h11'>Few Steps of Making Things <br></br> People Can Interact With
                </h1>
            </div>

            <div className='ExpD2'>

                <img className='img1' src='./Exp/Icon search.png'></img>

                <img className='img1' src='./Exp/Icon 32x32.png'></img>

                <img className='img1' src='./Exp/Icon 32x31.png'></img>

                <img className='img1' src='./Exp/Icon 25x24.png'></img>

            </div>
            <div className='ExpD3' >
                <p className='pp' style={{ color: "blue"}}>RESEARCHES</p>
                <p className='pp'>WIREFRAMES</p>
                <p className='pp'>LAYOUTS</p>
                <p className='pp'>DEVELOPING</p>
            </div>

            <div className='ExpD4'>
                <h3>If we were to design an identity for a coffee shop,
                   visit the coffee shop, chat with customers, and 
                   drink coffee there until we could really understand what
                   made that coffee shop special. Only then would we begin
                   to develop ideas and apply our craftsmanship. Read more
                   about our approach to</h3>
                <h3>our process. We push ourselves to new levels of inspired 
                   excellence with each project and we sweat creativity. You 
                   won’t see anything until we’re done drooling at the result. 
                   We know the web changes all the time, so we keep our eyes peeled to stay.</h3>
            </div>

        </div>
    )
}

export default ExpePage