import { useEffect, useState } from "react";
import {Card, Button} from "antd";
import {getMyReservations} from "../api/reservations-api.js";

function Inicio(){
    const [reservations, setReservations] = useState(null);
    useEffect(() => {
        const loadReservations = async () => {
            const data = await getMyReservations();
            setReservations(data);
        };
        loadReservations();
    }, []);
    return (
        <h1>Inicio</h1>
    );
}
export default Inicio; 