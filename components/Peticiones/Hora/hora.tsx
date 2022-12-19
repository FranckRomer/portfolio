// import React from 'react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hora = () => {
    const [hora, setHora] = useState("10:12:53");
    const [amp, setAmp] = useState("am");
    
    useEffect(() => {
        setTimeout(() => {
            obtenerDatos();
        }, 1000);
    });

    const obtenerDatos = async () => {
        try {
            const data = await axios.post('/api/getHora/horaActual')
            console.log(data);
            setHora(data.data.hora)
            setAmp(data.data.amp)

        } catch (error) {
            console.log("NO FUNCIONO");
            console.log(error);

        }
    }
    // obtenerDatos();

    return (
        // <div>{hora.length != 0 ? <div>{hora}</div> :""}</div>
        <div >
            <p> as</p>
            <h2>
                {hora}
            </h2>
            <p>
                {amp}
            </p>

        </div>
    )
}

export default Hora