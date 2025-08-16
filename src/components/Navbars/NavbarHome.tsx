'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuHome, ButtonNavbar, SvgClose, Header } from "../index";

type pathNameType =  "/" | "/plan-academico" | "/inscripcion" | "/graduacion" | "/autoridades" | "/preguntas";

export default function NavbarHome() {
    
    const pathName = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathName])

    return (
        <nav className={`bg-[#ffffff] py-6 relative w-full z-20`}>
            <div className="xl:max-w-screen-xl lg:max-w-4xl flex flex-row-reverse lg:flex-row flex-wrap items-center justify-between mx-auto py-2 px-4 gap-6">
                <ButtonNavbar onClick={toggleMenu} />
                <div className="flex gap-1 text-xl">
                    <p className="text-blue-900 font-bold">Neuropsicología</p>
                    <p className="text-black">Clínica</p>
                </div>
                <div className={`max-w-max fixed min-h-svh z-50 transition-all top-0 right-0 bg-[#1A1C1B] p-4 lg:p-0 lg:w-auto lg:bg-inherit lg:min-h-min lg:static duration-500 ease-in-out ${isOpen ? "-translate-x-0" : "translate-x-full"} lg:translate-x-0`} id="navbar-default">
                    <button className="lg:hidden" onClick={toggleMenu}>
                        <SvgClose size={48} color="stroke-gray-400" />
                    </button>
                    <MenuHome />
                </div>
                <div className={`w-full fixed top-0 right-0 h-svh z-40 bg-gray-800/60 transition-all duration-500 ease-in-out ${isOpen ? "visible" : "hidden"} lg:hidden`}></div>
            </div>
            <div className="mt-8">
                <Header/>
            </div>
        </nav>
    )
}
