import React from 'react'
import '../Sale&Team/Sales.css'


function Sale() {
    return (
        <div className='SaleMainDiv'>

            <h1 className='slH1'>Items for Sale</h1>
            <p className='slP'>Use this UI kit to boost up your great ideas and make your startup awesome.</p>

            <div className='SlCrdMnDv'>

                <div className='saleDiv'>
                    <img src='../Sales/Image5.png'></img>
                    <h3>INK: LONGREAD</h3>
                    <p>Mobile UI Kit</p>
                    <p>$58</p>
                </div>

                <div className='saleDiv'>
                    <img src='../Sales/Image6.png'></img>
                    <h3>MONOBRAND IOS</h3>
                    <p>Mobile UI Kit</p>
                    <p>$38</p>
                </div>

                <div className='saleDiv'>
                    <img src='../Sales/Image7.png'></img>
                    <h3>ALI'S UI KIT</h3>
                    <p>Component Based UI Kit</p>
                    <p>$68</p>
                </div>

                <div className='saleDiv'>
                    <img src='../Sales/Image4.png'></img>
                    <h3>RED MOBILE</h3>
                    <p>Mobile UI Kit</p>
                    <p>$8</p>
                </div>

            </div>

        {/* ////////////// Team member coding start///////////// */}

<div className='TeammainDiv'>
<h3>MEET THE TEAM</h3>
<div className='TeamImgD'>
    <img src='../Sales/Userpic1.png'></img>
    <img src='../Sales/Userpic2.png'></img>
    <img src='../Sales/Userpic3.png'></img>
    <img src='../Sales/Userpic4.png'></img>
    <img src='../Sales/Userpic5.png'></img>
    {/* <img src='../Sales/Overlay.png'></img> */}
</div>
<div className='teamD'>
<h1>Naveed Ali</h1>
<p>Development Director</p>
<p style={{marginTop:"40px"}}>Photographer with a recognizable style focused on the details. Excellent understanding and feels ofthe concept of any project taking part in, whether shooting limited sneaker release, shop interiorsor fashion week.</p>
</div>

<div>
<img style={{marginTop:"40px"}} src='../Sales/Social.png'></img>
</div>

</div>

<div className='TeamDiv2'>
<img src='../Sales/Image.png'></img>
</div>
        </div>
    )
}

export default Sale