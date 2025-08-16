'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { homeText as Texts } from "@/locales/es/home";
import { ImageUbaLogo, ImagePsicologiaLogo, ImageNeuropsicologiaLogo } from "../../public";
import { SvgMail, SvgInstagram, SvgYoutube, Carousel, SvgCopy, ButtonIcon, Alert, SvgArrowSmall } from "@/components";

export default function Home() {

  const [copied, setCopied] = useState(false);
  const [textCopied, setTextCopied] = useState<string>('');
  const [showContacts, setShowContacts] = useState<boolean>(false);

  function copyMail(mail: string) {
      setTextCopied(mail)
      navigator.clipboard.writeText(mail).then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false),
            setTextCopied('')
          }, 2000);
      });;
  }

  return (
    <main className="relative flex justify-center min-h-screen">
      <Alert className={`fixed z-50 mx-auto bottom-2 transition-all duration-500 ${copied ? 'block' : 'hidden'}`} />
      <div className="w-full lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto my-8">
        {/* LOGOS */}
        <section className="flex flex-col gap-16 lg:gap-0 lg:flex-row w-full min-h-32 justify-between items-center animate-reveal-left-to-right-smoothest">
          <Image 
            src={ImageUbaLogo}
            alt="Logo de la Universidad de Buenos Aires"
            className="w-64 h-auto"
            priority
          />
          <Image 
            src={ImagePsicologiaLogo}
            alt="Logo de la Universidad de psicología"
            className="w-64 h-auto"
            priority
          />
          <Image 
            src={ImageNeuropsicologiaLogo}
            alt="Logo de la Neuropsicología Clínica"
            className="w-64 h-auto"
            priority
          />
        </section>
        {/* CAROUSEL */}
        <section className="my-12 animate-reveal-left-to-right-smoothest">
          <Carousel />
        </section>
        {/* CONTACTO */}
        <section className="flex flex-col w-full max-w-lg mx-auto gap-8 justify-center items-center">
          <strong className="text-2xl">Contacto:</strong>

          <div className="relative flex items-center gap-2 md:text-2xl text-lg">
            <span className={`absolute -left-5 text-green-700 transition-all ${textCopied != "carrneuro@psi.uba.ar" ? 'hidden' : 'block'}`}>&#10003;</span>
            <p>carrneuro@psi.uba.ar</p>
            <ButtonIcon title="Copiar" className="absolute -right-8" icon={<SvgCopy size={26} color="#1f2937" />} onClick={() => copyMail("carrneuro@psi.uba.ar")} />
          </div>

          <ul className="flex w-full justify-between">
            <li>
              <Link href={"mailto:correo@ejemplo.com"} target="_blank" title="Mail" className="flex p-3 rounded-full bg-gray-900 transition-all hover:bg-green-500">
                <SvgMail size={24}/>
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/neuropsicologia.uba"} target="_blank" title="Instagram" className="flex p-3 rounded-full bg-gray-900 transition-all hover:bg-green-500">
                <SvgInstagram size={24}/>
              </Link>
            </li>
            <li>
              <Link href={"https://www.youtube.com/@neuropsicologiauba"} target="_blank" title="Youtube" className="flex p-3 rounded-full bg-gray-900 transition-all hover:bg-green-500">
                <SvgYoutube size={24}/>
              </Link>
            </li>
          </ul>

          {/* OTROS CONTACTOS */}
          <article className="flex flex-col gap-2 w-full">
            <div onClick={() => setShowContacts(!showContacts)} className={`flex w-full justify-between items-center p-2 cursor-pointer rounded-md font-semibold transition-all lg:hover:bg-green-400 ${showContacts ? 'bg-green-400' : 'bg-gray-200'}`}>
              <p className="md:text-lg text-sm">Otros contactos:</p>
              <p className={`${showContacts ? 'rotate-90' : '-rotate-90'}`}><SvgArrowSmall direction="left" /></p>
            </div>
            <div className="relative overflow-hidden w-full pl-2">
              <ul className={`flex flex-col w-full gap-4 transition-all duration-500 ease-in-out ${showContacts ? 'translate-y-0' : '-translate-y-full'}`}>
                {
                  Texts.panel_3.map((item, index) => (
                    <li key={index} className="relative flex items-center justify-between">
                      <div className="flex flex-col md:flex-row gap-1 md:text-lg text-sm">
                        <p>{item.name}</p>
                        <p className="flex gap-1 md:ml-0 ml-4"><span className="md:hidden">&#x2022;</span> {item.text} <span className={`text-green-700 transition-all ${textCopied != item.text ? 'hidden' : 'block'}`}>&#10003;</span></p>
                      </div>
                      <ButtonIcon title="Copiar" icon={<SvgCopy size={26} color="#1f2937" />} onClick={() => copyMail(item.text)} />
                    </li>
                  ))
                }
              </ul>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
