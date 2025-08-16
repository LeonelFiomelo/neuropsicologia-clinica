import Link from "next/link";
import { planAcademicoText as TEXTS } from "@/locales/es/planAcademico";
import { TableCronograma, SvgUniversity, SvgList, TablePlanDeEstudios, SvgDiploma, SvgPdf } from "@/components";

const pdfUrl_1 = "/assets/Plan_de_estudios.pdf";

export default function PlanAcademico() {
  return (
    <main className="min-h-screen text-lg">
      
      <div className="flex flex-col gap-8 w-full lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto mt-2 mb-8 text-gray-600">

        {/* TITULO QUE EMITE */}
        <section className="flex gap-2">
          <SvgDiploma color="#16a34a" />
          <div className="flex flex-col space-y-3 w-full">
            <b>{TEXTS.text_3}</b>
            <p>{TEXTS.text_4}</p>
          </div>
        </section>

        {/* OBJETIVOS */}
        <section className="flex w-full gap-2">
          <SvgList fill="fill-green-600" />
          <div className="flex flex-col space-y-3 w-full">
            <b>{TEXTS.text_5}</b>
            <ul className="flex flex-col space-y-3">
              {
                TEXTS.objetives.map((objetive, index) => (
                  <li className="whitespace-normal" key={index}>&#x2022; {objetive}</li>
                ))
              }
            </ul>
          </div>
        </section>

        {/* ESTRUCTURA DEL PLAN DE ESTUDIOS */}
        <section className="flex gap-2">
          <SvgUniversity fill="fill-green-600"/>
          <div className="flex flex-col space-y-3 w-full">
            <b>{TEXTS.structure.title}</b>
            {
              TEXTS.structure.texts.map((text, index) => <p key={index}>{text}</p>)
            }
          </div>
        </section>

        <TableCronograma />

        {/* <TablePlanDeEstudios /> */}

        {/* ARCHIVOS */}
        <section className="flex flex-col gap-4">
          <strong className="text-start uppercase">{TEXTS.text_6}</strong>
          <div className="flex md:flex-row flex-col gap-6 max-w-max">
            <Link
                title="Plan de estudios"
                href={pdfUrl_1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 py-2 px-3 transition-all bg-green-400 hover:bg-green-300 md:max-w-max w-full rounded-md text-gray-800"
              >
              <SvgPdf color="#1f2937" />
              {TEXTS.text_7}
            </Link>
          </div>
        </section>

      </div>

    </main>
  );
}
