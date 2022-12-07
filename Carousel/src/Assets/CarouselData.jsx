import React, { useState,useEffect } from "react";
import axios from 'axios';
import Carousel from "../Components/Carousel";
export const images = []
const BASE_URL = process.env.REACT_APP_BASE_URL;
export function CarouselData(props) {
    const [renderCarousel, setRenderCarousel] = useState(false);
    async function add(){
            axios.get(`${BASE_URL}/api/carousel/${props.Slides}`,{})
            .then(response=>{
            const json = response.data.user
            let seted2= Object.keys(json).map(i => ({ title: json[i].title, subTitle: json[i].subTitle, image: json[i].image}))
            for (var i=0; i< seted2.length; i++){
                images.push(seted2[i])
            } console.log('aaa' + seted2)
            if(images!==null){

                setRenderCarousel(true);
            }
            return images
            
        })
        .catch(err=>{
            console.log(err)
        })
        }
        useEffect( ()=>{
                add();
        },[])
        return(
            <>
            <div id="parent">
              {renderCarousel && <Carousel Slides={props.Slides} Infinite={props.Infinite}/>}
            </div>
           </>
        )
        //return {images}
    }

    export default CarouselData;
