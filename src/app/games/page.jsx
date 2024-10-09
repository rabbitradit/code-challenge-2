import React from 'react'
import Image from 'next/image'

const GamesPage = () => {
  return (
    <main>
      <div>
        <h1 className='font-extrabold text-5xl p-10'>Featured Games</h1>
      </div>

      {/* Responsive grid */}
      <div id="Card" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 px-10 mb-32">
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative w-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://cdn2.steamgriddb.com/thumb/e1113f40e20464469d860bef72793600.jpg"}
                alt="DB Sparking Zero"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://cdn2.steamgriddb.com/logo/f9a415f0fe717ecff563c568fb449ec5.png'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  BREAK THE HEAVENS.
                </h1>
              </div>
            </figure>
          </div>
        ))}

        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative w-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://cdn2.steamgriddb.com/thumb/a215179e13e3afea96593e8aa44298bf.jpg"}
                alt="Gundam Breaker 4"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5">
                <Image src={'https://media.graphassets.com/Iqq9AJArRcWj88YCR8gB'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Break,Build,Battle!
                </h1>
              </div>
            </figure>
          </div>
        ))}

        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full h-full" key={a}>
            <figure className="relative w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/elden-ring-cover.jpg"}
                alt="Elden Ring"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5">
                <Image src={'https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Rise Tarnished.
                </h1>
              </div>
            </figure>
          </div>
        ))}

        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_tales_of_arise_02_2560x1080.jpg&height=506&sharpen"}
                alt="Tales of Arise"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5">
                <Image src={'https://cdn2.steamgriddb.com/logo/f8dc3073b73dfb018693b7a1dbfcef43.png'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  A New Tale Awaits.
                </h1>
              </div>
            </figure>
          </div>
        ))}
      </div>

      {/* All Games Section */}
      <section>
        <div className='px-10 flex justify-between py-10'>
          <h1 className='font-extrabold text-5xl'>All Games</h1>
          <div className='space-x-3'>
            <button className='border-[3px] border-black text-black font-bold py-1 px-7 rounded-full'>All Genres</button>
            <button className='border-[3px] border-black text-black font-bold py-1 px-7 rounded-full'>All Platform</button>
            <button className='border-[3px] border-black text-black font-bold py-1 px-7 rounded-full'>All Franchises</button>
            <button className='border-[3px] border-black text-black font-bold py-1 px-7 rounded-full'>Release Date</button>
          </div>
        </div>
      </section>
      <section>
      <div id="Card" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 px-10 mb-32">
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative w-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://cdn2.steamgriddb.com/thumb/e1113f40e20464469d860bef72793600.jpg"}
                alt="DB Sparking Zero"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://cdn2.steamgriddb.com/logo/f9a415f0fe717ecff563c568fb449ec5.png'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  BREAK THE HEAVENS.
                </h1>
              </div>
            </figure>
          </div>
        ))}

        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative w-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://cdn2.steamgriddb.com/thumb/a215179e13e3afea96593e8aa44298bf.jpg"}
                alt="Gundam Breaker 4"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5">
                <Image src={'https://media.graphassets.com/Iqq9AJArRcWj88YCR8gB'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Break,Build,Battle!
                </h1>
              </div>
            </figure>
          </div>
        ))}

        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/elden-ring-cover.jpg"}
                alt="Elden Ring"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5">
                <Image src={'https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Rise Tarnished.
                </h1>
              </div>
            </figure>
          </div>
        ))}

        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_tales_of_arise_02_2560x1080.jpg&height=506&sharpen"}
                alt="Tales of Arise"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5">
                <Image src={'https://cdn2.steamgriddb.com/logo/f8dc3073b73dfb018693b7a1dbfcef43.png'} width={1000} height={1000} className="w-44" />
                <h1 className="w-full flex justify-center font-bold text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  A New Tale Awaits.
                </h1>
              </div>
            </figure>
          </div>
        ))}
      </div>
      </section>
      <div className="p-5 md:p-10" id="Testimony">
        <h1 className="text-black text-3xl md:text-5xl font-extrabold mb-8">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="border border-solid min-h-[40vh]">
            <h1 className="bg-red-500 text-white font-bold p-3">Bandai Namco</h1>
            <article className="text-center p-5">
              <h1 className="text-xl font-bold mb-5">
                Hafiz
              </h1>
              <p>
                "Been trusting bandai since 2005!, top tier company for sure!"
              </p>
            </article>
          </section>
          <section className="border border-solid min-h-[40vh]">
            <h1 className="bg-red-500 text-white font-bold p-3">Bandai Namco</h1>
            <article className="text-center p-5">
              <h1 className="text-xl font-bold mb-5">
                Hachiman
              </h1>
              <p>
              "Absolutely amazing support! They helped me unbanning both my Dark Souls Remastered account and my Dark Souls 3 account. Incredibly fast employees as well!"
              </p>
            </article>
          </section>
          <section className="border border-solid min-h-[40vh]">
            <h1 className="bg-red-600 text-white font-bold p-3">Bandai Namco</h1>
            <article className="text-center p-5">
              <h1 className="text-xl font-bold mb-5">
                Rudy Perch
              </h1>
              <p>
              Creadores de bandai namco quiero que pongan personajes de dragon ball z fighters la de goku super sajajin 4 en dramatic finish con su oponente villano y q saquen más DLC de los personajes con su dramatic finish
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}

export default GamesPage;