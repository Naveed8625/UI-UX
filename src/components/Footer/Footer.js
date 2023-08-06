import React from 'react'
import "../Footer/footerpg.css"


function Footerpage() {
    return (
        <div className='footerMainDiv'>

            <div className='footD1'>
                <img style={{ height: "200px", width: "100%" }} src='./footer/Overlay.png'></img>
            </div>
            <div className='ftBtDiv'>
                <button>HIRE US</button>
            </div>
           {/* ///////////  footer start //////// */}

             <div className='footD3'>
<div className='f1'>
    <img src='./footer/logo.png'></img>
    <p>Russian expansion into the Buryat area around Lake Baikal in 1628–1658 was part of the Russian conquest of Siberia. A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
    <p>© 2014 Baikal UI Kit All rights reserved</p>
</div>

<div className='f2'>
    <h3>CONTACT US</h3>
    <p>Hello@Baikal.com</p>
    <p>Studio M, 4th Floor8 Lower Street Manchester, M1 5QF</p>
     <p>+11 22 33 44 55 66</p>
</div>
<div className='f3'>
    <h3>SUBSCRIBE NOW</h3>
<p>Sign up if you want to get notifications</p>
<p>E-mail</p>

</div>


             </div>

        </div>
    )
}

export default Footerpage