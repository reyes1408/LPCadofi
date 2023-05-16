import problem from '../assets/problem.png'

const Problematica = () => {
    return (
        <>
            <div className='grid mb-0 place-items-center'>
                <div>
                    <img src={problem} className="h-80" alt="Cadofi Logo" />
                </div>
                <span className="text-indigo-900 text-5xl font-bold">
                    Problematica encontrada
                </span>
                <div className='p-9 pl-32 pr-32'>
                    <span className="text-indigo-900 text-1xl text-justify">
                        En el caso de CADOFI, se ha informado que la financiera no cuenta con una base de datos centralizada donde puedan visualizar quiénes han quedado en Buró de Crédito en todas sus sucursales. Esto significa que, si un cliente ha quedado registrado en Buró de Crédito en una sucursal de CADOFI, es posible que no se tenga conocimiento de esto en otras sucursales.
                        Como resultado, existe la posibilidad de que CADOFI otorgue un préstamo a un cliente que ha quedado en Buró de Crédito en otra sucursal, lo cual puede ser una preocupación para algunos clientes potenciales que están interesados en solicitar un préstamo a esta financiera.
                    </span>
                </div>
            </div>
        </>
    )
}
export default Problematica;