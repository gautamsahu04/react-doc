import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={ reference }  whiledrag={{scale: 1.2}} dragElastic = {0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="w-60 h-72  flex-shrink-0 rounded-[50px] bg-zinc-300/90 py-10 px-5  text-white relative overflow-hidden">
      <FaRegFileAlt />
      <p className="test-sm font-semibold text-zinc-900 mt-5  leading-tight">
        {data.desc}
      </p>
      <div className="footer  w-full  absolute bottom-0 left-0  ">
        <div className="flex justify-between items-center px-8 py-3 ">
          <h5 className="text-zinc-700 font-semibold">{data.filesize}</h5>
          <span className="rounded-full w-5 h-5 flex justify-center items-center bg-zinc-600">
            {data.close ? (
              <a href="#"><IoCloseCircleSharp /></a>
            ) : (
              <a href="#"><IoMdDownload size=".7em" color="#fff" /></a>
            )}
          </span>
        </div>
        {
            data.tag.isopen && (<div className= {`tag w-full   ${data.tag.tagcolor === "blue" ? "bg-blue-600":"bg-green-600"} py-4  flex justify-center items-center  `} >
                <h3 className="font-semibold text-sm"><a href="#">{data.tag.tagTitle}</a></h3>
              </div>)

        }
        
      </div>
    </motion.div>
  );
};

export default Card;
