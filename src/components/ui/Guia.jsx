// Bloque didáctico de cada pantalla: qué ves, qué hacer y qué significa cada término.
// Se muestra abierto la primera vez; el usuario puede plegarlo cuando ya lo conoce.
export function Guia({ titulo = 'Cómo usar esta pantalla', pasos = [], glosario = [], nota }) {
  return (
    <details className="guia" open>
      <summary className="guia__titulo">
        <span aria-hidden="true">▶▶</span> {titulo}
      </summary>
      <div className="guia__cuerpo">
        {pasos.length > 0 && (
          <ol className="guia__pasos">
            {pasos.map((paso) => (
              <li key={paso}>{paso}</li>
            ))}
          </ol>
        )}
        {glosario.length > 0 && (
          <dl className="guia__glosario">
            {glosario.map(({ termino, significado }) => (
              <div key={termino}>
                <dt>{termino}</dt>
                <dd>{significado}</dd>
              </div>
            ))}
          </dl>
        )}
        {nota && <p className="guia__nota">{nota}</p>}
      </div>
    </details>
  )
}
