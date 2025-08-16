import Link from "next/link";
import { TEXTS } from "./text";

export default function RecursosDisponibles() {
  return (
    <main className="h-full text-lg">
      
      <div className="flex flex-col gap-4 leading-7 w-full lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto items-center">
        
        <article>
          <p>{TEXTS.text}</p>
        </article>

        {/* INFORMACIÓN GENERAL */}
        <article className="flex flex-col">
          <b className="text-2xl text-center">{TEXTS.informacionGeneral.title}</b>
          {
            TEXTS.informacionGeneral.items.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 mt-4">
                <h6 className="font-bold">{item.title}</h6>
                <p>{item.text}</p>
              </div>
            ))
          }
        </article>
        
        {/* PAUTAS DE ELABORACIÓN */}
        <article className="flex flex-col">
          <b className="text-2xl text-center">{TEXTS.pautasDeElaboracion.title}</b>
          <div className="flex flex-col gap-1 mt-2">
            <h6 className="font-bold">{TEXTS.pautasDeElaboracion.item_1.title}</h6>
            <p>{TEXTS.pautasDeElaboracion.item_1.text}</p>
          </div>
          {
            TEXTS.pautasDeElaboracion.list.map((item, index) => (
              <div key={index} className="flex gap-1 mt-4">
                <i>{item.text}</i>
                <Link href={item.link} target="_blank" className="text-blue-700 transtion-all hover:text-blue-500">Ver mas</Link>
              </div>
            ))
          }
          <div className="flex flex-col gap-1 mt-4">
            <h6 className="font-bold">{TEXTS.pautasDeElaboracion.item_2.title}</h6>
            <p>
              {TEXTS.pautasDeElaboracion.item_2.text_1}
              <i> {TEXTS.pautasDeElaboracion.item_2.text_2}. </i>
              {TEXTS.pautasDeElaboracion.item_2.text_3}
            </p>
            <p>
              {TEXTS.pautasDeElaboracion.item_2.text_4}
            </p>
          </div>
        </article>

        {/* EVALUACIÓN */}
        <article className="flex flex-col mb-8">
          <b className="text-2xl text-center">{TEXTS.evaluacion.title}</b>
          <div className="flex flex-col gap-1 mt-2">
            <h6 className="font-bold">{TEXTS.evaluacion.subTitle}</h6>
            <p>
              La evaluación del TIF estará a cargo de un jurado compuesto por tres miembros que posean título de doctorado, maestría y/o especialización en un área afín con la Neuropsicología o trayectoria equivalente.
              <br />
              El TIF se evalúa en dos instancias: una presentación escrita y su posterior defensa oral. La presentación escrita deberá estar avalada por el director del TIF. El jurado considerará en primer término la parte escrita, que evaluará como suficiente o insuficiente. Para ello, utilizará una <b>ficha de evaluación</b> que los/as estudiantes pueden consultar en el siguiente link: <Link href={TEXTS.evaluacion.link} className="text-blue-700 transtion-all hover:text-blue-500" target="_blank"> Ver mas</Link>
              <br />
              En caso de ser <b>suficiente</b> se pasará a la instancia oral. Si el escrito es calificado como <b>insuficiente</b> el/la estudiante reelaborará su trabajo y podrá presentar el nuevo TIF después de transcurrido un año.
              <br />
              La defensa oral consistirá en una exposición por parte del/la estudiante, de 20 a 30 minutos de duración aproximada, después de la cual deberá responder las preguntas que el jurado considere pertinentes. La instancia oral será calificada con nota numérica de 0 a 10, si ésta es menor de 4 (cuatro) puntos, se considerará insuficiente. La calificación del trabajo final será volcada en un acta que firmarán los miembros del jurado.
            </p>
          </div>
        </article>

      </div>

    </main>
  );
}
