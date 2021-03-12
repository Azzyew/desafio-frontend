import Head from 'next/head';
import Image from 'next/image';
import { motion } from "framer-motion";
import Card from '../components/card';
import Categories from '../components/categories';
import Footer from '../components/footer';
import Menu from '../components/menu';
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
    time: '10:45',
    area: 'Produtos',
    clock: true
  }

  const card2 = {
    bg: 'bg-hero2',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueCam.svg",
    alt: "camera icon",
    w: 14.5,
    h: 11,
    time: '13:20',
    area: 'Produtos',
    clock: true
  }

  const card3 = {
    bg: 'bg-hero3',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/document.svg",
    alt: "document icon",
    w: 13,
    h: 13,
    time: '12 Slides',
    area: 'Produtos',
    clock: true
  }

  const card4 = {
    bg: 'bg-hero4',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueHeadphone.svg",
    alt: "headphone icon",
    w: 13,
    h: 13,
    time: '14:35',
    area: 'Ferramentas e Sistemas'
  }

  const card5 = {
    bg: 'bg-hero5',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueCam.svg",
    alt: "camera icon",
    w: 14.5,
    h: 11,
    time: '10:45',
    area: 'Tecnologia da Informação',
    clock: true
  }

  const card6 = {
    bg: 'bg-hero6',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueBook.svg",
    alt: "book icon",
    w: 13,
    h: 11,
    time: '~5m',
    area: 'Recursos Humanos'
  }

  const card7 = {
    bg: 'bg-hero7',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/document.svg",
    alt: "document icon",
    w: 13,
    h: 13,
    time: '16 Slides',
    area: 'Treinamentos'
  }

  const card8 = {
    bg: 'bg-hero8',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueHeadphone.svg",
    alt: "headphone icon",
    w: 12.5,
    h: 12.5,
    time: '36:28',
    area: 'Compliance',
    clock: true
  }

  const card9 = {
    bg: 'bg-hero9',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueCam.svg",
    alt: "camera icon",
    w: 14.5,
    h: 11,
    time: '10:45',
    area: 'Seguro Auto'
  }

  const card10 = {
    bg: 'bg-hero10',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/document.svg",
    alt: "document icon",
    w: 13,
    h: 13,
    time: '12 Slides',
    area: 'Contact Center'
  }

  const card11 = {
    bg: 'bg-hero11',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/document.svg",
    alt: "document icon",
    w: 13,
    h: 13,
    time: '16 Slides',
    area: 'Estratégia e Modelo de Negócios'
  }

  const card12 = {
    bg: 'bg-hero12',
    categoryColor: 'text-green-500',
    category: 'INTERNO',
    src: "/blueCam.svg",
    alt: "camera icon",
    w: 14.5,
    h: 11,
    time: '10:45',
    area: 'Ferramentas e Sistemas'
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
    <div className="flex">
      <Head>
        <title>Desafio Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className="w-screen">
      
      <div className="bg-cover bg-top-hero lg:h-82 lg:w-full lg:px-16 lg:justify-between"> {/*AQUI TEM Q TER A FOTO DE BG!! */}

        <div className='bg-transparent pt-4 px-4 lg:h-82'>

        <div className="lg:flex lg:justify-between">

          <div className="hidden lg:flex border-b-2 border-gray-500 w-424p items-center">
          <div className="mr-2">
            <Image
              src="/graySearch.svg"
              alt="search icon"
              width={13}
              height={13}
            />
          </div>
            <input placeholder="Pesquisar" type="text" className="bg-transparent"></input>
          <div className="flex items-end">
            <Image
              src="/filter.svg"
              alt="search icon"
              width={24}
              height={24}
            />
          </div>
        </div>

          <div className="flex justify-between lg:hidden">
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

          <div className="hidden lg:flex items-center">
            <div className="mr-6">
              <Image
                src="/help.svg"
                alt="help icon"
                width={20}
                height={20}
              />
            </div>
            <div className="mr-6">
              <Image
                src="/notifications.svg"
                alt="notifications icon"
                width={16}
                height={16.5}
              />
            </div>
            <Image
              src="/webUser.svg"
              alt="user icon"
              width={32}
              height={32}
            />
          </div>
        </div>

          <div>
            <div className="lg:mt-28 lg:w-424p">
              <h1 className="mt-7 text-2xl font-title text-white subpixel-antialiased tracking-wide leading-8 lg:text-big"><span className="text-pale">Lorem </span>ipsum dolor sit amet, consectetuer adipiscing.</h1>
              <h3 className="font-body text-white pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.</h3>
            </div>

            <div className="flex justify-between mt-9 pb-8 lg:mt-0">
              <div className="inline-flex items-center lg:mt-4">
                <div className="w-2 h-2 rounded-full bg-white mr-4" />
                <div className="w-2 h-2 rounded-full border border-white mr-4" />
                <div className="w-2 h-2 rounded-full border border-white" />
              </div>

              <div className="lg:-m-20">
                <motion.button
                  className="bg-primary text-white text-xs px-6 py-2 rounded-md font-body lg:text-sm lg:mr-20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >VER MAIS</motion.button>
              </div>
            </div>  
          </div>

        </div>
        </div>

        <div>

        <div className="pt-3 px-4">

        <div className="pt-2 flex items-center lg:justify-end lg:mr-20">
          <Image
            src="/arrow.svg"
            alt="up arrow icon"
            width={17.75}
            height={10.5}
          />

          <span className="text-gray-400 mr-5 ml-3 lg:text-sm lg:mr-6">Em alta:</span>

          <div className="hidden lg:flex">
            <motion.button
              className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/cam.svg"
                alt="camera icon"
                width={14}
                height={10.5}
              />
            </motion.button>
            <span className="hidden lg:flex text-bright text-sm pl-2 pr-7">Vídeos</span>
          </div>

          <div className="hidden lg:flex">
            <motion.button
              className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/headphone.svg"
                alt="headphone icon"
                width={14}
                height={14}
              />
            </motion.button>
            <span className="hidden lg:flex text-bright text-sm pl-2 pr-7">Podcasts</span>
          </div>

          <div className="hidden lg:flex">
            <motion.button
              className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/book.svg"
                alt="book icon"
                width={13}
                height={11}
              />
            </motion.button>
            <span className="hidden lg:flex text-bright text-sm pl-2 pr-7">Artigos</span>
          </div>

          <div className="hidden lg:flex">
            <motion.button
              className="w-6 h-6 bg-gradient-to-r from-blue-500 bg-opacity-50 to-blue-500 bg-opacity-75 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/rocket.svg"
                alt="rocket icon"
                width={15}
                height={15}
              />
            </motion.button>
            <span className="hidden lg:flex text-bright text-sm pl-2 pr-7">Trilhas</span>
          </div>
        </div>
          
        </div>

        <hr className="mt-5 px-0 lg:hidden"/>

        <div className="pt-3 px-4 lg:mx-20 lg:px-0">
          <h1 className="my-3 text-gray-800 text-body lg:-m-8 lg:pb-7 lg:ml-0">Recomendados</h1>

          <div className="lg:flex lg:flex-wrap">{/* cards! */}
            <div className="lg:flex lg:flex-wrap lg:justify-between w-full">
              <Card card={card1} />
              <Card card={card2} />
              <Card card={card3} />
              <Card card={card4} />
            </div>
            <div className="hidden lg:flex lg:flex-wrap lg:justify-between w-full">
              
              <Card card={card5} />
              <Card card={card6} />
              <Card card={card7} />
              <Card card={card8} />
            </div>
          </div>

        <div className="flex justify-center">
          <motion.button
            className="text-bright bg-none border-none py-3 pb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ver mais
          </motion.button>
        </div>
        
        </div>

        <div className="bg-blue-50 pl-4">
          <h1 className="pt-6 pb-4 text-gray-800 lg:ml-20">Conteúdos especiais</h1>

          <div className="flex pb-6 lg:mx-20">{/* cards conteúdos especiais! */}

          <SpecialCard specialCard={sc1} />
          <SpecialCard specialCard={sc2} />

          </div>
        </div>

        <div className="pt-3 px-4 lg:mx-20">
          <h1 className="my-3 text-gray-800 text-body">Você também pode gostar de:</h1>

          <div className="lg:flex lg:flex-wrap lg:flex-row lg:justify-between">{/* cards! */}
            
          <div className="hidden lg:flex lg:flex-wrap lg:justify-between w-full">
            <Card card={card9} />
            <Card card={card10} />
            <Card card={card11} />
            <Card card={card12} />
          </div>
          
          <div className="lg:flex lg:flex-wrap lg:justify-between w-full">
            <Card card={card1} />
            <Card card={card2} />
            <Card card={card3} />
            <Card card={card4} />
          </div>


          <div className="hidden lg:flex lg:flex-wrap lg:justify-between w-full">
            <Card card={card5} />
            <Card card={card6} />
            <Card card={card7} />
            <Card card={card8} />
          </div>

          </div>


        <div className="flex justify-center">
          <motion.button
            className="text-bright bg-none border-none py-3 pb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ver mais
          </motion.button>
        </div>
        
        </div>

        <div className="bg-blue-50">
          <h2 className="pt-4 text-gray-800 font-body flex justify-center">Ainda não encontrou o que assistir?</h2>
          <h1 className="text-bright font-body text-lg flex justify-center lg:text-2xl">Busque por suas categorias preferidas</h1>
          <div className="pl-4 pt-3 flex justify-between lg:justify-evenly lg:px-80">
            <Categories categories={c1} />
            <Categories categories={c2} />
            <Categories categories={c3} />
          </div>
          <div className="px-4 pb-8 lg:px-80">
            <div className="py-4 flex pt-5 lg:justify-center">
              <Image
                src="/graySearch.svg"
                alt="search icon"
                width={14}
                height={14}
              />
              <input className="bg-transparent border-b-2 w-full ml-2" type="text" placeholder="Ou procure por novas ideias..."/>
            </div>
            <motion.button
              className="bg-primary text-white font-body w-full rounded-sm py-2 mt-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              BUSCAR
            </motion.button>
          </div>
          
        </div>

        <div className="pt-3 px-4">
          <h1 className="my-3 text-gray-800 text-body">Veja também</h1>

          <div className="lg:flex lg:flex-wrap lg:flex-row lg:justify-between">{/* cards! */}
            
          <div className="hidden lg:flex lg:justify-between w-full"> 
            <Card card={card9} />
            <Card card={card10} />
            <Card card={card11} />
            <Card card={card12} />
          </div> 

          <div className="lg:flex lg:flex-wrap lg:justify-between w-full">
            <Card card={card1} />
            <Card card={card2} />
            <Card card={card3} />
            <Card card={card4} />
          </div>

          <div className="hidden lg:flex lg:flex-wrap lg:justify-between w-full">
            <Card card={card5} />
            <Card card={card6} />
            <Card card={card7} />
            <Card card={card8} />
          </div>

          </div>

        <div className="flex justify-center pt-5 pb-6">
          <Image
            src="/downArrow.svg"
            alt="down arrow icon"
            width={16}
            height={9}
          />
        </div>
        
        </div>

        </div>

        <Footer />
        
        </div>

    </div>
  )
}
