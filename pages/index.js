import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Desafio Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-auto bg-top-hero"> {/*AQUI TEM Q TER A FOTO DE BG!! */}

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
              height={24}
            />
          </div>

          <h1 className="mt-7 text-2xl font-title text-white subpixel-antialiased tracking-wide leading-8"><span className="text-blue-300">Lorem </span>ipsum dolor sit amet, consectetuer adipiscing.</h1>

          <h3 className="font-body text-white pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.</h3>
        
            <div className="flex justify-between mt-9 pb-8">

            <div className="inline-flex items-center">
              <div className="w-2 h-2 rounded-full bg-white mr-2" />
              <div className="w-2 h-2 rounded-full border border-white mr-2" />
              <div className="w-2 h-2 rounded-full border border-white" />
            </div>

              <button className="bg-blue-400 text-white text-xs px-6 py-2 rounded-md">VER MAIS</button>
            </div>

        </div>

        </div> 

    </div>
  )
}
