import { ImageModality, ImageReview } from "../../../public"

export const homeText = {
    panel_1: {
        text_1: `<b>UBA</b>`,
        text_2: `Universidad de Buenos Aires`,
        text_3: `Carrera Interdisciplinaria de Especialización en`,
    },
    panel_2: [
        {
            image: ImageReview,
            title: `Perfil de la Carrera y título`,
            subTitle_1: `Perfil de la Carrera:`,
            text_1: `Especialmente orientado a la formación clínica, es decir al diagnóstico y tratamiento de las alteraciones neuropsicológicas, 
            con un enfoque interdisciplinario. El marco conceptual, sin descuidar los aportes clásicos, incluye las tendencias teóricas más 
            recientes, la Neuropsicología cognitiva y la Neurociencia cognitiva. En síntesis, formación clínica sobre la base de marcos teóricos 
            actualizados.`,
            subTitle_2: `Título que entrega:`,
            text_2: `Especialista en Neuropsicología Clínica`,
            subTitle_3: `Acreditaciones y Validez del título:`,
            text_3: [`- Primera Carrera de Especiliazación en Neuropsicología de Argentina acreditada y categorizada por CONEAU en 2003 (Recategorizada por Resolución N° 497/13)`,
                `- Validez Nacional del Título, Ministerio de Educación (Resolución 170/11)`,
                `- Primera en dictarse en Modalidad a Distancia por resolución Consejo Superior UBA (RESCS-2024-1377-E-UBA-REC)`
            ],
            button: `Más información`
        },
        {
            image: ImageModality,
            title: `Modalidad de Dictado`,
            text_1: `A partir de la cohorte 2025 la Carrera se dicta bajo modalidad de Educación a distancia.`,
            text_2: `La educación a distancia posee ventajas notables, entre ellas la ubicuidad, la posibilidad 
            de realizar las actividades de aprendizaje en el lugar y momento más conveniente para cada alumno.`,
            text_3: `Pero la educación a distancia no se reduce a la utilización de recursos técnicos virtuales, 
            se apoya en un enfoque pedagógico diferente, dirigido a que los/las estudiantes alcancen la autonomía 
            en la búsqueda, análisis y aplicación de la información profesional. Para lograrlo, la enseñanza está 
            basada en actividades, en la colaboración y la interacción docente-estudiantes y de los estudiantes entre sí.`,
            button_1: `Preguntas frecuentes sobre Educación a distancia`,
            button_2: `Más información`
        }
    ],
    panel_3: [
        {
            name: `Secretaría Posgrado: `,
            text: `posgrado@psi.uba.ar`
        },
        {
            name: `Secretaría de Carreras: `,
            text: `carrerasespecializacion@psi.uba.ar`
        },
        {
            name: `Sistema posgrado: `,
            text: `posgrado.psi.uba.ar`
        },
        {
            name: `Facultad de psicología: `,
            text: `www.psi.uba.ar`
        }
    ]
}