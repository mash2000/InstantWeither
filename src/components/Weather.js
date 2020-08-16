import React from 'react';

const Weather = props => (
      <div className="infoWeath">
         { props.city && 
            <div>
               <p>Город: {props.city} </p>
               <p>Страна: {props.country} </p>
               <p>Температура: {props.temp} </p>
               <p>Давление: {props.pressure} </p>
               <p>Заход солнца: {props.sunset} </p>
            </div>
         }
         <p className="error">{ props.error }</p>
      </div>
);

export default Weather;