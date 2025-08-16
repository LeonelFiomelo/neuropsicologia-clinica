'use client'
import { useEffect } from "react";
import { PREGUNTAS_CARRERA_TEXTS as C_TEXTS } from "@/locales/es/preguntasCarrera";
import { PREGUNTAS_EDUCACION_TEXTS as E_TEXTS } from "@/locales/es/preguntasEducacion";
import Link from "next/link";

export default function Preguntas() {

  useEffect(() => {

    const scrollTarget = sessionStorage.getItem('scrollTarget')

    if (scrollTarget) {
      sessionStorage.removeItem('scrollTarget')
      const element = document.getElementById(scrollTarget)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
  }, [])

  function parseAnswer(answer: string | string[]) {
    // Convertir todo en un solo string si es un array
    const text = Array.isArray(answer) ? answer.join(" ") : answer;

    return text.split(/(https?:\/\/[^\s]+)/g).map((part, index) =>
        part.match(/https?:\/\/[^\s]+/) ? (
            <Link key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {part}
            </Link>
        ) : (
            part
        )
    );
  }

  return (
    <main className="min-h-screen text-lg">
      <div className="flex flex-col gap-8 w-full lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto mt-2 mb-8">
        <article className="flex flex-col gap-6" id="carrera">
            <b className="text-xl">{C_TEXTS.title}</b>
            {
                C_TEXTS.qa.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 text-gray-600">
                        <p className="font-medium">&#x2022; {item.question}</p>
                        <p>{parseAnswer(item.answer)}</p>
                    </div>
                ))
            }
        </article>
        <article className="flex flex-col gap-6" id="educacion">
            <b className="text-xl">{E_TEXTS.title}</b>
            {
                E_TEXTS.qa.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 text-gray-600">
                        <p className="font-medium">&#x2022; {item.question}</p>
                        <p>{parseAnswer(item.answer)}</p>
                    </div>
                ))
            }
        </article>
      </div>
    </main>
  );
}
