import React from 'react'
import '../Project/Project.css'


function Project() {
  return (
    <div className='proMainDiv'>

      <div id='proD1'>
        <p className='proP'>LATEST PROJECT</p>
        <h1 className='proH1'>Ink. Longread</h1>
        <h5 className='proH5'>Perfect iOS App for reading long and cool stories</h5>
        <button className='proButt'>VIEW PROJECT</button>
      </div>
      <div id='proD2'>
      </div>

      <div id='proD3'>
        <p className='D3P'>OUR PROJECTS</p>
        <h1 className='D3h1'>The Work We Love</h1>
        <a className='D3a'>
          <a>BRANDING</a>
          <a className='aa' style={{color:"#FFFFFF"}}> WEB DESIGN</a>
          <a>ILLUSTRATION</a>
          <a>PHOTOGRAPHY</a>
        </a>
      </div>

<div className='proD4'>
  <img className='D4img1' src='./project/hmimg.png'></img>
  <img src='./project/Image1.png'></img>
  <img src='./project/Image2.png'></img>
  <img src='./project/Image3.png'></img>
  <img src='./project/Image4.png'></img>
  <img src='./project/Image5.png'></img>
  <img src='./project/Image6.png'></img>
  <img src='./project/Image7.png'></img>
 </div>
    </div>
  )
}

export default Project