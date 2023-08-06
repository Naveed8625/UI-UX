import React from 'react'
import '../Adv-Page/AdvPg.css'

function AdvPage() {
  return (
    <div className='AdD1'>
<h2>ADVANTAGES</h2>
<h1>Full Cycle of Designing</h1>

<div className='CardMain'>
    
    <div className='card1'>
    <img className='img' src='./AdvImg/Icon 64x61.png'></img>
    <h3>IDENTITY</h3>
    <p className='Advpp'>We’ll determine colours, typefaces, social media assets and everything you need to establish a new and compelling image which reflects your company’s values</p>
    </div>

    <div className='card2'>
    <img className='img' src='./AdvImg/Icon 64x62.png'></img>
    <h3>DESIGN</h3>
    <p className='Advpp'>We push ourselves to new levels of inspired excellence with each project and we sweat creativity. You won’t see anything until we’re done drooling at the result.</p>
    </div>

    <div className='card3'>
    <img className='img' src='./AdvImg/Icon 64x64.png'></img>
    <h3>DEVELOPMENT</h3>
    <p className='Advpp'>We know the web changes all the time, so we keep our eyes peeled to stay ahead of the curve. We craft websites that look beautiful on all different screen sizes</p>
    </div>

</div>

    </div>
  )
}

export default AdvPage