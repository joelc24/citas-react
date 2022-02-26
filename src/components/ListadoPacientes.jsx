import Pacientes from "./Pacientes";

const ListadoPacientes = ({pacientes}) => {

    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus Pacientes {''}
                        <span className="text-indigo-600 font-bold">y Citas</span>
                    </p>

                    {pacientes.map( (paciente) =>(  
                            <Pacientes
                                key={paciente.id}
                                paciente={paciente}
                            />
                        )
                    )}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza Agregando Pacientes {''}
                            <span className="text-indigo-600 font-bold">y Apareceran en Este Lugar</span>
                        </p>
                </>
            )}
        </div>
     );
}
 
export default ListadoPacientes;