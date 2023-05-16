const Information = () => {
    return (
        <div className="bg-indigo-900">
            <div className="block m-10">
                <div className="flex">
                    <div className="p-28 pl-10 text-white">
                        <span className="block text-6xl font-bold">
                            Giro de la empresa
                        </span>
                        <p className="mt-5 text-2xl text-justify">Cadofi Servicios Integrales opera en el sector de <br />Sociedades Financieras de Objeto Múltiple E.N.R. <br/> (Sector terciario) supervisada por el CONDUSEF. <br/> Otorga préstamos a personas fisicas y morales</p>
                    </div>
                    <div>
                        <img src="./src/assets/money.png" className="h-96" alt="Cadofi Logo" />
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <img src="./src/assets/anonimPerson.png" className="h-96 ml-10" alt="Cadofi Logo" />
                    </div>
                    <div className="text-white  pl-10">
                        <span className="block text-6xl font-bold">
                        Contacto con la empresa
                        </span>
                        <ul className="list-disc text-2xl m-2">
                            <li className="mb-2">Representante legal: Klieiber Esaú castro</li>
                            <li className="mb-2">Contacto directo: Santiago de Jesús Moreno, Gerente de la empresa CADOFI</li>
                            <li className="mb-2">Telefono de contacto: +52 961 105 9578</li>
                        </ul>
                        
                    </div>
                </div>
                <div className="flex ">
                    <div className="p-10 w-2/3 text-white">
                        <span className="block text-6xl font-bold">
                        Direccion de la empresa
                        </span>
                        <p className="mt-5 text-2xl text-justify"> 
                            📌 Sucursal San Cristobal. Calle Tapachula número 46 barrio el cerrillo
                            <br />
                            📌 Calle Central #512 Teopisca
                            <br />
                            📌 Calle 5a. norte oriente, Barrio San Sebastian
                            <br />
                            📌 Calle central. Chiapilla
                        </p>

                    </div>
                    <div>
                        <img src="./src/assets/map.png" className="h-72 mt-10 mb-10" alt="Cadofi Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Information