'use client' ;

import React,{useState} from 'react'
import Image from 'next/image'
import { MdEmail } from 'react-icons/md';
import { IoPhonePortraitSharp } from 'react-icons/io5';
import axios from 'axios'
import { useEffect } from 'react'



const AboutUsPage = () => {
  const [dataMap, setDataUser] = useState([])
  const onFetch= async() => {
    try {
      let res = await axios.get('https://randomuser.me/api/?results=6')
      console.log(res)
      setDataUser(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }
    useEffect(()=> {
      onFetch()
    },[])
  const softwareDeveloperPositions = [
    {
      title: "Junior Front-End Developer",
      description:
        "Responsible for implementing visual elements and user interactions using HTML, CSS, JavaScript, and modern frameworks like React or Vue.",
    },
    {
      title: "Full-Stack Developer",
      description:
        "Works on both front-end and back-end development, managing servers, databases, and the user-facing side of web applications.",
    },
    {
      title: "Mobile Application Developer",
      description:
        "Specializes in building applications for iOS and Android platforms using technologies like React Native, Swift, or Kotlin.",
    },
    {
      title: "DevOps Engineer",
      description:
        "Focuses on streamlining development operations, managing cloud infrastructure, and automating CI/CD pipelines.",
    },
    {
      title: "Back-End Developer",
      description:
        "Develops server-side logic, APIs, and database structures using languages like Node.js, Python, or Java.",
    },
    {
      title: "Software Architect",
      description:
        "Designs and oversees the architecture of complex software systems, ensuring scalability, performance, and maintainability.",
    },
  ];
  return (
    <>
    <div className='flex flex-col w-full h-full'>
      <figure>
      <Image className="h-full w-full" src="https://www.bandainamcocrossstoreuk.com/media/ke4iohkg/bne-logo_web_banner.png?width=1903&height=847&rnd=133431501300030000"
              alt="Tekken 8 Hero"
              width={1500}
              height={1500}
            />
      </figure>
    </div>
    <section className='flex flex-col'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <figure>
        <Image className='object-cover h-[70vh]' src={"https://i.ytimg.com/vi/DGxNW_vzGWo/maxresdefault.jpg"} width={1000} height={1000} alt='pacman'/>
      </figure>
      <article className='w-full flex flex-col justify-center pl-8'>
        <h1 className='font-extrabold text-3xl md:text-5xl pb-4'>About Us</h1>
        <p1>
        Bandai Namco Entertainment is one of the world’s leading video game publishers and entertainment companies, with a rich history of delivering iconic games, toys, and media content that span decades.
        </p1>
      </article>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <article className='w-full flex flex-col justify-center pl-8'>
        <h1 className='font-extrabold text-3xl md:text-5xl pb-4'>Our Origins</h1>
        <p className='pb-3' >
        Bandai was founded in 1950 in Japan as a toy manufacturing company, known for its innovative toys, model kits, and collectibles, especially within the anime and manga world. Bandai became a household name with hits like the Gundam model kits and the Tamagotchi virtual pets, earning its place as a global leader in toy production and character merchandising.
        </p>
        <p>
        Namco, on the other hand, was established in 1955 as an amusement machine developer and arcade operator. Namco gained international recognition in the 1980s with the release of the legendary arcade game PAC-MAN, which became a cultural phenomenon. Namco’s success in the video game industry continued with classic franchises like Tekken, Soulcalibur, and Ridge Racer.
        </p>
      </article>
      <figure>
        <Image className='object-cover h-[70vh]' src={"https://www.gimbot.com/wp-content/uploads/2024/02/53875-bandai-namco.jpg"} width={1000} height={1000} alt='pacman'/>
      </figure>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <figure>
        <Image className='object-cover h-[70vh]' src={"https://cdn.vox-cdn.com/thumbor/0MGPY9U4SHwgaVfgO1MsoJ1l4G8=/0x0:5184x3456/1200x800/filters:focal(2178x1314:3006x2142)/cdn.vox-cdn.com/uploads/chorus_image/image/61387683/Pac_Man_Sculpture.0.0.1490382059.0.jpg"} width={1000} height={1000} alt='pacman'/>
      </figure>
      <article className='w-full flex flex-col justify-center pl-8'>
        <h1 className='font-extrabold text-3xl md:text-5xl pb-4'>The Merger</h1>
        <p1>
        In 2005, the two entertainment giants, Bandai and Namco, merged to form Bandai Namco Holdings Inc. The goal was to combine Bandai’s strength in toys and character licensing with Namco’s expertise in video games and amusement. This strategic move expanded the company’s ability to create integrated entertainment experiences across multiple platforms.
        </p1>
      </article>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <article className='w-full flex flex-col justify-center pl-8'>
        <h1 className='font-extrabold text-3xl md:text-5xl pb-4'>Looking to the Future</h1>
        <p className='pb-3' >
        At Bandai Namco, we believe in pushing the boundaries of entertainment. Our mission is to create unique and lasting memories for fans by delivering innovative games and experiences that capture the imagination. Whether it’s through next-gen gaming, immersive virtual reality experiences, or beloved characters brought to life in new ways, Bandai Namco continues to be at the forefront of the entertainment industry.
        </p>
      </article>
      <figure>
        <Image className='object-cover h-[70vh]' src={"https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/02/08/bandai-namco-is-developing-an-ip-metaverse_feature.jpg"} width={1000} height={1000} alt='pacman'/>
      </figure>
      </div>
    </section>
    <h1 className='pt-16 font-extrabold text-3xl md:text-5xl w-full justify-center flex'>Our Team</h1>
    <section className='flex w-full bg-red-500'>
    <div className=" w-full px-10 grid grid-cols-1 sm:grid-cols-2 gap-7 py-10 pt-10 bg-white">
        {dataMap.map((item, index) => {
          return (
            <div
              className="card card-side bg-base-100 shadow-xl flex flex-col sm:flex-row w-full"
              key={index}
            >
              <figure className="w-full sm:w-1/3">
                <Image
                  src={item.picture.large}
                  alt="Team member"
                  className="rounded-xl w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h2 className="card-title text-lg sm:text-xl">
                  {item.name.first} {item.name.last}
                </h2>
                <p>{softwareDeveloperPositions[index].title}</p>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  {item.email}
                </div>
                <div className="flex items-center gap-2">
                  <IoPhonePortraitSharp />
                  {item.phone}
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  )
}

export default AboutUsPage
