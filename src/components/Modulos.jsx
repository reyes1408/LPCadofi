import moduloAltaCli from '../assets/moduloAlta.jpg'
import moduloLogin from '../assets/moduloLogin.jpg'
import moduloInicio from '../assets/grafics.jpg'
import moduloFinanzas from '../assets/moduloFinanzas.jpg'

const Modulos = ({nombre, descripcion, img}) => {
    return (
        <>
            <div>
                <h1 className='text-center text-5xl text-indigo-900 mt-10 mb-5 font-bold'>Modulos</h1>
            </div>
            <div className='flex'>
                <div className='w-1/4 bg-indigo-900 m-3 rounded-md'>
                    <div className='p-8'>
                        <img src={moduloLogin} className='rounded-full' />
                    </div>
                    <div className='p-5 text-justify text-white'>
                        <h2 className='text-2xl text-center'>
                            Login
                        </h2>
                        <p className='m-5'>
                            Este modulo debe validar que cada usuario que entre a la aplicación esté autorizado para el uso del software.
                        </p>
                    </div>
                </div>
                <div className='w-1/4 bg-indigo-900 m-3 rounded-md'>
                    <div className='p-8'>
                        <img src={moduloInicio} className='rounded-full'/>
                    </div>
                    <div className='p-5 text-justify text-white'>
                        <h2 className='text-2xl text-center'>
                            Inicio
                        </h2>
                        <p className='m-5'>
                            Este modulo servirá para tener una vista general de la aplicación y acceso a todas las funcionalidades.
                        </p>
                    </div>
                </div>
                <div className='w-1/4 bg-indigo-900 m-3 rounded-md'>
                    <div className='p-8'>
                        <img src={moduloAltaCli} className='rounded-full'/>
                    </div>
                    <div className='p-5 text-justify text-white'>
                        <h2 className='text-2xl text-center'>
                            Alta de clientes
                        </h2>
                        <p className='m-5'>
                            Este modulo será verificar que todos los clientes cumplan con los requisitos minimos para solicitar un prestamo.
                        </p>
                    </div>
                </div>
                <div className='w-1/4 bg-indigo-900 m-3 rounded-md'>
                    <div className='p-8'>
                        <img src={moduloFinanzas} className='rounded-full'/>
                    </div>
                    <div className='p-5 text-justify text-white'>
                        <h2 className='text-2xl text-center'>
                            Cobranza
                        </h2>
                        <p className='m-5'>
                            En este modulo se realizarán los cobros correspondientes a los días de pago.
                        </p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Modulos;
