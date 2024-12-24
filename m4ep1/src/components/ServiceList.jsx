import React from 'react';

function ServiceList(props) {
  return (
    <div className="service-list">
      <h4>Servicios:</h4>
      <ul>
        {props.servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;