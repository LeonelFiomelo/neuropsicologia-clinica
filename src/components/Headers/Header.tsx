'use client'
import Image from 'next/image';
import { usePathname } from "next/navigation";

type pathNameType = "/" | "/plan-academico/" | "/inscripcion/" | "/graduacion/" | "/autoridades/" | "/preguntas/";

export default function Header() {

    const pathName = usePathname();

    const texts = {
        "/": 'Inicio',
        "/plan-academico/": "Plan Académico y Cronograma",
        "/inscripcion/": "Admisión e Inscripción",
        "/graduacion/": "Graduación",
        "/autoridades/": "Autoridades y Cuerpo Docente",
        "/preguntas/": "Preguntas Frecuentes"
    }

    const path = pathName.toString() as pathNameType

    return (
        <div className="relative flex justify-center items-center p-8 w-full h-72">
            <Image
                className='h-full'
                src="/neuronas.jpeg"
                alt="Neuronas"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="-top-4 absolute w-full h-full bg-gradient-to-t from-black/90 to-black/20"></div>
            <div className="flex flex-col justify-center gap-6 w-full max-w-4xl h-full z-10">
                <div className="flex flex-col gap-1 p-3 rounded-md bg-gray-800/90 max-w-max">
                    <p className="text-green-400 md:text-base text-xs">Carrera Interdisciplinaria de Especialización en</p>
                    <p className="text-white md:text-4xl text-2xl font-semibold">Neuropsicología Clínica</p>
                </div>
                <h1 className={`font-bold md:text-4xl text-2xl text-white pl-3`}>
                    {texts[path]}
                </h1>
            </div>
            
        </div>
    )
}