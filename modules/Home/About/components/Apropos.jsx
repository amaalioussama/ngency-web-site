import Image from "next/image";
import about from '../../../../public/images/about.png';
import img from '../../../../public/images/img.png';
import ourteam from '../../../../public/images/ourteam.png'
export default function Apropos() {

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

  return <div className="flex   border-4  border-t-0 border-l-0 border-r-0 " >

<div className="border-4 border-l-4 border-t-0 border-b-0 -mr-1  ">
      <div className="w-[87px]">
        <div className="absolute ml-6 mt-[400px] w-10">
        <h1
  className="text-black text-3xl font-bold uppercase  "
  style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)', }}
>
À propos
</h1>
        </div>
</div>
</div>
{/* center section */}
<div className=" flex-grow   ">

{/* first section */}
<div className="mt-20 ml-14">
  <div  className=" whitespace-nowrap    " >
    <div className="flex">
    {wordsligne1.map((word,index)=>(

<p className=" text-black text-2xl font-bold font-Allison uppercase" key={index}>  &nbsp;{word}</p>
))}
 {wordsligne2.map((word,index)=>(

<p className="text-2xl font-Light text-black ml-2 mt-[2px] uppercase" key={index}> {word}</p>
))}
    </div>
    {wordsligne3.map((word,index)=>(

<p className="text-2xl font-Light  text-black uppercase" key={index}>{word}</p>
))}
  {wordsligne4.map((word,index)=>(

<p className="text-2xl font-Light text-black uppercase " key={index}>{word}</p>
))}
  {wordsligne5.map((word,index)=>(

<p className="text-2xl font-Light text-black  uppercase" key={index}>{word}</p>
))}
  {wordsligne6.map((word,index)=>(

<p className="text-2xl font-Light text-black flex justify-center items-center uppercase" key={index}> &nbsp;&nbsp; 
{word}</p>
))}

  </div>
  </div>

  <div className="mt-12   border-4 border-l-0 border-b-0 border-r-0">
    <div className="flex justify-center items-center mt-5 mr-10">
      {/* <Image src={ourteam} className="h-9 -mt-2 " alt="logo"/> */}
    <h1 className="text-black text-4xl font-bold  uppercase ml-8">Notre équipe</h1>
    <h1 className="text-black text-4xl font-bold  uppercase ml-8">Notre équipe</h1>
    <h1 className="text-black text-4xl font-bold  uppercase ml-8">Notre équipe</h1>
     {/* <Image src={ourteam} className="h-9 -mt-2 ml-8" alt="logo"/> */}
    </div>
  
</div>
<div className="flex justify-center items-center mt-9  ">
<div className=" bg-meduimwhite border h-[400px] w-[570px] ml-1  ">
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
<p className="font-font-Allison  mt-12">ded by desire, that they cannot foresee <br/> the pain and trouble that are bound to <br/> ensue;
   and equal blame belongs to those <br/> who fail in their duty through weakness of<br/> will, which is</p>
</div>

</div>
<div className="bg-meduimwhite border h-[400px] w-[585px] mr-1 ">
<div className="flex  mt-3 ml-8 ">

<div className=" mt-5   border-2 h-44 w-44   ">
    <Image src={img} className=" ml-2 -mt-2 h-44 w-44  -mb-2    " alt="logo"/>
</div>

<div className=" mt-3 bg-meduimwhite ">
</div>
<div className="-ml-44 mt-10"><h1 className="text-2xl  mt-40 font-bold  uppercase">Nom complete</h1>
</div>
<div className="-ml-44 mt-10">
  <h2 className="text-2xl  mt-48 -ml-6 font-outfit  uppercase">metier</h2>
</div>

<h1 className="text-4xl ml-28 mt-3 font-outfit font-extrabold">“</h1>
<p className="font-Autography mt-12">ded by desire, that they cannot foresee <br/> the pain and trouble that are bound to <br/> ensue;
   and equal blame belongs to those <br/> who fail in their duty through weakness of<br/> will, which is</p>
</div>

</div>



</div>


<div className="mt-8  border-4 border-l-0 border-b-0 border-r-0">

    <div className="flex justify-center items-center mt-5 ">
    
    <h1 className="text-black text-4xl font-bold  uppercase">Nos Valeurs</h1>
   

    </div>
    <div className="flex mt-6">
    <div className="border-4 border-l-0 border-b-0 h-28 w-[390px]">
     
      <h1 className="text-center mt-9 text-black text-3xl font-bold  uppercase">Innovation</h1>
       </div>
       <div className="border-4 border-l-0 border-b-0 h-28 w-[390px] bg-mediumBlue">
     
      <h1 className="text-center mt-9 text-white text-3xl font-bold  uppercase">Collaboration</h1>
       </div>
       <div className="border-4 border-l-0 border-b-0 border-r-0 h-28 w-[390px]">
     
      <h1 className="text-center mt-9 text-black text-3xl font-bold  uppercase">Qualité</h1>
       </div>
    </div>
    <div className="flex ">
    <div className="border-4 border-l-0  h-28  w-[390px] bg-mediumBlue">
     
      <h1 className="text-center mt-9 text-white text-3xl font-bold  uppercase  ">satisfaction client</h1>
       </div>
       <div className="border-4 border-l-0  h-28 w-[390px] ">
     
      <h1 className="text-center mt-9 text-black text-3xl font-bold  uppercase">Intégrité</h1>
       </div>
       <div className="border-4 border-l-0  border-r-0 h-28 w-[390px] bg-mediumBlue">
     
      <h1 className="text-center mt-9 text-white text-3xl font-bold  uppercase ">Respect</h1>
       </div>
    </div>
  
<br/>
<br/>

</div>

</div>

{/* right section */}

<div className="border-4 border-r-0 border-b-0 -mr-1  border-t-0 ">
  <div className=" w-[278px]">

  </div>
   
</div>



  </div>;
}
