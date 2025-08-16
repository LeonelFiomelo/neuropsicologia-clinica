'use client'
import './Carousel.css'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from "react";
import { homeText as Texts } from '@/locales/es/home';
import { ImageNeuronas, ImageUbaLogo } from "../../../public";
import Link from 'next/link';
import SvgInfo from '../Svgs/SvgInfo';
import SvgQuestion from '../Svgs/SvgQuestion';

export default function Carousel() {

    const router = useRouter();

    const data = [
        ImageNeuronas,
        ImageUbaLogo
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, [data.length]);
    
    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    }, [data.length]);

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, section: string) => {
        e.preventDefault()
        sessionStorage.setItem('scrollTarget', section)
        router.push('/preguntas')
    }

    const [slide_1, slide_2] = Texts.panel_2;

    return (
        <div className="relative w-full lg:max-w-4xl mx-auto overflow-hidden rounded-xl">
            {/* Slides */}
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {/* Slide 1 */}
                <div key={"slide_1"} className="relative w-full flex-shrink-0">
                    <div className="relative flex lg:h-[600px] h-[900px] mx-auto bg-gray-900">
                        <Image
                            src={slide_1.image}
                            alt="Imagen"
                            className="object-cover brightness-[.4]"
                            priority
                        />
                        <div className='absolute flex flex-col justify-between pt-6 pb-10 h-full w-full'>
                            <div className="text-white md:px-10 px-6 py-2 mr-4 ml-4 rounded">
                                <b className="text-2xl">{slide_1.title}</b>
                            </div>
                            <div className="text-white px-10 py-2 md:mr-4 mr-0 md:ml-4 ml-0 space-y-2 rounded md:text-lg text-sm leading-7">
                                <p className='font-semibold'><b>{slide_1.subTitle_1}</b> {slide_1.text_1}</p>
                                <Link
                                    scroll={true}
                                    title="Más información"
                                    href="/plan-academico"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 py-2 px-3 transition-all bg-green-400 hover:bg-green-300 max-w-max w-full rounded-md text-gray-800"
                                >
                                    <SvgInfo />
                                    Más información
                                </Link>
                                <p className='font-semibold'><b>{slide_1.subTitle_2}</b> {slide_1.text_2}</p>
                                <div className='font-semibold flex flex-col'>
                                    <b>{slide_1.subTitle_3}</b>
                                    {
                                        Array.isArray(slide_1.text_3)
                                            ? slide_1.text_3.map((text, index) => (<div key={index}>{text}<br/></div>))
                                            : <div>{slide_1.text_3}</div> // Si es un string, simplemente lo muestra
                                    }
                                </div>
                                <Link
                                    title="Preguntas frecuentes"
                                    href="/preguntas"
                                    onClick={(e) => handleNavigation(e, '/preguntas', 'carrera')}
                                    className="flex items-center gap-2 py-2 px-3 transition-all bg-green-400 hover:bg-green-300 max-w-max w-full rounded-md text-gray-800"
                                >
                                    <SvgQuestion />
                                    Preguntas frecuentes <p className='hidden md:block'>sobre la Carrera</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div key={"slide_2"} className="relative w-full flex-shrink-0 bg-green-200">
                    <div className="relative flex lg:h-[600px] h-[900px] mx-auto bg-gray-900">
                        <Image
                            src={slide_2.image}
                            alt="Imagen"
                            className="object-cover brightness-[.5]"
                            priority={false}
                        />
                        <div className='absolute flex flex-col justify-between pt-6 pb-10 h-full w-full'>
                            <div className="text-white md:px-10 px-6 py-2 mr-4 ml-4 rounded">
                                <b className="text-2xl">{slide_2.title}</b>
                            </div>
                            <div className="text-white px-10 py-2 md:mr-4 mr-0 md:ml-4 ml-0 space-y-4 rounded md:text-lg text-sm leading-7">
                                <p className="font-semibold md:text-lg text-base">{slide_2.text_1}</p>
                                <p className="font-semibold md:text-lg text-base">{slide_2.text_2}</p>
                                <p className="font-semibold md:text-lg text-base">{slide_2.text_3}</p>
                                <div className="flex md:flex-row flex-col gap-4 max-w-max">
                                    <Link
                                        title="Preguntas frecuentes"
                                        href="/preguntas"
                                        onClick={(e) => handleNavigation(e, '/preguntas', 'educacion')}
                                        className="flex items-center gap-2 py-2 px-3 transition-all bg-green-400 hover:bg-green-300 max-w-max w-full rounded-md text-gray-800"
                                    >
                                        <SvgQuestion />
                                        Preguntas frecuentes <p className='hidden md:block'>sobre Educación a distancia</p>
                                    </Link>
                                    <Link
                                        title="Más información"
                                        href="https://www.youtube.com/@neuropsicologiauba"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 py-2 px-3 transition-all bg-green-400 hover:bg-green-300 max-w-max w-full rounded-md text-gray-800"
                                    >
                                        <SvgInfo />
                                        Más información
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 md:left-6 left-3 transform -translate-y-1/2 text-green-600 md:hover:text-green-400 text-4xl"
            >
                &#10092;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 md:right-6 right-3 transform -translate-y-1/2 text-green-600 md:hover:text-green-400 text-4xl"
            >
                &#10093;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {data.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                    currentIndex === index ? "bg-green-400" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                ></div>
                ))}
            </div>
        </div>
    );
}