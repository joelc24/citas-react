import Pacientes from "./Pacientes";

const ListadoPacientes = ({pacientes}) => {

    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus Pacientes {''}
                <span className="text-indigo-600 font-bold">y Citas</span>
            </p>

            {pacientes.map( paciente =>(  
                    <Pacientes
                        paciente={paciente}
                    />
                )
            )}
        </div>
     );
}
 
export default ListadoPacientes;