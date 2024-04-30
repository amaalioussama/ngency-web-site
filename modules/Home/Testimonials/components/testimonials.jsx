import Image from "next/image";
import starts from '@/public/images/starts.png'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Avis = () => {
  

   
  return <div className="flex   border-4  border-t-0 border-l-0 border-r-0 bg-costumgray h-screen" >

<div className="border-4 border-l-4 border-t-0 border-b-0 -mr-1  ">
      <div className="w-[87px]">
        <div className="absolute mt-[200px] ml-5  w-13">
        <h1
  className="text-white text-3xl font-bold uppercase  "
  style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)', }}
>
Nos services
</h1>
        </div>
</div>
</div>
{/* center section */}
<div className=" flex-grow   ">

<div className="  border-4 border-l-0 border-t-0 border-b-0 border-r-0">
       <div className="flex mt-44  justify-center items-center  ">
       
          {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    > */}
    {/* <SwiperSlide>    */}
    <div className="border-2  h-[250px] w-[700px]">
      <div className="relative bg-white -mt-3 ml-2 h-[250px] w-[700px]">
        <div className="absolute mt-8 ml-6">
        <div className=" absolute mt-[12px] w-24 h-24 bg-black rounded-full  ">
                     <div className=" relative ml-[6px] -mt-[2px] w-24 h-24 bg-darkpink rounded-full  border border-black">
              </div>

     </div>
        </div>
      <h1 className=" absolute text-center  ml-36 mt-10 text-black  text-xl font-bold  uppercase">Nom complete</h1>
     
      <h1 className=" absolute text-center  ml-36 mt-[77px]  text-black  text-xl font-bold  uppercase">CEO XYZ</h1>
      <h2 className=" absolute mt-24 ml-32 text-darkpink">__________________________________________________________________________</h2>
      <Image src={starts} className="absolute mt-20 right-12 h-7 w-28"/>
      <p className=" absolute mt-32 ml-[120px] text-xs font-mono text-black ">our power of choice is untrammelled and when nothing prevents our being able to <br/> do what we like best, every pleasure is to be welcomed and every pain avoided. But in <br/> 
      certain circumstances and owing to the claims of duty or the obligations of business<br/>
       it will frequently occur that pleasures have to be repudiated and annoyances <br/> accepted The wise man therefore always holds in these matters.</p>
      </div>

       </div>
       {/* </SwiperSlide> */}
      

            {/* <SwiperSlide> */}   
{/* <div className="border-2  h-[250px] w-[700px]">
  <div className="relative bg-white -mt-3 ml-2 h-[250px] w-[700px]">
    <div className="absolute mt-8 ml-6">
    <div className=" absolute mt-[12px] w-24 h-24 bg-black rounded-full  ">
                 <div className=" relative ml-[6px] -mt-[2px] w-24 h-24 bg-darkpink rounded-full  border border-black">
          </div>

 </div>
    </div>
  <h1 className=" absolute text-center  ml-36 mt-10 text-black  text-xl font-bold  uppercase">Nom complete</h1>
 
  <h1 className=" absolute text-center  ml-36 mt-[77px]  text-black  text-xl font-bold  uppercase">CEO XYZ</h1>
  <h2 className=" absolute mt-24 ml-32 text-darkpink">__________________________________________________________________________</h2>
  <Image src={starts} className="absolute mt-20 right-12 h-7 w-28"/>
  <p className=" absolute mt-32 ml-[120px] text-xs font-mono text-black ">our power of choice is untrammelled and when nothing prevents our being able to <br/> do what we like best, every pleasure is to be welcomed and every pain avoided. But in <br/> 
  certain circumstances and owing to the claims of duty or the obligations of business<br/>
   it will frequently occur that pleasures have to be repudiated and annoyances <br/> accepted The wise man therefore always holds in these matters.</p>
  </div>

   </div> */}
      {/* </SwiperSlide> */}
      {/* </Swiper> */}
      
    </div>
   
  
  
<br/>
<br/>

</div>

</div>

{/* right section */}

<div className="border-4 border-r-0 border-b-0 -mr-1 w-[85px]  border-t-0 ">
  <div className=" w-[278px]">

  </div>
   
</div>



  </div>;
}
export default Avis;