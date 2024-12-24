import React, { useEffect, useRef, useState } from 'react'
import Tilttext from './Components/Page_1 Comp/Tilttext'
import Header from '../Others/Header';
import Dream from './Components/Page_1 Comp/Dream';
import Footer from './Components/Page_1 Comp/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Page1 = () => {
    const tilttext = useRef(null);
    /*Use Ref is a method which returns an object with single property(current:) which has my actual element(from real dom by virtual DOM)
    Note : ref={userefstateVariablename} i.e, tiltRef */
    const [Xvalue, setXvalue] = useState(null);
    const [Yvalue, setYvalue] = useState(null);

    const mouseMove = (e) => {
        setXvalue((e.clientX - tilttext.current.getBoundingClientRect().x - tilttext.current.getBoundingClientRect().width / 2) / 10);
        setYvalue(-(e.clientY - tilttext.current.getBoundingClientRect().y - tilttext.current.getBoundingClientRect().height / 2) / 6);
        // tilttext.current.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`;
    }


    
useGSAP(function(){
    gsap.to(tilttext.current,{
        transform: `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`,
        duration: 4,
        ease: "elastic.out",
    })
},[Xvalue,Yvalue])



    /*
    getBoundingClientRect();
    It is a special Object in JS which has all the data of an element:
     . It location with respect to viewport.. 
     . It dimension  (width,height) where it is located from top bottom left and right of screen  these six things are in this object(height,width,screen ky according top,bottom,left,right) 
    Added Event Listener on the Parent(From whose Reference, rotatation is going to be manipulated...)
    Now, accessing the Respective Div...(The Element on which I have to perform the function....)//UseRef
    //Parent(PageOne)...Percepective(i.e 500px,relative);
    */
    return (
        <div id="pageOne" onMouseMove={(e)=>{
            mouseMove(e);
        }} ><img src="https://static.wixstatic.com/media/f1c650_50b3eb1a161343a6a87b1fe48cb27f9a~mv2.png/v1/fill/w_501,h_749,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Astro%20Me.png" alt="" />
           <Header/>
           <Dream/>
            <Tilttext tilttext={tilttext} />
            <Footer/>
        </div>
    )
}

export default Page1