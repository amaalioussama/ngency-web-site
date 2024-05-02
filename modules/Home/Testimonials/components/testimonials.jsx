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
import React from 'react';

const Avis = () => {
  return (
    <motion.div
    initial={{ opacity: 0 , y : -300}}
    animate={{ opacity: 1 , y : 40 }}
    transition={{duration: 1 }}
    whileInView={{ y: -20, opacity: 1 }}  className="flex border-4 border-t-0 border-l-0 border-r-0 bg-grayup h-screen overflow-hidden">
      {/* Left section */}
      <div className="border-4 border-l-4 border-t-0 border-b-0 -mr-1 w-[87px]">
        <div className="absolute mt-[200px] ml-5 w-13">
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
      <h1 className=" absolute text-center  ml-36 mt-10 text-black  text-xl font-bold  uppercase">Nom complete</h1>
     
      <h1 className=" absolute text-center  ml-36 mt-[77px]  text-black  text-xl font-outfitthin  uppercase">CEO XYZ</h1>
      <h2 className=" absolute mt-24 ml-32 text-darkpink">__________________________________________________________________________</h2>
      <Image src={starts} className="absolute mt-20 right-12 h-7 w-28"/>
      <p className=" absolute mt-32 ml-[120px] text-xs font-outfitregular text-black uppercase">our power of choice is untrammelled and when nothing prevents our being able to <br/> do what we like best, every pleasure is to be welcomed and every pain avoided. But in <br/> 
      certain circumstances and owing to the claims of duty or the obligations of business<br/>
       it will frequently occur that pleasures have to be repudiated and annoyances <br/> accepted The wise man therefore always holds in these matters.</p>
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
      <h1 className=" absolute text-center  ml-36 mt-10 text-black  text-xl font-bold  uppercase">Nom complete</h1>
     
      <h1 className=" absolute text-center  ml-36 mt-[77px]  text-black  text-xl font-outfitthin  uppercase">CEO XYZ</h1>
      <h2 className=" absolute mt-24 ml-32 text-darkpink">__________________________________________________________________________</h2>
      <Image src={starts} className="absolute mt-20 right-12 h-7 w-28"/>
      <p className=" absolute mt-32 ml-[120px] text-xs font-outfitregular text-black uppercase ">our power of choice is untrammelled and when nothing prevents our being able to <br/> do what we like best, every pleasure is to be welcomed and every pain avoided. But in <br/> 
      certain circumstances and owing to the claims of duty or the obligations of business<br/>
       it will frequently occur that pleasures have to be repudiated and annoyances <br/> accepted The wise man therefore always holds in these matters.</p>
      </div>

       </div>
     
    </div>
   
  

</div>

</div>

      </SwiperSlide>
   
      
      </Swiper>
     
      <div className="absolute swiper-pagination -mt-40">
        
        </div>
      <div className=" absolute  mt-[550px] ml-[569px] border-2  border-darkpink bg-white h-11 w-64">
     
 <button className=" flex justify-center items-center ml-1 -mt-2    bg-darkpink w-64 h-11">
     <div className="flex"> 
     <h2 className="text-white font-outfitregular text-sm uppercase">Parlez nous de votre projet </h2> 
     <Image src={vertor} alt="img" className=" ml-2 mt-1 h-4 w-4"/>
 </div> 
 </button>
 </div>


      {/* Right section */}
      <div className="border-4 border-r-0 border-b-0 border-t-0 w-[85px]">
      
      </div>
    </motion.div>
  );
}

export default Avis;
