import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen text-center">
      <h1>Texas Fatties</h1>
      <div className='flex justify-evenly h-3/4'>
        <div className = "bg-orange-400 w-1/3">button 1</div>
        <div className = "bg-orange-400 w-1/3">button 2</div>
      </div>
      <h1>Made with hunger by 🫃</h1>
    </div>);
}
