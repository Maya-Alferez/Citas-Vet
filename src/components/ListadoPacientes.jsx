import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente }) => {

    return(
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
            
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="text-3xl text-center font-black text-[#E2E8F0]">Listado de pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10 text-[#94A3B8]">Administra tus <span className="text-[#38BDF8] font-bold">Pacientes y Citas</span></p>
                    { pacientes.map((paciente) => {
                        return(
                            <Paciente 
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        );
                    })}
                </>
            ): (
                <>
                    <h2 className="text-3xl text-center font-black text-[#E2E8F0]">Aún no hay pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10 text-[#94A3B8]">Agrega un nuevo paciente <span className="text-[#38BDF8] font-bold">se notificará aquí.</span></p>
                </>
            )}
            
        </div>
    );
}

export default ListadoPacientes;