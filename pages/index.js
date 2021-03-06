import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Desafio Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-cover bg-top-hero"> {/*AQUI TEM Q TER A FOTO DE BG!! */}

        <div className='bg-transparent pt-3 px-4'>
          <div className="flex justify-between">
            <Image
              src="/next-logo.png"
              alt="Next.js logo"
              width={115}
              height={29}
            />
            <Image
              src="/search.png"
              alt="search icon"
              width={12.75}
              height={12.55}
            />
            <Image
              src="/user.png"
              alt="user icon"
              width={24}
              height={18}
            />
          </div>

          <h1 className="mt-7 text-2xl font-title text-white subpixel-antialiased tracking-wide leading-8"><span className="text-pale">Lorem </span>ipsum dolor sit amet, consectetuer adipiscing.</h1>

          <h3 className="font-body text-white pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.</h3>
        
            <div className="flex justify-between mt-9 pb-8">

            <div className="inline-flex items-center">
              <div className="w-2 h-2 rounded-full bg-white mr-4" />
              <div className="w-2 h-2 rounded-full border border-white mr-4" />
              <div className="w-2 h-2 rounded-full border border-white" />
            </div>

              <button className="bg-gradient-to-r from-primary bg-opacity-90 to-secondary text-white text-xs px-6 py-2 rounded-md font-body">VER MAIS</button>
            </div>

        </div>
        </div>

        <div className="pt-3 px-4">

        <div className="pt-2 flex items-center">
          <Image
            src="/arrow.svg"
            alt="up arrow icon"
            width={17.75}
            height={10.5}
          />

          <span className="text-gray-400">Em alta:</span>

          <button className="w-6 h-6 bg-gradient-to-r from-primary bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full">
            <Image
              src="/cam.svg"
              alt="camera icon"
              width={14}
              height={10.5}
            />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full">
            <Image
              src="/headphone.svg"
              alt="headphone icon"
              width={14}
              height={14}
            />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full">
            <Image
              src="/book.svg"
              alt="book icon"
              width={13}
              height={11}
            />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full">
            <Image
              src="/rocket.svg"
              alt="rocket icon"
              width={13}
              height={13.5}
            />
          </button>
        </div>
          
        </div>

    </div>
  )
}
