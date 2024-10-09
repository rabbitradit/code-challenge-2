'use client' ;

import React,{useState} from 'react'
import Image from 'next/image'
import { MdEmail } from 'react-icons/md';
import { IoPhonePortraitSharp } from 'react-icons/io5';
import axios from 'axios'
import { useEffect } from 'react'



const TeamPage = () => {
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
    <h1 className="pt-16 font-extrabold text-5xl w-full justify-center flex">Our Team</h1>
    <section className='flex w-full bg-red-500'>
    <div className="w-full px-10 grid grid-cols-1 sm:grid-cols-2 gap-7 py-10 pt-10 bg-white">
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

export default TeamPage

