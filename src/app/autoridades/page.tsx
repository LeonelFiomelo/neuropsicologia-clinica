import { Card } from "@/components";
import { autoridadesText as TEXTS, docentesText as DOCENTES } from "@/locales/es/autoridades";

export default function QuienesSomos() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-6 w-full lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto items-center">
        
        {/* AUTORIDADES */}
        <section className="flex flex-col gap-6">
          <Card  img={TEXTS.aldo.image} name={TEXTS.aldo.name} lastName={TEXTS.aldo.lastName} title={TEXTS.aldo.title} text={TEXTS.aldo.text} />
          <Card  img={TEXTS.laura.image} name={TEXTS.laura.name} lastName={TEXTS.laura.lastName} title={TEXTS.laura.title} text={TEXTS.laura.text} />
          <Card  img={TEXTS.samanta.image} name={TEXTS.samanta.name} lastName={TEXTS.samanta.lastName} title={TEXTS.samanta.title} text={TEXTS.samanta.text} />
          <Card  img={TEXTS.cecilia.image} name={TEXTS.cecilia.name} lastName={TEXTS.cecilia.lastName} title={TEXTS.cecilia.title} text={TEXTS.cecilia.text} />
        </section>

        {/* LISTADO */}

        {/* DOCENTES */}
        <div className="flex flex-col w-full gap-6">
          <b className="text-center text-2xl">{DOCENTES.title_1}</b>
          <b className="text-lg pl-2">{DOCENTES.responsables.title}</b>
          <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-4 mb-6 text-lg">
            {
              DOCENTES.responsables.list.sort().map((nombre, index) => (
                <div key={index} className="bg-white p-2 rounded shadow">
                  <span>{nombre}</span>
                </div>
              ))
            }
          </div>
        </div>

        <div className="flex flex-col w-full gap-6">
          <b className="text-center text-2xl">{DOCENTES.title_2}</b>
          {/* COLABORADORES */}
          <div className="flex flex-col gap-6">
            <b className="text-lg pl-2">{DOCENTES.colaboradores.title}</b>
            <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-4 mb-6 text-lg">
              {
                DOCENTES.colaboradores.list.sort().map((nombre, index) => (
                  <div key={index} className="bg-white p-2 rounded shadow">
                    <span>{nombre}</span>
                  </div>
                ))
              }
            </div>
          </div>
          {/* DOCENTES */}
          <div className="flex flex-col gap-6">
            <b className="text-lg pl-2">{DOCENTES.invitados.title}</b>
            <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-4 mb-8 text-lg">
              {
                DOCENTES.invitados.list.sort().map((nombre, index) => (
                  <div key={index} className="bg-white p-2 rounded shadow">
                    <span>{nombre}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}