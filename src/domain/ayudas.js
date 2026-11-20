// Textos didácticos de cada pantalla. Están separados de la interfaz para poder revisarlos y corregirlos fácilmente.

export const GLOSARIO_EMBUDO = [
  { termino: 'Llegaron', significado: 'Cuántos candidatos pasaron alguna vez por esta etapa.' },
  { termino: 'Conversión', significado: 'Porcentaje de los que llegaron a la etapa anterior que sí avanzaron a esta.' },
  { termino: 'Meta', significado: 'Conversión mínima esperada. La línea amarilla de la barra marca esa meta.' },
  { termino: 'Fuga', significado: 'Personas que se perdieron entre una etapa y la siguiente. Las etapas de fuga aparecen en rojo.' },
  { termino: 'Días promedio', significado: 'Cuánto tarda, en promedio, un candidato en pasar a la siguiente etapa. Si crece, hay un cuello de botella.' },
]

export const AYUDA_PANEL = {
  pasos: [
    'Filtra por sede, cohorte o fecha de ingreso para ver un grupo concreto.',
    'Lee el embudo de arriba abajo: la barra es la conversión y la línea amarilla es la meta.',
    'Donde aparezca FUGA, revisa qué pasa en esa etapa antes de cualquier otra cosa.',
    'Atiende primero la lista «Qué atender hoy»: los azules son nuevos y aún no los ha revisado nadie.',
  ],
  glosario: GLOSARIO_EMBUDO,
}

export const AYUDA_FICHAS = {
  pasos: [
    'Busca por código (CND-0001), o filtra por sede, etapa o estado.',
    'Pulsa «Ver ficha» para ver el historial completo de un candidato.',
    'Usa «Revisar» en las tarjetas azules para marcar que ya las atendiste.',
  ],
  nota: 'Privacidad: aquí solo se muestran códigos. No escribas nombres, cédulas ni teléfonos en las notas.',
}

export const AYUDA_KANBAN = {
  pasos: [
    'Cada columna es una etapa del embudo. La tarjeta muestra cuántos días lleva sin avanzar.',
    'Para mover a alguien, arrástralo a otra columna o usa «Mover a…» (es más accesible con teclado).',
    'Antes de confirmar, el sistema te dice qué va a pasar. Revísalo y confirma.',
    'Las tarjetas azules son nuevas. Pulsa «Revisar» cuando ya las hayas atendido.',
  ],
  nota: 'Para registrar gente que entró hoy, usa el botón «Entraron por día».',
}

export const AYUDA_ATENCION = {
  entrevistas: [
    'Estos candidatos están en la etapa de entrevista.',
    'Revisa primero los que llevan más días sin avance: aparecen arriba.',
  ],
  resultados: [
    'Son candidatos con una prueba técnica o entrevista pendiente de decisión.',
    'Aprobar los avanza a la siguiente etapa. No aprobar los manda a Excluidos.',
  ],
  espera: [
    'Candidatos que quedaron en espera porque no había cupo.',
    'Reactívalos cuando haya lugar, o exclúyelos si ya no aplican.',
  ],
  excluidos: [
    'Candidatos que salieron del proceso.',
    'Si la situación cambió, puedes reactivarlos desde aquí.',
  ],
}

export const AYUDA_CALENDARIO = {
  campus: [
    'Programa cada Campus Day con su sede y fecha.',
    'La asistencia se compara contra la meta del 75 % de los agendados.',
  ],
  cohortes: [
    'Cada cohorte es una generación de estudiantes con fecha de inicio y de cierre.',
  ],
  landing: [
    'Estas son las fechas que ve el público en la página de admisiones.',
    'Puedes ocultar una fecha sin borrarla: así la conservas para más adelante.',
  ],
  reporte: [
    'Elige un día para ver cuántos entraron, cuántos avanzaron y cuántos salieron.',
    'Con «Descargar CSV» obtienes los últimos 7 días para una hoja de cálculo.',
  ],
}

export const AYUDA_MERCADEO = {
  organica: [
    'Elige el estilo, la temática y el formato de la imagen.',
    'La IA propone piezas; tú decides cuáles aprobar. Nada se publica sin tu aprobación.',
  ],
  crear: [
    'Una campaña necesita nombre, objetivo, presupuesto y cuántas piezas quieres.',
    'El presupuesto disponible se descuenta a medida que creas campañas.',
  ],
  estado: [
    'Cada campaña muestra cuántas piezas están aprobadas frente a la meta.',
    'Genera piezas con IA y apruébalas una por una. Cuando lleguen a la meta, la campaña queda lista para publicar.',
  ],
  cerebro: [
    'Aquí se escriben las instrucciones que recibe la IA. Cámbialas sin tocar el código.',
    'Las variables {{nombre}}, {{presupuesto}} y {{objetivo_negocio}} se llenan solas con los datos de cada campaña.',
    'La vista previa muestra exactamente el texto que recibirá la IA.',
  ],
}
