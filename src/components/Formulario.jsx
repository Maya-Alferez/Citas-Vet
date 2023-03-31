import { useState, useEffect } from "react";
import Error from "./error";

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    //Llenar el formulario cuando se oprima el botón de editar.
    useEffect(() => {
        if( Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        //Validación del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return
        }

        setError(false);

        //Objeto con los datos que tendrá el paciente en este formulario, para que después se pase al arreglo vacio del State en pacientes, se vaya llenando con la info
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }


        //EDITAR, GUARDAR NUEVOS PACIENTES  
        if(paciente.id) {
            //Editar registro cuando puchurremos el botón de editar
            objetoPaciente.id = paciente.id;

            //Verifica si existe un mismo id, para editarlo y actualizarlo
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );
            setPacientes(pacientesActualizados);
            setPaciente({});

        } else {
            //Guardar todos los pacientes registrados en un mismo arreglo del State que se encuentra en app. Además de guardar nuevos registros.
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }
        
        //Reiniciar formulario cuando se agregue un paciente(al momento de dar click en el botón)
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl text-center font-black text-[#E2E8F0]">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10 text-[#94A3B8]">Añade pacientes y <span className="font-bold text-[#38BDF8]">Administralos</span></p>
            <form className="bg-[#1E293B] shadow-md rounded-lg py-10 px-5 mx-3" onSubmit={handlerSubmit}>
                    { error && < Error mensaje='*Todos los campos son obligatorios'/>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-[#F472B6] uppercase font-bold">Nombre mascota</label>
                    <input 
                        id="mascota" 
                        type="text" 
                        placeholder="Nombre mascota" 
                        className="border-2 border-blue-400 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-[#F472B6] uppercase font-bold">Nombre del Propietario</label>
                    <input 
                        id="propietario" 
                        type="text" 
                        placeholder="Nombre propietario" 
                        className="border-2 border-blue-400 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-[#F472B6] uppercase font-bold">Correo electrónico</label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="correo@correo.com" 
                        className="border-2 border-blue-400 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-[#F472B6] uppercase font-bold">Fecha de Alta</label>
                    <input 
                        id="alta" 
                        type="date" 
                        className="border-2 border-blue-400 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-[#F472B6] uppercase font-bold">Sintomas</label>
                    <textarea 
                        id="sintomas" 
                        placeholder="Describa los sintomas que presenta la mascota" 
                        className="border-2 border-blue-400 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input type="submit" className="w-full p-3 text-white uppercase font-bold bg-[#F472B6] hover:bg-[#F472B6]/75 cursor-pointer transition-colors mb-10" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
            </form>
        </div>
    );
}

export default Formulario;