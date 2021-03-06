import swal from '@sweetalert/with-react'
const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
    
    
const {nombre, propietario, email, fecha, sintomas, id} = paciente

const handleEliminar = () =>{
    swal({
        title: "Esta seguro?",
        text: "Al Presionar Ok se Eliminara Permanentemente el Paciente!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            eliminarPaciente(id)
          swal("Paciente ELiminado Satisfactoriamente!", {
            icon: "success",
          });
        } else {
          swal("La Eliminacion Ha Sido Cancelada!");
        }
      });
}

return ( 
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propieatrio: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha Alta: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>
                <div className="flex justify-between mt-10">
                    <button 
                    type="buttom"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={()=> setPaciente(paciente)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"

                        onClick={handleEliminar}

                    >
                        Eliminar
                    </button>
                </div>
            </div>
     );
}
 
export default Pacientes;