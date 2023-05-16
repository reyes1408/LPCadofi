import solucion from '../assets/solucion.png'

const Solucion = () => {
    return (
        <>
            <div className='grid mb-0 place-items-center'>
                <div>
                    <img src={solucion} className="h-72" alt="Cadofi Logo" />
                </div>
                <span className="text-indigo-900 text-5xl font-bold">
                    Propuesta de solución
                </span>
                <div className='p-9 pl-32 pr-32'>
                    <span className="text-indigo-900 text-1xl text-justify">
                        El desarrollo de una base de datos para la empresa implicaría un proceso de diseño, desarrollo, prueba e implementación de un software que cumpla con los requisitos específicos de la financiera. Con una planificación cuidadosa y un enfoque riguroso en la calidad del software, podemos ayudar a la financiera a gestionar y utilizar eficazmente la información de sus clientes.
                    </span>
                </div>
            </div>
        </>
    )
}
export default Solucion;