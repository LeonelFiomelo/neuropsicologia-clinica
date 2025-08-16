import { planAcademicoText as Texts } from "@/locales/es/planAcademico"

export default function TablePlanDeEstudios() {
    return (
        <div className="flex flex-col gap-8">
            <strong className="text-center uppercase">Tabla de asignaturas con su carga horaria</strong>
            {
            Texts.tablePlanDeEstudios.tables.map((table, index) => (
                <table key={index} className="w-full">
                    <thead>
                        <tr>
                            <td colSpan={2} className="font-bold text-center py-2 bg-gray-200 rounded-t-sm">{table.title}</td>
                        </tr>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col w-[60px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        table.rows.map((row, index)=> (
                            <tr key={index} className="border-b bg-white">
                                <td scope="row" className="py-2">{row.text}</td>
                                <td scope="row" className="py-2 text-center w-[60px]">{row.hour}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            ))
            }
        </div>
    )
}