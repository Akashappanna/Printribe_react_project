import React, { useRef, useState,useEffect } from 'react'
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import {fabric} from 'fabric';
import img1 from '../assets/tshirtblack.PNG';
import img2 from '../assets/tshirtblue.PNG';
import img3 from '../assets/tshirtblack.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/style.css'
function Custom_design () {

    const [images,setImages] = useState(img1);
  //   const [canvas, setCanvas] = useState('');
  // const [imgURL, setImgURL] = useState('');
  // useEffect(() => {
  //   ...
  // }, []);  
  
  // const initCanvas = () => (
  //   ...
  // );
  // const addRect = canvi => {
  //   ...
  // }
  // const addImg = (e, url, canvi) => {
  //   e.preventDefault();
  //   new fabric.Image.fromURL(url, img => {
  //     img.scale(0.75);
  //     canvi.add(img);
  //     canvi.renderAll();
  //     setImgURL('');
  //   });
  // }
    return (
        <>
            <div className="container my-4 h2 fw-bold">
                <div className="row py-4">
                   <p className='text-center'>Start your desgin</p>
                    <div className="col-lg-6 col-md-12">
                        <div className="row ai">                    
                            <div className="col-lg-2 col-md-2 col-3 ti" >
                                    <div >
                                        <img src={img1} onClick={
                                            () => setImages(img1)
                                        }/>
                                    </div>
                                    <div >
                                        <img src={img2} onClick={
                                            () => setImages(img2)
                                        }/>
                                    </div>
                                    <div >
                                        <img src={img3} onClick={
                                            () => setImages(img3)
                                        }/>
                                    </div>
                                    <div >
                                        <img src={img1} onClick={
                                            () => setImages(img1)
                                        }/>
                                    </div>
                                    <div >
                                        <img src={img2} onClick={
                                            () => setImages(img2)
                                        }/>
                                    </div>
									<div >
                                        <img src={img3} onClick={
                                            () => setImages(img3)
                                        }/>
                                    </div>
                            </div>

                            <div className='col-lg-10 col-md-10 col-9 fi' style={{position:"relative"}}>
								  <img className="fi_image" src={images}/>
                            </div>
                        </div>
                    </div>

                    {/* <div>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <form onSubmit={e => addImg(e, imgURL, canvas)}>
        <div>
          <input 
            type="text" 
            value={imgURL} 
            onChange={ e => setImgURL(e.target.value)} 
          />
          <button type="submit">Add Image</button>
        </div>
      </form>
     <br/><br/>
     <canvas id="canvas" />
    </div> */}

{/* rgtrrvf */}
                </div>
             </div>
        </>
    )
}

export default Custom_design;