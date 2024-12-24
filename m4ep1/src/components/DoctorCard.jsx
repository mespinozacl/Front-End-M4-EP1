import React from 'react';

function DoctorCard(props) {
  return (
    <div className="doctor-card">
      <h3>{props.nombre}</h3>
      <p><strong>Especialidad:</strong> {props.especialidad}</p>
      <p><strong>Años de Experiencia:</strong> {props.experiencia}</p>
    </div>
  );
}

export default DoctorCard;