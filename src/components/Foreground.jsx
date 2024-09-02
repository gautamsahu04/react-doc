import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);


  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, quo.",
      filesize: ".4MB",
      close: false,
      tag: { isopen: false, tagTitle: "download ", tagcolor: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, non.",
      filesize: "255MB",
      close: false,
      tag: { isopen: true, tagTitle: "download ", tagcolor: "green" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, quo.",
      filesize: ".4MB",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagcolor: "blue" },
    },{
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente voluptatibus sit eum, quaerat beatae ut!',
        filesize: "5MB",
        close: true,
        tag: { isopen: true, tagTitle: "Download Now", tagcolor: "green" },
      },{
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, quo.",
        filesize: ".4MB",
        close: true,
        tag: { isopen: true, tagTitle: "Download Now", tagcolor: "blue" },
      },{
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis a id quaerat modi praesentium repudiandae quia dolore voluptatum, voluptate dolorum.',
        filesize: "4MB",
        close: true,
        tag: { isopen: false, tagTitle: "Download Now", tagcolor: "green" },
      },
  ];

  return (
    <div ref = {ref} className="fixed top-0  left-0 z-[3] w-full h-full   gap-5 flex flex-wrap">
      {data.map((item, index) => (
        <Card data={item}  reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
