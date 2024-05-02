'use client'
import Image from "next/image";
import home from '@/public/images/home.png';
import img from '@/public/images/img.png';
import fb from '@/public/images/fb.png'
import insta from '@/public/images/insta.png'
import twiter from '@/public/images/twiter.png'
import Pintrest from '@/public/images/Pintrest.png'
import vertor from '@/public/images/Vector.png'
import { motion } from "framer-motion"
import React from 'react';
export default function Herocomponent() {

  const wordsligne1 = [

    "T","R","A","N","S","F","O","R","M","E","R",<br/>," V","O","T","R","E "," "," ","V","I","S","I","O","N",<br/>,"R","É","A","L","I","T","É" 
  ]
 
  const wordsligne4 = [

    "D","i","g","i","t","a","l" 
  ]
  const wordsligne5 = [

    "C", "h", "e", "z", " ", "N", "G", "E", "N", "C", "Y", " ", "n", "o", "u", "s", " ", "t", "r", "a", "n", "s", "f", "o", "r", "m", "o", "n", "s", " ", "v", "o", "s", " ", "i", "d", "é", "e", "s", " ", "e", "n", " ", "r", "é", "a", "l", "i", "t", "é", <br/>,
     "d", "i", "g", "i", "t", "a", "l", "e", ".", " ", "P", "a", "r", "l", "e", "z", " ", "à", " ", "u", "n", " ", "c", "o", "n", "s", "u", "l", "t", "a", "n", "t", " ", "d", "è", "s", " ", "m", "a", "i", "n", "t", "e", "n", "a", "n", "t", " ", "p", "o", "u", "r", " ", "u", "n", "e", <br/>,
      "c", "o", "n", "s", "u", "l", "t", "a", "t", "i", "o", "n", " ", "g", "r", "a", "t", "u", "i", "t", "e", " ", "e", "t", " ", "d", "é", "c", "o", "u", "v", "r", "e", "z", " ", "c", "o", "m", "m", "e", "n", "t", " ", "n", "o", "u", "s", " ", "p", "o", "u", "v", "o", "n", "s", <br/>, "a", "c", "t", "i", "v", "e", "r", " ", "l", "e", " ", "p", "l", "e", "i", "n", " ", "p", "o", "t", "e", "n", "t", "i", "e", "l", " ", "d", "e", " ", "v", "o", "t", "r", "e", " ", "m", "a", "r", "q", "u", "e", " ", "d", "i", "g", "i", "t", "a", "l", "e", "."

  ]

  return <div className="flex   border-4  border-t-0 border-l-0 border-r-0 bg-meduimwhite"  style={{height : "568px"}}>

<div className="border-4 border-l-4 border-t-0 border-b-0 w-[96px] ">
      <div className="relative">
        <div className="absolute ml-6 mt-56 w-7">
        <h1
  className="text-black text-3xl font-outfitblack   "
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
<div className="whitespace-nowrap">
      
 
{wordsligne1.map((word, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: index * 0.08 }}
                className="text-black text-6xl font-extrabold"
            >
                {word}
            </motion.span>
            
        ))}


  
   
    

    {wordsligne4.map((word, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: wordsligne1.length * 0.08 + 0.01 }}
                className="-mb-10 ml-1 font-allison text-7xl text-mediumBlue"
            >
                {word}
            </motion.span>
        ))}

       
    </div>
  
    <div className="mt-3">
    <div>
            {wordsligne5.map((character, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.02,  delay: (index * 0.008) + (wordsligne1.length * 0.1 + 0.01) }}
                    className="text-base font-mono text-black"
                >
                    {character}
                </motion.span>
            ))}
        </div>
    </div>
 <div> 
 <motion.div 
  initial={{ y:-35 , opacity:0 }}
  animate={{ y: 20 ,opacity : 1 }}
  transition={{ duration:3, delay: 0.1 }}
 
 className=" relative ml-20 mt-9 border-2  border-mediumBlue h-11 w-52">
 
<button className=" flex justify-center items-center ml-2 -mt-3    bg-mediumBlue w-60 h-11">
    <div className="flex"> 
    <h2 className="text-white font-outfitregular text-sm uppercase">Découvrez nos services </h2> 
    <Image src={vertor} alt="img" className=" ml-2 mt-1 h-4 w-4"/>
</div> 
</button>
</motion.div>
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
    
    <a href="https://www.instagram.com" className="block mt-20">
        <Image src={insta} className="absolute ml-6 mt-56 w-7" alt="logo"/>
    </a>
   
    <a href="https://www.twitter.com" className="block mt-40">
        <Image src={twiter} className="absolute ml-6 mt-56 w-7"alt="logo" />
    </a>
   
    <a href="https://www.pinterest.com" className="block mt-60">
        <Image src={Pintrest} className="absolute ml-6 mt-56 w-7" alt="logo" />
    </a>
</div>


  </div>;
}
