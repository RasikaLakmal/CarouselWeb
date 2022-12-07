import React, { useState,useEffect } from "react";
import "./Carousel.css";
import {images} from "../Assets/CarouselData";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";

function Carousel(props) {
    //const { images } = CarouselData()
    const [currImg, setCurrImg] = useState(0);
        console.log('aaaa' + images)
    return (
        <div className="carousel">
            {props.Infinite==='false'?
        <div
            className="carouselInner"
            style={{ backgroundImage: `url(${images[currImg].image})` }}
        >
            <div
            className="left"
            onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
            }}
            >{currImg > 0?
            <AiOutlineArrowLeft style={{ fontSize: 30 }} />:null}
            </div>
            <div className="center" style={{ alignItems: 'center'}}>
            <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subTitle}</p>
            </div>
            <div
            className="right"
            onClick={() => {
                currImg < props.Slides - 1 && setCurrImg(currImg + 1);
            }}
            >{currImg < (props.Slides - 1)?
            <AiOutlineArrowRight style={{ fontSize: 30 }} />:null}
            </div>
        </div>
        :
        <div
            className="carouselInner"
            style={{ backgroundImage: `url(${images[currImg].image})` }}
        >
            <div
            className="left"
            onClick={() => {
                if(currImg > 0){setCurrImg(currImg - 1);}
                else{setCurrImg(props.Slides - 1)}
            }}
            >
            <AiOutlineArrowLeft style={{ fontSize: 30 }} />
            </div>
            <div className="center" style={{ alignItems: 'center'}}>
            <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subTitle}</p>
            </div>
            <div
            className="right"
            onClick={(e) => {
                if(currImg < props.Slides - 1){setCurrImg(currImg + 1);}
                else{setCurrImg(0);}
            }}
            >
            <AiOutlineArrowRight style={{ fontSize: 30 }} />
            </div>
        </div>}
        </div>
    );
}

export default Carousel;
