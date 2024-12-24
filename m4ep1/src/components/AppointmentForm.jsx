import React, { useState } from 'react';

function AppointmentForm() {
  const [nombrePaciente, setNombrePaciente] = useState('');
  const [doctorSeleccionado, setDoctorSeleccionado] = useState('');
  const [fechaCita, setFechaCita] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cita agendada:', { nombrePaciente, doctorSeleccionado, fechaCita });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del Paciente:
        <input type="text" value={nombrePaciente} onChange={(e) => setNombrePaciente(e.target.value)} />
      </label>
      <label>
        Doctor:
        <input type="text" value={doctorSeleccionado} onChange={(e) => setDoctorSeleccionado(e.target.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" value={fechaCita} onChange={(e) => setFechaCita(e.target.value)} />
      </label>
      <button type="submit">Agendar Cita</button>
    </form>
  );
}

export default AppointmentForm;