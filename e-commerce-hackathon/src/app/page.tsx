// import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { TopHeader } from "@/components/TopHeader";
import Image from "next/image";
export default function Home() {
  const logos:string[]=["/versace.png","/ck.png","/gucci.png","/prada.png","/zara.png"]
  return (
    <>
    <TopHeader/>
    <Header />
    <Hero/>
    <div className="md:h-[122px] grid grid-cols-3 md:mt-0 mt-12 md:py-0 py-2 md:flex md:flex-wrap justify-center gap-5 md:justify-between px-7 items-center h-auto bg-black">
  {logos.map((logo,index) => (
    <div key={logo} 
    className={`flex justify-center items-center w- sm:w-1/3 md:w-auto ${
        index >= 2 ? "col-span-1" : "col-span-1 md:w-auto"
      }`}>
  <Image
        src={logo}
        alt="logo"
        width={130}
        height={32}
        className="w-[100px] h-auto sm:w-[110px] md:w-[130px]"
      />
    </div>
  ))}
</div>

    </>
  );
}
