'use client'
import { motion } from "framer-motion"
import React from 'react';
const Whyus = () => {
    return (
        <motion.div
        initial={{ opacity: 0 , y : -300}}
        animate={{ opacity: 1 , y : 40 }}
        transition={{duration: 1 }}
        whileInView={{ y: -40, opacity: 1 }} className="relative bg-grayup mt-5 h-[580px]">
            <div className="">
            <h1 className=" absolute ml-96 mt-9 flex justify-center items-center text-white text-4xl uppercase font-bold"> Pourquoi notre agence ?</h1>
          
            </div>
            <motion.div
        initial={{ opacity: 0 , y : 10}}
        animate={{ opacity: 1 , y : 40 }}
        transition={{duration: 1 }}
        whileInView={{ y: -40, opacity: 1 }} className="absolute flex  mt-52 ml-11">
                <div className="absolute  ">
                    <div className="relative ml-9  bg-darkpink h-[150px] w-[358px]">

                        <div className="absolute bg-mediumBlue  h-[150px] w-[355px]">
                            <div className=" absolute border-4 bg-darkpink flex h-36 w-[350px] ">
                                <h1 className="ml-2 text-white text-4xl font-bold uppercase flex items-center justify-center">
                                    + X             </h1>
                                <span className="text-white text-xl font-bold uppercase ml-4 flex items-center justify-center">
                                    années d'expérience <br /> dans l'industrie.
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

                <div className=" absolute border-4 bg-white flex h-36 w-[350px] ml-[450px]">
                    <h1 className="ml-2 text-black text-5xl font-bold uppercase flex items-center justify-center">
                        + X
                    </h1>
                    <span className="text-black text-xl font-bold uppercase ml-4 flex items-center justify-center">
                        années d'expérience <br /> dans l'industrie.
                    </span>
                </div>

                <div className=" absolute border-4 bg-white flex h-36 w-[350px] ml-[860px] ">
                    <h1 className="ml-2 text-black text-5xl font-bold uppercase flex items-center justify-center">
                        X %
                    </h1>
                    <span className="text-black text-xl font-bold uppercase ml-4 flex items-center justify-center">
                        années d'expérience <br /> dans l'industrie.
                    </span>
                </div>
            </motion.div>
          <motion.div
        initial={{ opacity: 0 , y : -300}}
        animate={{ opacity: 1 , y : 40 }}
        transition={{duration: 1 }}
        whileInView={{ y: -40, opacity: 1 }}className="absolute flex  mt-96 ml-11">
                <div className=" absolute border-4 bg-white flex h-36 w-[350px] ml-10 ">
                    <div className="flex">  <span className=" ml-3 mt-3 text-black font-bold uppercase ">Nous avons aidé nos clients à
                        atteindre une augmentation
                        moyenne dans leur
                        chiffre d'affaires de   <h1 className="  ml-52 -mt-6  text-black text-5xl font-bold uppercase">
                        X %
                    </h1> 
                    </span>
                    </div>
                  
                </div>
                <div className=" absolute border-4 bg-white flex h-36 w-[350px] ml-[450px] ">
                    <div className="flex">  <span className=" ml-3 mt-3 text-black font-bold uppercase ">Nos campagnes de marketing numérique ont généré un
                     trafic accru
                     sur les sites web de nos clients de  <h1 className="  ml-52 -mt-6  text-black text-5xl font-bold uppercase">
                        X %
                    </h1> 
                    </span>
                    </div>
                  
                </div>
                <div className=" absolute border-4 bg-white flex h-36 w-[350px] ml-[860px] ">
                    <div className="flex">  <span className=" absolute mt-4 ml-5  text-black text-5xl font-bold uppercase">
                        X                    </span>
                    <span className=" absolute ml-12 mt-9 text-black font-bold uppercase ">
                        
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;récompenses et <br/>
                       
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reconnaissances pour<br/>
<span className="-ml-14">&nbsp;&nbsp;&nbsp;notre excellence dans le domaine.</span> 

 
                    </span>
                    </div>
                  
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Whyus;
