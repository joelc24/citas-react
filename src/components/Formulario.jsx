import { useState, useEffect } from 'react';


const Formulario = () => {
    const [nombre, setNombre] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando formulacion")
    }
    
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h4 className="font-black text-3xl text-center">Seguimientos Pacientes</h4>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administranos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota {nombre}
                    </label>
                    <input 
                        id="mascota" 
                        type="text" 
                        placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario
                    </label>
                    <input 
                        id="propietario" 
                        type="text" 
                        placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email
                    </label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">alta
                    </label>
                    <input 
                        id="alta" 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">sintomas
                    </label>
                    <textarea 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        placeholder="Escribe los Sintomas"
                        />
                </div>
                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
                    value="agregar paciente"
                    />
            </form>
        </div>
    )
}

export default Formulario