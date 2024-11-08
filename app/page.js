import Image from "next/image";
import React from "react";
import Button from "@/app/button";

export default function Home() {

  return (
    <div className="h-screen text-center flex flex-col">
      <h1>Texas Fatties</h1>
      <div className='flex-grow flex justify-evenly'>
        <Button className="bg-orange-400 w-1/3">
          <Image src= "/IMG_2346.JPG" width = {500} height = {1000} alt = "blind people"></Image>
        </Button>
        <Button className="bg-orange-400 w-1/3">
          <Image src= "/Fork.jpeg" width = {500} height = {1000} alt = "blind people"></Image>
        </Button>
      </div>
      <h1 className="w-full bottom-0">Made with hunger by 🫃</h1>
    </div>);
}
