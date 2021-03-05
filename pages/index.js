import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Desafio Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-auto bg-gray-600"> {/*AQUI TEM Q TER A FOTO DE BG!! */}

        {/* <Image
          className="-z-1 absolute opacity-80"
          src="/bg.png"
          alt="background"
          width={375}
          height={298}
        /> */}

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

          <h1 className="pt-6 text-2xl font-title text-white subpixel-antialiased tracking-wide leading-8"><span className="text-blue-300">Lorem </span>ipsum dolor sit amet, consectetuer adipiscing.</h1>

          <h3 className="font-body text-white pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.</h3>
        
          <div>
            {/* fazer as tres bolinhas */}
            <button className="bg-blue-500 text-white">VER MAIS</button>
          </div>

        </div>

        </div> 

    </div>
  )
}
