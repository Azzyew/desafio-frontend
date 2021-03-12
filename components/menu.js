import Image from "next/image";
import { motion } from "framer-motion";

export default function Menu() {
    return (
        <div className="font-body text-gray-500 h-auto flex flex-col w-1/5 border border-l-2 hidden lg:flex">
            <div className="mb-2 shadow-lg">
                <Image
                    src="/next-logo.png"
                    alt="next.js logo"
                    width={244}
                    height={62}
                />
            </div>

            <div className="px-6 flex flex-col items-start text-sm">

                <motion.button
                    className="text-bright pt-7 pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Início
                </motion.button>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Minha Lista
                </motion.button>
                <hr className="text-gray-500 bg-gray-500 w-full border my-4"/>

                <span className="text-blue-800 text-xs py-3">NAVEGAR</span>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Treinamentos
                </motion.button>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Trilhas
                </motion.button>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Podcasts
                </motion.button>
                <hr className="text-gray-500 bg-gray-500 w-full border my-4" />

                <span className="text-blue-800 text-xs py-3">CATEGORIAS</span>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Ferramentas e Sistemas
                </motion.button>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Gestão Estratégica
                </motion.button>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Produtos
                </motion.button>
                <div className="flex flex-row align-center">
                    <motion.button
                        className="text-bright ml-4 text-sm py-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Ver todas
                    </motion.button>
                    <div className="ml-2 flex justify-center">
                        <Image
                            src="/rightArrow.svg"
                            alt="right arrow icon"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <hr className="text-gray-500 bg-gray-500 w-full border my-4" />

                <span className="text-blue-800 text-xs py-3">MATERIAL DE APOIO</span>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Ferramentas
                </motion.button>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Biblioteca
                </motion.button>
                <motion.button
                    className="pb-2.5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Anotações
                </motion.button>
            </div>
        </div>
    )
}