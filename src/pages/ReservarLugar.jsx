import {useEffect, useState} from 'react';
import {getSeatsByDate} from '../api/seats-api.js';

function ReservarLugar(){
    const [seats, setSeats] = useState([]);
    useEffect(()=>{
        const loadSeats = async () => {
            const data = await getSeatsByDate('2026-09-01');
            setSeats(data);
        };
        loadSeats();
    },[]);
    
    return (
        <h1>Reservar Lugar</h1>
    );
}
export default ReservarLugar;