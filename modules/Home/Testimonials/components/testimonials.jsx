'use client'
import Image from 'next/image';
import starts from '@/public/images/starts.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import vertor from '@/public/images/Vector.png'
import '../../../../styles/globals.css';
import { motion } from "framer-motion"
import React  from 'react';
import style from'./style.css'
import { createClient } from "next-sanity";
import { useState } from 'react';
import { useEffect } from 'react';

export const client = createClient({
  projectId: 'pa5zw0oj',
  dataset: 'production',
  apiVersion: "v2022-03-07",
  useCdn: true,       
});

const Avis = () => {
  const [description, setDescription] = useState([]);

useEffect(() => {
  
  const fetchData = async () => {
    try {
      const data = await client.fetch('*[_type == "temonologies"]');
      setDescription(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);
  return (
    <motion.div
    initial={{ opacity: 0 , y : -100}}
    animate={{ opacity: 1 , y : 40 }}
    transition={{duration: 1 }}
    whileInView={{ y: -20, opacity: 1 }} 
    id="aaalll"
    className="flex border-4 border-l-0 border-r-0 bg-grayup h-screen overflow-hidden">
  
      <div      id="tt2"  className="border-4  border-t-0 border-b-0 -mr-1 w-[87px]">
        <div id="hqd" className="absolute mt-[200px] ml-5 w-13">
          <h1
            className="text-white text-3xl font-outfitblack "
            style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
          >
           Témoignages
          </h1>
        </div>
      </div>

      {/* Center section */}
    
      <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            pagination={{
              clickable: true,
             
          }}
         
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-[700px] h-[500px]"
          >
               <SwiperSlide>
               <div className=" flex-grow   ">

<div className="  border-4 border-l-0 border-t-0 border-b-0 border-r-0">
       <div className="flex mt-44  justify-center items-center  ">
       
        
    <div className="border-2  h-[250px] w-[700px]">
      <div className="relative bg-white -mt-3 ml-2 h-[250px] w-[700px]">
        <div className="absolute mt-8 ml-6">
        <div className=" absolute mt-[12px] w-24 h-24 bg-black rounded-full  ">
                     <div className=" relative ml-[6px] -mt-[2px] w-24 h-24 bg-darkpink rounded-full  border border-black">
              </div>

     </div>
        </div>
        {description[0] && (
    
      <h1 className=" absolute text-center  ml-36 mt-10 text-black  text-xl font-bold  uppercase"> <a className="textb" href="cavaille-avocat.com
      "></a> {description[0].name}</h1>
    )}
      {description[0] && (
      
      <h1 className=" absolute text-center  ml-36 mt-[77px]  text-black  text-xl font-outfitthin  uppercase">{description[0].job}</h1>
    )}

      <h2 className=" absolute mt-24 ml-32 text-darkpink">__________________________________________________________________________</h2>
      <Image src={starts} className="absolute mt-20 right-12 h-7 w-28" alt='ll'/>
      {description[0] && (
      <p className=" absolute mt-32 ml-[106px] text-xs font-outfitregular text-black uppercase"> {description[0].description}</p>
           )}
      </div>
       </div>
    </div>

</div>

</div>

      </SwiperSlide>
      <SwiperSlide>
               <div className=" flex-grow   ">

<div className="  border-4 border-l-0 border-t-0 border-b-0 border-r-0">
       <div className="flex mt-44  justify-center items-center  ">
       
        
    <div className="border-2  h-[250px] w-[700px]">
      <div className="relative bg-white -mt-3 ml-2 h-[250px] w-[700px]">
        <div className="absolute mt-8 ml-6">
        <div className=" absolute mt-[12px] w-24 h-24 bg-black rounded-full  ">
                     <div className=" relative ml-[6px] -mt-[2px] w-24 h-24 bg-darkpink rounded-full  border border-black">
              </div>

     </div>
        </div>
        {description[1] && (
    
      <h1 className=" absolute text-center  ml-36 mt-10 text-black  text-xl font-bold  uppercase"> {description[1].name}</h1>
    )}
      {description[1] && (
      
      <h1 className=" absolute text-center  ml-36 mt-[77px]  text-black  text-xl font-outfitthin  uppercase">{description[1].job}</h1>
    )}

      <h2 className=" absolute mt-24 ml-32 text-darkpink">__________________________________________________________________________</h2>
      <Image src={starts} className="absolute mt-20 right-12 h-7 w-28" alt='ll'/>
      {description[1] && (
      <p className=" absolute mt-32 ml-[120px] text-xs font-outfitregular text-black uppercase"> {description[1].description}</p>
           )}
      </div>
       </div>
    </div>

</div>

</div>

      </SwiperSlide>
      
      </Swiper>
     
      <div className="absolute swiper-pagination -mt-40">
        
        </div>
      <div id='grg' className=" absolute  mt-[550px] ml-[560px] border-2  border-darkpink bg-white h-11 w-64">
     
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "#cc3399"
        }}
        transition={{ duration: 0.5}}  className=" flex justify-center items-center ml-1 -mt-2    bg-darkpink w-64 h-11">
     <div className="flex"> 
     <h2 className="text-white font-outfitregular text-sm uppercase">Parlez nous de votre projet </h2> 
     <Image src={vertor} alt="img" className=" ml-2 mt-1 h-4 w-4" />
 </div> 
 </motion.button>
 </div>


      {/* Right section */}
      <div id='resqs' className="border-4 border-r-0 border-b-0 border-t-0 w-[85px]">
      
      </div>
    </motion.div>
  );
}

export default Avis;
