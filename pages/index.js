import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import Footer from '../components/footer';
import specialCard from '../components/specialCard';

export default function Home(props) {

  const card1 = {
    bg: 'bg-hero1',
    categoryColor: 'text-yellow-500',
    category: 'CONFIDENCIAL',
    time: '10:45'
  }

  const card2 = {
    bg: 'bg-hero2',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    time: '13:20'
  }

  const card3 = {
    bg: 'bg-hero3',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    time: '12 Slides'
  }

  const sc1 = {
    bg: 'sc1',
    title: 'Dicas de',
    titleSpan: 'carreira'
  }

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

              <button className="bg-primary text-white text-xs px-6 py-2 rounded-md font-body">VER MAIS</button>
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

          <span className="text-gray-400 mr-5 ml-3">Em alta:</span>

          <button className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full mr-4">
            <Image
              src="/cam.svg"
              alt="camera icon"
              width={14}
              height={10.5}
            />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full mr-4">
            <Image
              src="/headphone.svg"
              alt="headphone icon"
              width={14}
              height={14}
            />
          </button>
          <button className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full mr-4">
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
              width={15}
              height={15}
            />
          </button>
        </div>
          
        </div>

        <hr className="mt-5 px-0"/>

        <div className="pt-3 px-4">
          <h1 className="my-3 text-gray-800 text-body">Recomendados</h1>

          {/* cards! */}

          <Card card={card1} />
          <Card card={card2} />
          <Card card={card3} />

        <div className="flex justify-center">
          <button className="text-bright bg-none border-none py-3 pb-4">Ver mais</button>
        </div>
        
        </div>

        <div className="bg-blue-50 pl-4">
          <h1 className="pt-3 pb-2 text-gray-800">Conteúdos especiais</h1>

          {/* cards conteúdos especiais! */}

          <specialCard sprecialCard={sc1}/>
        </div>

        <div className="pt-3 px-4">
          <h1 className="my-3 text-gray-800 text-body">Você também pode gostar de:</h1>

          {/* cards! */}

          <Card card={card1} />
          <Card card={card2} />
          <Card card={card3} />

        <div className="flex justify-center">
          <button className="text-bright bg-none border-none py-3 pb-4">Ver mais</button>
        </div>
        
        </div>

        <div className="bg-blue-50 pl-4">
          <h2 className="pt-4 pb-2 text-gray-800 font-body">Ainda não encontrou o que assistir?</h2>
          <h1 className="text-bright font-body">Busque por suas categorias preferidas</h1>
          <button className="bg-primary text-white font-body">BUSCAR</button>
        </div>

        <div className="pt-3 px-4">
          <h1 className="my-3 text-gray-800 text-body">Veja também</h1>

          {/* cards! */}

          <Card card={card1} />
          <Card card={card2} />
          <Card card={card3} />

        <div className="flex justify-center pt-5 pb-6">
          <Image
            src="/downArrow.svg"
            alt="down arrow icon"
            width={16}
            height={9}
          />
        </div>
        
        </div>
        
    <Footer />

    </div>
  )
}
