
export default function TableCronograma() {
    return (
        <div className="flex flex-col w-full mx-auto gap-4">

            <p>Las materias se dictan una vez cada dos años, de acuerdo al siguiente cronograma:</p>

            <div className="flex flex-col gap-4">
                <p className="text-center text-xl font-bold uppercase pt-2">Años impares</p>
                <div className="flex flex-col rounded-md border border-gray-400">
                    <p className="text-center font-bold bg-gray-200 rounded-t-md py-2 border-b border-gray-400">Primer cuatrimestre</p>
                    <table className="mt-0">
                        <thead>
                            <tr>
                                <th className="w-1/2 py-2 border-b border-gray-400">Materias obligatorias</th>
                                <th className="w-1/2 py-2 border-b border-l border-gray-400">Materias optativas</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-base">
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Neuropsicología. Módulo I</td>
                                <td className="py-2 px-2">Evaluación neuropsicológica infantil</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Clínica de las alteraciones del lenguaje</td>
                                <td className="py-2 px-2"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Elementos de neurología para neuropsicología</td>
                                <td className="py-2 px-2"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Prácticas clínicas: adultos/infantil</td>
                                <td className="py-2 px-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col rounded-md border border-gray-400">
                    <p className="text-center font-bold bg-gray-200 rounded-t-md py-2 border-b border-gray-400">Segundo cuatrimestre</p>
                    <table className="mt-0">
                        <thead>
                            <tr>
                                <th className="w-1/2 py-2 border-b border-gray-400">Materias obligatorias</th>
                                <th className="w-1/2 py-2 border-b border-l border-gray-400">Materias optativas</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-base">
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Neuropsicología del envejecimiento. Deterioros Cognitivos</td>
                                <td className="py-2 px-2">Taller: Intervenciones neuropsicológicas en neurocirugía <i>(intensivo)</i></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Neuropsicología. Modulo II</td>
                                <td className="py-2 px-2">Seminario para la elaboración del TIF <i>(intensivo)</i></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Prácticas clínicas: adultos/infantil</td>
                                <td className="py-2 px-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-center text-xl font-bold uppercase pt-2">Años pares</p>
                <div className="flex flex-col rounded-md border border-gray-400">
                    <p className="text-center font-bold bg-gray-200 rounded-t-md py-2 border-b border-gray-400">Primer cuatrimestre</p>
                    <table className="mt-0">
                        <thead>
                            <tr>
                                <th scope="col" className="w-1/2 py-1 border-b border-gray-400">Materias obligatorias</th>
                                <th scope="col" className="w-1/2 py-2 border-b border-l border-gray-400">Materias optativas</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-base">
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Neuropsicología Infantil. Modulo I</td>
                                <td className="py-2 px-2">Neuropsicolingüística cognitiva</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Evaluación neuropsicológica</td>
                                <td className="py-2 px-2"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Metodología de la investigación</td>
                                <td className="py-2 px-2"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Prácticas clínicas: adultos/infantil</td>
                                <td className="py-2 px-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col rounded-md border border-gray-400">
                    <p className="text-center font-bold bg-gray-200 rounded-t-md py-2 border-b border-gray-400">Segundo cuatrimestre</p>
                    <table className="mt-0">
                        <thead>
                            <tr>
                                <th scope="col" className="w-1/2 py-2 border-b border-gray-400">Materias obligatorias</th>
                                <th scope="col" className="w-1/2 py-2 border-b border-l border-gray-400">Materias optativas</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-base">
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Neuropsicología infantil. Módulo II</td>
                                <td className="py-2 px-2">Psicolingüística del desarrollo</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Tratamiento rehabilitador en neuropsicología</td>
                                <td className="py-2 px-2">Elementos de neuropsiquiatría</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400">Prácticas clínicas: adultos/infantil</td>
                                <td className="py-2 px-2">Taller: perfeccionamiento para el uso e interpretación de pruebas <i>(intensivo)</i></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-r border-gray-400"></td>
                                <td className="py-2 px-2">Seminario para la elaboración del TIF <i>(intensivo)</i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <i>Nota: las materias optativas pueden variar de acuerdo a la planificación específica de cada año</i>
            
        </div>
    )
}