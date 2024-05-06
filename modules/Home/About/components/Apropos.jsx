'use client'
import Image from "next/image";
import about from '@/public/images/about.png';
import img from '@/public/images/img.png';
import ourteam from '@/public/images/ourteam.png'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from "framer-motion"
import style from'./style.css'

export default function Apropos() {
  const initialValues = {
    h1: 'Innovation',
    h2: 'Collaboration',
    h3: 'Qualité',
    h4: 'Satisfaction client',
    h5: 'Intégrité',
    h6: 'Respect',
  };

  const [h1Content, setH1Content] = useState(initialValues.h1);
  const [h2Content, setH2Content] = useState(initialValues.h2);
  const [h3Content, setH3Content] = useState(initialValues.h3);
  const [h4Content, setH4Content] = useState(initialValues.h4);
  const [h5Content, setH5Content] = useState(initialValues.h5);
  const [h6Content, setH6Content] = useState(initialValues.h6);
  const [active ,setActive]= useState(false);

  
  const [h1Style, setH1Style] = useState({
    fontSize: '1.5rem',
    color: 'black',
    fontWeight: 'bold',
  });
  
  const [h2Style, setH2Style] = useState({
 fontSize: '1.5rem',
    color: 'white',
    fontWeight: 'bold',
  });

  const [h3Style, setH3Style] = useState({
 fontSize: '1.5rem',
    color: 'black',
    fontWeight: 'bold',
  });

  const [h4Style, setH4Style] = useState({
 fontSize: '1.5rem',
    color: 'white',
    fontWeight: 'bold',
  });

  const [h5Style, setH5Style] = useState({
 fontSize: '1.5rem',
    color: 'black',
    fontWeight: 'bold',
  });

  const [h6Style, setH6Style] = useState({
 fontSize: '1.5rem',
    color: 'white',
    fontWeight: 'bold',
  });

  const handleClick1 = () => {
    setH1Content(
    "NGENCY s'engage à être constamment à la pointe de l'innovation, en recherchant de nouvelles idées et technologies pour offrir des solutions digitales créatives et avant-gardistes à ses clients."
    );
    setH1Style({
      fontSize: '10px',
      color: 'black',
      fontWeight: 'outfitregular',
      lineHeight: '2.5',
      marginTop :'26px',
      marginLeft :'1px',

    });
  };

  const handleClick2 = () => {
    setH2Content(
    "NGENCY s'engage à être constamment à la pointe de l'innovation, en recherchant de nouvelles idées et technologies pour offrir des solutions digitales créatives et avant-gardistes à ses clients."
    );
    setH2Style({
      fontSize: '10px',
      color: 'white',
      fontWeight: 'outfitregular',
      lineHeight: '2.5',
      marginTop :'26px',
      marginLeft :'1px',

    });
  };

  const handleClick3 = () => {
    setH3Content(
    "NGENCY s'engage à être constamment à la pointe de l'innovation, en recherchant de nouvelles idées et technologies pour offrir des solutions digitales créatives et avant-gardistes à ses clients."
    );
    setH3Style({
      fontSize: '10px',
      color: 'black',
      fontWeight: 'outfitregular',
      lineHeight: '2.5',
      marginTop :'26px',
      marginLeft :'1px',

    });
  };

  const handleClick4 = () => {
    setH4Content(
    "NGENCY s'engage à être constamment à la pointe de l'innovation, en recherchant de nouvelles idées et technologies pour offrir des solutions digitales créatives et avant-gardistes à ses clients."
    );
    setH4Style({
      fontSize: '10px',
      color: 'white',
      fontWeight: 'outfitregular',
      lineHeight: '2.5',
      marginTop :'2px',

    });
  };

  const handleClick5 = () => {
    setH5Content(
    "NGENCY s'engage à être constamment à la pointe de l'innovation, en recherchant de nouvelles idées et technologies pour offrir des solutions digitales créatives et avant-gardistes à ses clients."
    );
    setH5Style({
      fontSize: '10px',
      color: 'black',
      fontWeight: 'outfitregular',
      lineHeight: '2.5',
      marginTop :'2px',

    });
  };

  const handleClick6 = () => {
    setH6Content(
    "NGENCY s'engage à être constamment à la pointe de l'innovation, en recherchant de nouvelles idées et technologies pour offrir des solutions digitales créatives et avant-gardistes à ses clients."
    );
    setH6Style({
      fontSize: '10px',
      color: 'white',
      fontWeight: 'outfitregular',
      lineHeight: '2.5',
      marginTop :'2px',

    });
  };

  const wordsligne1 = [
   "  À Paris, l'équipe passionnée de NGENCY est née avec une mission :"
  ]
  const wordsligne2 = [

    " créer des " 
  ]
  const wordsligne3 = [

    "expériences digitales exceptionnelles. Leur créativité et leur engagement ont" 
  ]
  const wordsligne4 = [

    "séduit de nombreux clients, propulsant NGENCY au sommet du monde digital." 
  ]
  const wordsligne5 = [

    "Aujourd'hui, ils continuent d'inspirer avec leur énergie contagieuse et leur"  
  ]
  const wordsligne6 = [

    "approche innovante."  
  ]

  const handleMouseEnter = (functionNumber) => {
    setActive(functionNumber);
    switch (functionNumber) {
      case 1:
        handleClick1();
        break;
      case 2:
        handleClick2();
        break;
      case 3:
        handleClick3();
        break;
      case 4:
        handleClick4();
        break;
      case 5:
        handleClick5();
        break;
      case 6:
        handleClick6();
        break;
      default:
        console.log("Aucune fonction valide trouvée");
        break;
    }
  };
  const initialStyles = {
    h1: {
      fontSize: '1.5rem',
      color: 'black',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.5rem',
      color: 'black',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '1.5rem',
      color: 'black',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: 'bold',
    },
  };

  const handleMouseLeave = () => {
    setH1Content(initialValues.h1);
    setH2Content(initialValues.h2);
    setH3Content(initialValues.h3);
    setH4Content(initialValues.h4);
    setH5Content(initialValues.h5);
    setH6Content(initialValues.h6);
    setH1Style(initialStyles.h1);
    setH2Style(initialStyles.h2);
    setH3Style(initialStyles.h3);
    setH4Style(initialStyles.h4);
    setH5Style(initialStyles.h5);
    setH6Style(initialStyles.h6);
  };

  

  return <div className="flex   border-4  border-t-0 border-l-0 border-r-0  " >

<div id="ll2"  className="border-4 border-l-4 border-t-0 border-b-0 -mr-1  ">
      <div  className="w-[87px]">
        <div className="absolute ml-6 mt-[400px] w-10">
        <h1 id="txtx2"
  className="text-black text-3xl font-outfitblack   "
  style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)', }}
>
À propos
</h1>
        </div>
</div>
</div>
{/* center section */}
<div id="c" className=" flex-grow -mr-[5px]   ">

{/* first section */}
<motion.div
initial={{ opacity: 0 , y : -30}}
animate={{ opacity: 1 , y : 40 }}
transition={{duration: 1 }}
whileInView={{ y: -6, opacity: 1 }}
className="mt-20 ml-14">
  <div  className=" whitespace-nowrap    " >
    <div className="flex">
    {wordsligne1.map((word,index)=>(

<p className=" text-black text-2xl font-outfitregular uppercase " key={index}>  &nbsp;{word}</p>
))}
 {wordsligne2.map((word,index)=>(

<p className="text-2xl font-extralight text-black ml-2 -mt[2px] uppercase" key={index}> {word}</p>
))}
    </div>
    {wordsligne3.map((word,index)=>(

<p className="text-2xl font-extralight  text-black uppercase" key={index}>{word}</p>
))}
  {wordsligne4.map((word,index)=>(

<p className="text-2xl font-extralight text-black uppercase " key={index}>{word}</p>
))}
  {wordsligne5.map((word,index)=>(

<p className="text-2xl font-extralight text-black  uppercase" key={index}>{word}</p>
))}
  {wordsligne6.map((word,index)=>(

<p className="text-2xl font-extralight text-black flex justify-center items-center uppercase" key={index}> &nbsp;&nbsp; 
{word}</p>
))}

  </div>
  </motion.div>

  <div   className="mt-12   border-4 border-l-0 border-b-0 border-r-0">
    <div className="flex justify-center items-center mt-5 mr-10">

    <h1 className="text-black text-4xl font-bold  uppercase ml-8">Notre équipe</h1>
    <h1 className="text-black text-4xl font-bold  uppercase ml-8">Notre équipe</h1>
    <h1 className="text-black text-4xl font-bold  uppercase ml-8">Notre équipe</h1>

    </div>
  
</div>

<div
className="mt-20 ">
  
   <div>
  
  <Swiper
modules={[Pagination, Scrollbar, A11y]}
pagination={{
  clickable: true,
  el: '.swiper-pagination',
}}

spaceBetween={1}
slidesPerView={1}
loop={true}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
className="w-[1188px] -mr-3 "

>

<SwiperSlide >
<div className="flex justify-center items-center mt-9  ">

<div id="ez" className=" bg-meduimwhite border h-[400px] w-[800px] ml-1  ">
<div className="flex  mt-3 ml-8 ">

<div className=" mt-5   border-2 h-44 w-44   ">
<Image src={img} className=" ml-2 -mt-2 h-44 w-44  -mb-2    " alt="logo"/>
</div>

<div className=" mt-3 bg-meduimwhite ">
</div>
<div className="-ml-44 mt-10"><h1 className="text-2xl  mt-40 font-bold  uppercase">Nom complete</h1>
</div>
<div className="-ml-44 mt-10">
<h2 className="text-2xl  mt-48 -ml-6 font-mono  uppercase">metier</h2>
</div>

<h1 className="text-4xl ml-28 mt-3 font-font-Allison  font-extrabold">“</h1>
<p className="font-outfitregular  mt-12">ded by desire, that they cannot foresee <br/> the pain and trouble that are bound to <br/> ensue;
and equal blame belongs to those <br/> who fail in their duty through weakness of<br/> will, which is</p>
</div>

</div>
<div id="ez2" className="bg-meduimwhite border h-[400px] w-[850px] mr-4  ">
<div className="flex  mt-3 ml-8 ">

<div className=" mt-5   border-2 h-44 w-44   ">
<Image src={img} className=" ml-2 -mt-2 h-44 w-44  -mb-2    " alt="logo"/>
</div>

<div className=" mt-3 bg-meduimwhite  ">
</div>
<div className="-ml-44 mt-10"><h1 className="text-2xl  mt-40 font-bold  uppercase">Nom  complete</h1>
</div>
<div className="-ml-44 mt-10">
<h2 className="text-2xl  mt-48 -ml-6 font-outfit  uppercase">metier</h2>
</div>

<h1 className="text-4xl ml-28 mt-3 font-outfit font-extrabold">“</h1>
<p className="font-outfitregular mt-12">ded by desire, that they cannot foresee <br/> the pain and trouble that are bound to <br/> ensue;
and equal blame belongs to those <br/> who fail in their duty through weakness of<br/> will, which is</p>
</div>

</div>



</div>
</SwiperSlide>
<SwiperSlide >
<div className="flex justify-center items-center mt-9  ">

<div className=" bg-meduimwhite border h-[400px] w-[800px] ml-1  ">
<div className="flex  mt-3 ml-8 ">

<div className=" mt-5   border-2 h-44 w-44   ">
<Image src={img} className=" ml-2 -mt-2 h-44 w-44  -mb-2    " alt="logo"/>
</div>

<div className=" mt-3 bg-meduimwhite ">
</div>
<div className="-ml-44 mt-10"><h1 className="text-2xl  mt-40 font-bold  uppercase">Nom complete</h1>
</div>
<div className="-ml-44 mt-10">
<h2 className="text-2xl  mt-48 -ml-6 font-mono  uppercase">metier</h2>
</div>

<h1 className="text-4xl ml-28 mt-3 font-font-Allison  font-extrabold">“</h1>
<p className="font-outfitregular  mt-12">ded by desire, that they cannot foresee <br/> the pain and trouble that are bound to <br/> ensue;
and equal blame belongs to those <br/> who fail in their duty through weakness of<br/> will, which is</p>
</div>

</div>
<div className="bg-meduimwhite border h-[400px] w-[850px] mr-4  ">
<div className="flex  mt-3 ml-8 ">

<div className=" mt-5   border-2 h-44 w-44   ">
<Image src={img} className=" ml-2 -mt-2 h-44 w-44  -mb-2    " alt="logo"/>
</div>

<div className=" mt-3 bg-meduimwhite  ">
</div>
<div className="-ml-44 mt-10"><h1 className="text-2xl  mt-40 font-bold  uppercase">Nom  complete</h1>
</div>
<div className="-ml-44 mt-10">
<h2 className="text-2xl  mt-48 -ml-6 font-outfit  uppercase">metier</h2>
</div>

<h1 className="text-4xl ml-28 mt-3 font-outfit font-extrabold">“</h1>
<p className="font-outfitregular mt-12">ded by desire, that they cannot foresee <br/> the pain and trouble that are bound to <br/> ensue;
and equal blame belongs to those <br/> who fail in their duty through weakness of<br/> will, which is</p>
</div>

</div>



</div>
</SwiperSlide>

</Swiper></div></div>



<motion.div
initial={{ opacity: 0 , y : -300}}
animate={{ opacity: 1 , y : 40 }}
transition={{duration: 1 }}
whileInView={{ y: -40, opacity: 1 }}
className="mt-20 "><div  id="is" className="mt-8  border-4 border-l-0 border-b-0 border-r-0">

    <div className="flex justify-center items-center mt-5 ">
    
    <h1 className="text-black text-4xl font-bold  uppercase">Nos Valeurs</h1>
   

    </div>
    <div className="flex mt-6">
    <div className="border-2 border-l-1 border-b-0 h-28 w-[390px] "
     onMouseOver={() => handleMouseEnter(1)} 
     onMouseLeave={handleMouseLeave}>
              <h1 className="text-center mt-9 uppercase duration-600" style={h1Style}>
                {h1Content}
              </h1>
            </div>
            <div className="border-2 border-l-0 border-b-0 h-28 w-[390px] bg-mediumBlue" 
            
            onMouseOver={() => handleMouseEnter(2)} 
            onMouseLeave={handleMouseLeave}>
              <h1 className="text-center mt-9 uppercase duration-600" style={h2Style}>
                {h2Content}
              </h1>
            </div>
            <div className="border-2 border-l-0 border-b-0 border-r-1 h-28 w-[386px]"
              onMouseOver={() => handleMouseEnter(3)} 
              onMouseLeave={handleMouseLeave}>
              <h1 className="text-center mt-9 uppercase duration-600" style={h3Style}>
                {h3Content}
              </h1>
            </div>
          </div>


          <div className="flex ">
            <div className="border-4 border-l-1 h-28   w-[390px] bg-mediumBlue"
              onMouseOver={() => handleMouseEnter(4)} 
              onMouseLeave={handleMouseLeave}>
              <h1 className="text-center mt-9 uppercase duration-600" style={h4Style}>
                {h4Content}
              </h1>
            </div>
            <div className="border-4 border-l-0 h-28 w-[390px]"  onMouseOver={() => handleMouseEnter(5)} 
     onMouseLeave={handleMouseLeave}>
              <h1 className="text-center mt-9 uppercase duration-600" style={h5Style}>
                {h5Content}
              </h1>
            </div>
            <div className="border-4 border-l-0 border-r-1 h-28 w-[386px] bg-mediumBlue"   onMouseOver={() => handleMouseEnter(6)} 
     onMouseLeave={handleMouseLeave}>
              <h1 className="text-center mt-9 uppercase duration-600" style={h6Style}>
                {h6Content}
              </h1>
            </div>
    </div>
  

</div>
</motion.div>

</div>



<div id="rr2" className="border-4 border-r-0 border-b-0 -mr-1  border-t-0  w-[390px]">
 
</div>



  </div>;
}
