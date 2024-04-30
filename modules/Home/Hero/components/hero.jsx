import Image from "next/image";

import img from '../../../../public/images/img.png';
import fb from '../../../../public/imagesfb.png'
import insta from '../../../../public/images/insta.png'
import twiter from '../../../../public/images/twiter.png'
import Pintrest from '../../../../public/images/Pintrest.png'
import vertor from '../../../../public/images/Vector.png'
export default function Herocomponent() {

  const wordsligne1 = [

    "TRANSFORMER" 
  ]
  const wordsligne2 = [

    " VOTRE VISION EN" 
  ]
  const wordsligne3 = [

    "RÉALITÉ" 
  ]
  const wordsligne4 = [

    "Digital" 
  ]
  const wordsligne5 = [

    "Chez NGENCY, nous transformons vos idées en réalité ",
    "digitale. Parlez à un consultant dès maintenant pour une",
    "consultation gratuite et découvrez comment nous pouvons",
    "activer le plein potentiel de votre marque digitale"   
  ]

  return <div className="flex   border-4  border-t-0 border-l-0 border-r-0" style={{height : "568px"}}>

<div className="border-4 border-l-4 border-t-0 border-b-0 w-[96px] ">
      <div className="relative">
        <div className="absolute ml-6 mt-56 w-7">
        <h1
  className="text-black text-3xl font-bold uppercase  "
  style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)', }}
>
Home
</h1>
        </div>
</div>
</div>
{/* center section */}
<div className="flex flex-grow  ml-11">
<div className="mt-20 ">
  <div  className=" whitespace-nowrap " >
  <h1 className="text-black text-6xl font-extrabold">
        {wordsligne1.join(' ')}
    </h1>
    <h1 className="text-black text-6xl font-extrabold">
        {wordsligne2.join(' ')}
    </h1>
    <div className="flex">
        <h1 className="text-black text-6xl font-extrabold">
            {wordsligne3.join(' ')}
        </h1>
        <h1 className="mt-2 ml-4 font-zindsong text-6xl text-mediumBlue">
  {wordsligne4.map((word, index) => (
    <span key={index}>
      {word}
    </span>
  ))}
</h1>
    </div>
  </div>
  
 <div className="mt-3">
  {wordsligne5.map((word,index)=>(

    <p className="text-base font-mono text-black " key={index}>{word}</p>
  ))}
 </div>
 <div> 
 <div className=" relative ml-20 mt-9 border-2  border-mediumBlue h-11 w-52">
 
<button className=" flex justify-center items-center ml-2 -mt-3    bg-mediumBlue w-60 h-11">
    <div className="flex"> 
    <h2 className="text-white font-bold text-sm uppercase">Découvrez nos services </h2> 
    <Image src={vertor} alt="img" className=" ml-2 mt-1 h-4 w-4"/>
</div> 
</button>
</div>
 </div>

</div>
<div className=" relative ml-14 -mr-12 mt-28 border-2  border-pink-500 h-96 w-96">
    <Image src={img} className=" ml-2 -mt-3 h-96  -mb-2    " alt="logo"/>
</div>
</div>
{/* right section */}

<div className="border-4 border-r-0 border-b-0 ml-[86px] w-[86px] -mt-20">
    <a href="https://www.facebook.com" className="block">
        <Image src={fb} className="absolute ml-6 mt-56 w-7" alt="logo"/>
    </a>
    <br />
    <br />
    <br />
    <a href="https://www.instagram.com" className="block">
        <Image src={insta} className="absolute ml-6 mt-56 w-7" alt="logo"/>
    </a>
    <br />
    <br />
    <br />
    <a href="https://www.twitter.com" className="block">
        <Image src={twiter} className="absolute ml-6 mt-56 w-7"alt="logo" />
    </a>
    <br />
    <br />
    <br />
    <a href="https://www.pinterest.com" className="block">
        <Image src={Pintrest} className="absolute ml-6 mt-56 w-7" alt="logo" />
    </a>
</div>


  </div>;
}
