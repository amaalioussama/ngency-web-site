import Image from "next/image";
import logo from '@/public/images/logo.png';
import Link from 'next/link'
import negency from "@/public/images/negency.svg"
import mode from '@/public/images/mode.png'
import style from'./style.css'
export default function NavSection() {
  return <div className="flex  border-4  border-t-0 border-l-0 border-r-0">

    <div id="ll1" className="relative  border-4  border-t-0 border-l-0 border-b-0  h-16 w-[89px] xl:w-24">
      <Image id="pic1" src={logo} alt="logo" className=" absolute h-10 w-10 mt-3 ml-8 " />
    </div>
    <div id="cc1" className="felx justify-around bg-mediumBlue  shadow-left-lg" style={{width :"800px"}}>
      <div className="flex mt-5 justify-center items-center">
      <Link href="#" className=" text-white hover:text-slate-200   font-light" style={{fontSize:"15px"}} >Home</Link>
      <Link href="#" className=" ml-3 text-white hover:text-slate-200  font-light" style={{fontSize:"15px"}}>À propos</Link>
      <Link href="#" className=" ml-3 text-white hover:text-slate-200  font-light" style={{fontSize:"15px"}}>Services</Link>
      <Link href="#" className=" ml-3 text-white hover:text-slate-200  font-light" style={{fontSize:"15px"}}>Portfolio</Link>
      <Link href="#" className=" ml-3 text-white hover:text-slate-200  font-light" style={{fontSize:"15px"}}>Blog</Link>
      <Link href="#" className=" ml-3 text-white hover:text-slate-200  font-light" style={{fontSize:"15px"}}>Témoignages</Link>
      <Link href="#" className=" ml-3 text-white hover:text-slate-200  font-light" style={{fontSize:"15px"}}>Contact</Link>
      </div>
    </div>
    <div className="relative  ml-14  h-16 w-64">
      <Image src={negency} alt="logo" className=" absolute -mt-11 h-40 w-36  ml-12" />
    </div>
    <div id="rr1" className="relative  border-1  border-t-0 border-r-0 border-b-0  h-16  flex justify-center items-center  w-28 xl:ml-7 ">
      <Image src={mode} alt="logo" className=" absolute  ml-8   h-14 w-10   " />
    </div>
  </div>;
}
