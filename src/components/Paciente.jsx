const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;
    const handleEliminar = () => {
        const respuesta = confirm("¿Deseas eliminar este paciente?");
        if(respuesta) {
            eliminarPaciente(id);
        }
    }

    return(
       <div className="mx-3 my-6 bg-[#1E293B] shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-[#E2E8F0] uppercase">Nombre: <span className="font-normal normal-case text-[#94A3B8]">{nombre}</span></p>
            <p className="font-bold mb-3 text-[#E2E8F0] uppercase">Nombre del propietario: <span className="font-normal normal-case text-[#94A3B8]">{propietario}</span></p>
            <p className="font-bold mb-3 text-[#E2E8F0] uppercase">Correo electrónico: <span className="font-normal normal-case text-[#94A3B8]">{email}</span></p>
            <p className="font-bold mb-3 text-[#E2E8F0] uppercase">Fecha de alta: <span className="font-normal normal-case text-[#94A3B8]">{fecha}</span></p>
            <p className="font-bold mb-3 text-[#E2E8F0] uppercase">Sintomas: <span className="font-normal normal-case text-[#94A3B8]">{sintomas}</span></p>

            <div className="flex gap-8 mt-8">
                <button type="button" className="py-2 px-10 text-white uppercase font-bold bg-[#F472B6] hover:bg-[#F472B6]/75 rounded-md cursor-pointer transition-colors" onClick={() => setPaciente(paciente)}>Editar</button>
                <button type="button" className="py-2 px-10 text-rose-500 uppercase font-bold border-2 border-rose-500 hover:bg-rose-500/75 hover:text-white rounded-md cursor-pointer transition-colors" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div> 
    );
}

export default Paciente;