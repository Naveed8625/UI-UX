import React from 'react'
import '../homeImage/Homeimg.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

function HomeImg() {
    return (
        <div className='mainDiv'>

            
            <div className='homeimgdiv'>
                <img className='homeimg' src='./homeImg1/Overlay.png'></img>
            </div>

            <div className='starLogo'>
                {/* <img className='Logo' src='./homeImg1/logo.png'></img> */}
            </div>
           
            <nav className='navmain'>
                <ol>
                    <li>Work</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ol>
            </nav>

            <div className='icons'>
                <img className='iconImg' src='./homeImg1/Facebook.png'></img>
                <img className='iconImg' src='./homeImg1/Twitter.png'></img>
                <img className='iconImg' src='./homeImg1/Instagram.png'></img>

            </div>

<div className='ptag'>
<h5>HI, WE’RE ALI STUDIO</h5>
<p>We’re focused on UI/UX 
<br></br>  design, wearable apps and <br></br> interfaces. Feel free to contact us.</p>
</div>

<line className='line'></line>
<line className='line2'></line>
<line className='line3'></line>

<div>
<FontAwesomeIcon className='font' icon={faAngleDown} />
</div>


</div>
    )
}

export default HomeImg