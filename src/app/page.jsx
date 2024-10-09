import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <section id="Hero" className="bg-cyan-500 h-screen relative grid grid-cols-1 md:grid-cols-2">
          <figure className="w-full h-full absolute">
            <Image 
              src="https://4kwallpapers.com/images/wallpapers/tekken-8-devil-jin-2880x1800-14547.jpg"
              className="w-full h-full object-cover"
              alt="Tekken 8 Hero"
              width={1500}
              height={1500}
            />
          </figure>
          <figure className="flex absolute z-20 h-full w-full items-end pb-20 md:pb-36 bottom-24">
            <Image
              src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba3d6bf0-f660-4ce1-a12b-6e1505215b69/dfdpshy-a869e441-45c1-4c7d-8096-c95361346a40.png/v1/fill/w_1280,h_267/tekken_8_logo___8k___black___transparent_by_vgejackler_dfdpshy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY3IiwicGF0aCI6IlwvZlwvYmEzZDZiZjAtZjY2MC00Y2UxLWExMmItNmUxNTA1MjE1YjY5XC9kZmRwc2h5LWE4NjllNDQxLTQ1YzEtNGM3ZC04MDk2LWM5NTM2MTM0NmE0MC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.e0-vwWn3npRuwM_vCkvpkHCNPabhyT0ZA34YlozZ9-k"}
              alt="Tekken 8 Logo"
              width={800}
              height={800}
              className="w-44 md:w-[60%]"
            />
          </figure>
          <section className="flex items-center justify-center w-full h-full col-[1/2] md:col-[2/3] row-[2/3] pt-32 md:pt-40 gap-5">
            <button className="z-30 text-black border-solid py-1 px-5 md:px-7 rounded-full bg-white font-semibold hover:bg-yellow-500">
              Buy Now
            </button>
            <button className="z-30 text-white border-[3px] border-solid py-1 px-5 md:px-7 rounded-full bg-black font-semibold hover:bg-yellow-500 bg-gradient-to-b from-black">
              Learn More
            </button>
          </section>
        </section>

        <section id="products" className="bg-white h-fit p-5 md:p-10">
          <h1 className="font-extrabold text-3xl md:text-5xl">Featured Games</h1>
        </section>

      </div>

      <div id="Card" className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5 px-5 md:px-10 mb-10">
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative top-0 w-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-64 md:h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://image.api.playstation.com/vulcan/ap/rnd/202405/2216/70bf2b0857ebc50a44d0e281d711cede69f592785da33d97.png"}
                alt="DB Sparking Zero"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://cdn2.steamgriddb.com/logo/f9a415f0fe717ecff563c568fb449ec5.png'} width={1000} height={1000} className="w-24 md:w-44" />
                <h1 className="w-full flex justify-center font-bold text-lg md:text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  BREAK THE HEAVENS.
                </h1>
              </div>
            </figure>
            <section className="absolute flex flex-col w-fit gap-2 row-[2/3] pb-3 md:pb-5 pr-3 md:pr-5 col-[2/3] justify-center">
              <button className="z-10 text-black border-solid py-1 px-5 md:px-7 rounded-full bg-white font-semibold hover:bg-yellow-500">
                Buy Now
              </button>
              <button className="z-10 text-white border-[3px] border-solid py-1 px-5 md:px-7 rounded-full bg-gradient-to-t from-black font-semibold hover:bg-yellow-500">
                Learn More
              </button>
            </section>
          </div>
        ))}
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative top-0 w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-64 md:h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/elden-ring-cover.jpg"}
                alt="Elden Ring"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png'} width={1000} height={1000} className="w-24 md:w-44" />
                <h1 className="w-full flex justify-center font-bold text-lg md:text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Rise Tarnished.
                </h1>
              </div>
            </figure>
            <section className="absolute flex flex-col w-fit gap-2 row-[2/3] pb-3 md:pb-5 pr-3 md:pr-5 col-[2/3] justify-center">
              <button className="z-10 text-black border-solid py-1 px-5 md:px-7 rounded-full bg-white font-semibold hover:bg-yellow-500">
                Buy Now
              </button>
              <button className="z-10 text-white border-[3px] border-solid py-1 px-5 md:px-7 rounded-full bg-gradient-to-t from-black font-semibold hover:bg-yellow-500">
                Learn More
              </button>
            </section>
          </div>
        ))}
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative top-0 w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-64 md:h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/05/gundam-breaker-4-1-cropped.jpg"}
                alt="Gundam Breaker 4"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://media.graphassets.com/Iqq9AJArRcWj88YCR8gB'} width={1000} height={1000} className="w-24 md:w-44" />
                <h1 className="w-full flex justify-center font-bold text-lg md:text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Break,Build,Battle!.
                </h1>
              </div>
            </figure>
            <section className="absolute flex flex-col w-fit gap-2 row-[2/3] pb-3 md:pb-5 pr-3 md:pr-5 col-[2/3] justify-center">
              <button className="z-10 text-black border-solid py-1 px-5 md:px-7 rounded-full bg-white font-semibold hover:bg-yellow-500">
                Buy Now
              </button>
              <button className="z-10 text-white border-[3px] border-solid py-1 px-5 md:px-7 rounded-full bg-gradient-to-t from-black font-semibold hover:bg-yellow-500">
                Learn More
              </button>
            </section>
          </div>
        ))}
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative top-0 w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-64 md:h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_tales_of_arise_02_2560x1080.jpg&height=506&sharpen"}
                alt="Tales of Arise"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://cdn2.steamgriddb.com/logo/f8dc3073b73dfb018693b7a1dbfcef43.png'} width={1000} height={1000} className="w-24 md:w-44" />
                <h1 className="w-full flex justify-center font-bold text-lg md:text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  A New Tale Awaits.
                </h1>
              </div>
            </figure>
            <section className="absolute flex flex-col w-fit gap-2 row-[2/3] pb-3 md:pb-5 pr-3 md:pr-5 col-[2/3] justify-center">
              <button className="z-10 text-black border-solid py-1 px-5 md:px-7 rounded-full bg-white font-semibold hover:bg-yellow-500">
                Buy Now
              </button>
              <button className="z-10 text-white border-[3px] border-solid py-1 px-5 md:px-7 rounded-full bg-gradient-to-t from-black font-semibold hover:bg-yellow-500">
                Learn More
              </button>
            </section>
          </div>
        ))}
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative top-0 w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-64 md:h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://i.redd.it/milabahm1tad1.jpeg"}
                alt="Bleach"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://cdn2.steamgriddb.com/logo_thumb/61f02c00bfd2398b30cf700786117384.png'} width={1000} height={1000} className="w-24 md:w-44" />
                <h1 className="w-full flex justify-center font-bold text-lg md:text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Accept Your Soul and Reverse Fate.
                </h1>
              </div>
            </figure>
            <section className="absolute flex flex-col w-fit gap-2 row-[2/3] pb-3 md:pb-5 pr-3 md:pr-5 col-[2/3] justify-center">
              <button className="z-10 text-black border-solid py-1 px-5 md:px-7 rounded-full bg-white font-semibold hover:bg-yellow-500">
                Buy Now
              </button>
              <button className="z-10 text-white border-[3px] border-solid py-1 px-5 md:px-7 rounded-full bg-gradient-to-t from-black font-semibold hover:bg-yellow-500">
                Learn More
              </button>
            </section>
          </div>
        ))}
        {[1].map((a) => (
          <div id="Card 1" className="relative flex flex-col items-end justify-end w-full" key={a}>
            <figure className="relative top-0 w-full h-full flex overflow-hidden bg-cover bg-no-repeat rounded-xl">
              <Image className="rounded-xl object-cover w-full h-64 md:h-full transition duration-300 ease-in-out hover:scale-110"
                src={"https://miro.medium.com/v2/resize:fit:1400/1*4w-XBv3t2epNmGD2J8LNoQ.jpeg"}
                alt="Armored Core 6"
                width={800}
                height={800}
              />
              <div className="absolute bottom-5 left-5 max-w-xs">
                <Image src={'https://cdn2.steamgriddb.com/logo/cae562c8d052f06561da22d9c89ac749.png'} width={1000} height={1000} className="w-24 md:w-44" />
                <h1 className="w-full flex justify-center font-bold text-lg md:text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Feed The Fire, Let The Last Cinders Burn.
                </h1>
              </div>
            </figure>
            <section className="absolute flex flex-col w-fit gap-2 row-[2/3] pb-3 md:pb-5 pr-3 md:pr-5 col-[2/3] justify-center">
              <button className="z-10 text-black border-solid py-1 px-5 md:px-7 rounded-full bg-white font-semibold hover:bg-yellow-500">
                Buy Now
              </button>
              <button className="z-10 text-white border-[3px] border-solid py-1 px-5 md:px-7 rounded-full bg-gradient-to-t from-black font-semibold hover:bg-yellow-500">
                Learn More
              </button>
            </section>
          </div>
        ))}
        
        {/* Repeat card structure for other games */}
      </div>

      <div id="About Us" className="bg-white w-full p-5 md:p-10">
        <section className="flex flex-col md:flex-row">
          <figure className="w-full md:w-1/2">
            <Image className="object-cover w-full" src={"https://officesnapshots.com/wp-content/uploads/2024/07/bandai-namco-offices-irvine-6.jpg"} width={1000} height={1000} alt="Gundam Office"/>
          </figure>
          <article className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-8">
            <h1 className="font-extrabold text-3xl md:text-5xl pb-4">Who We Are</h1>
            <p>Bandai Namco Entertainment is one of the world’s leading video game publishers and entertainment companies, with a rich history of delivering iconic games, toys, and media content that span decades.</p>
          <p className="mt-3">
          In 2005, the two entertainment giants, Bandai and Namco, merged to form Bandai Namco Holdings Inc. The goal was to combine Bandai’s strength in toys and character licensing with Namco’s expertise in video games and amusement. This strategic move expanded the company’s ability to create integrated entertainment experiences across multiple platforms.</p>
        </article>
        </section>
        <figure className="w-full h-[68vh] mt-16 rounded-xl overflow-hidden">
        <Image className="object-cover w-full rounded-xl h-[68vh] object-bottom" src={"https://media.timeout.com/images/105980938/image.jpg"} width={1000} height={1000} alt="Bandai Namco Studio"/>
        </figure>
      </div>

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
    </>
  );
}