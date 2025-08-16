'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { inscripcionText as TEXTS } from "@/locales/es/inscripcion";

export default function QuienesSomos() {

  const [showContacts, setShowContacts] = useState<boolean>(false);

  const {vignette_1: v_1, vignette_2: v_2, vignette_3: v_3, vignette_4: v_4, vignette_5: v_5} = TEXTS;

  return (
    <main className="min-h-screen text-lg">
      <div className="flex flex-col gap-4 w-full lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto items-center mb-6">
        <section className="flex flex-col w-full gap-6 leading-7">
          
          <article className="flex">
            <p><strong>{v_1.text}</strong> {v_1.subText}</p>
          </article>

          <article className="flex flex-col gap-1">
            <p><strong>{v_2.text}</strong> {v_2.subText}</p>
          </article>

          <article className="flex flex-col w-full">
                <b>{v_3.title}</b>
                <p>&#x2022; {v_3.texts[0]} {v_3.texts[1]}</p>
                <p>{v_3.texts[2]}</p>
                <p>&#x2022; {v_3.texts[3]} {v_3.texts[4]}</p>
                <p>&#x2022; {v_3.texts[5]} {v_3.texts[6]} <Link target="_blank" href={v_3.links[0].href} className="text-blue-700 transition-all hover:text-blue-500">{v_3.links[0].text}</Link></p>
          </article>

          <article className="flex flex-col w-full">
            <b>{v_4.title}</b>
            <p>{v_4.texts[0]}</p>
            <p>&#x2022; {v_4.texts[1]} <Link target="_blank" href={v_4.links[0].href} className="text-blue-700 transition-all hover:text-blue-500">{v_4.links[0].text}</Link></p>
            <p>&#x2022; {v_4.texts[2]} <Link target="_blank" href={v_4.links[1].href} className="text-blue-700 transition-all hover:text-blue-500">{v_4.links[1].text}</Link></p>
            <p>&#x2022; {v_4.texts[3]} <Link target="_blank" href={v_4.links[2].href} className="text-blue-700 transition-all hover:text-blue-500">{v_4.links[2].text}</Link></p>
          </article>

          <article className="flex flex-col w-full">
            <b>{v_5.title}</b>
            <p>{v_5.texts[0]}</p>
            <p>{v_5.texts[1]}</p>
            <br />
            <p>{v_5.texts[2]}</p>
            <br />
            <p>&#x2022; {v_5.texts[3]} <Link target="_blank" href={v_5.links[0].href} className="text-blue-700 transition-all hover:text-blue-500">{v_5.links[0].text}</Link></p>
            <p>&#x2022; {v_5.texts[4]} <Link target="_blank" href={v_5.links[1].href} className="text-blue-700 transition-all hover:text-blue-500">{v_5.links[1].text}</Link></p>
            <p>&#x2022; {v_5.texts[5]} <Link target="_blank" href={v_5.links[2].href} className="text-blue-700 transition-all hover:text-blue-500">{v_5.links[2].text}</Link></p>
            <br />
            <b>{v_5.texts[6]}</b>
            <p>{v_5.texts[7]}</p>
            <p>&#x2022; {v_5.texts[8]} <Link target="_blank" href={v_5.links[3].href} className="text-blue-700 transition-all hover:text-blue-500">{v_5.links[3].text}</Link></p>
          </article>

        </section>
      </div>
    </main>
  );
}
