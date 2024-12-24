//import React from 'react';
import React, { useState, useEffect } from 'react';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import './App.css';

function App() {
/*
//Inicial
  const doctores = [
    { nombre: 'Dr. Juan Pérez', especialidad: 'Cardiología', experiencia: 10 },
    { nombre: 'Dra. Ana Gómez', especialidad: 'Dermatología', experiencia: 5 },
  ];
  const servicios = ['Cardiología', 'Dermatología', 'Pediatría'];
*/

//con useEffect
  const [doctores, setDoctores] = useState([]);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Simulación de la carga de datos desde una API
    setTimeout(() => {
        setDoctores([
            { nombre: 'Dr. Juan Pérez', especialidad: 'Cardiología', experiencia: 10 },
            { nombre: 'Dra. Ana Gómez', especialidad: 'Dermatología', experiencia: 5 },
        ]);
        setServicios(['Cardiología', 'Dermatología', 'Pediatría']);
      }, 1000); // Simula un tiempo de carga de 1 segundo
  }, []);

  return (
    <div className="app-container">
      <h1>Sistema de Citas del Hospital</h1>
      <div>
        {doctores.map((doctor, index) => (
          <DoctorCard key={index} nombre={doctor.nombre} especialidad={doctor.especialidad} experiencia={doctor.experiencia} />
        ))}
      </div>
      <ServiceList servicios={servicios} />
      <AppointmentForm />
    </div>
  );
}

export default App;