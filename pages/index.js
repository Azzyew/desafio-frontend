import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import Categories from '../components/categories';
import Footer from '../components/footer';
import SpecialCard from '../components/specialCard';

export default function Home(props) {

  const card1 = {
    bg: 'bg-hero1',
    categoryColor: 'text-yellow-500',
    category: 'CONFIDENCIAL',
    src: "/blueCam.svg",
    alt: "camera icon",
    w: 14.5,
    h: 11,
    time: '10:45'
  }

  const card2 = {
    bg: 'bg-hero2',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueCam.svg",
    alt: "camera icon",
    w: 14.5,
    h: 11,
    time: '13:20'
  }

  const card3 = {
    bg: 'bg-hero3',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/document.svg",
    alt: "document icon",
    w: 13,
    h: 13,
    time: '12 Slides'
  }

  const sc1 = {
    bg: 'bg-specialCard1',
    title: 'Dicas de',
    titleSpan: 'carreira'
  }

  const sc2 = {
    bg: 'bg-specialCard2',
    title: 'Do mil',
    titleSpan: 'milhão'
  }

  const c1 = { name: 'Seguro Auto' }

  const c2 = { name: 'Nossa Rede' }

  const c3 = { name: 'Ferramentas e Sistemas' }

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
            <div className="flex items-center">
              <div className="pr-4">
                <Image
                  src="/search.svg"
                  alt="search icon"
                  width={14}
                  height={14}
                />
              </div>
              <div>
                <Image
                  src="/user.svg"
                  alt="user icon"
                  width={24}
                  height={18}
                />
              </div>
            </div>
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
          <h1 className="pt-6 pb-4 text-gray-800">Conteúdos especiais</h1>

          <div className="flex pb-6">{/* cards conteúdos especiais! */}

          <SpecialCard specialCard={sc1} />
          <SpecialCard specialCard={sc2} />

          </div>
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

        <div className="bg-blue-50">
          <h2 className="pt-4 text-gray-800 font-body flex justify-center">Ainda não encontrou o que assistir?</h2>
          <h1 className="text-bright font-body text-lg flex justify-center">Busque por suas categorias preferidas</h1>
          <div className="pl-4 pt-3 flex justify-between">
            <Categories categories={c1} />
            <Categories categories={c2} />
            <Categories categories={c3} />
          </div>
          <div className="px-4 pb-8">
            <div className="py-4 flex pt-5">
              <Image
                src="/graySearch.svg"
                alt="search icon"
                width={14}
                height={14}
              />
              <input className="bg-transparent border-b-1 border-pink-800 w-full ml-2" type="text" placeholder="Ou procure por novas ideias..."/>
            </div>
            <button className="bg-primary text-white font-body w-full rounded-sm py-2 mt-2">BUSCAR</button>
          </div>
          
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
