import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Card, Button, Modal} from "antd";
import {getMyReservations} from "../api/reservations-api.js";
import {getSeatsByDate} from "../api/seats-api.js";
import SeatMap from "../components/SeatMap.jsx";

function Inicio(){
    const [reservations, setReservations] = useState(null);
    const [seats, setSeats] = useState([]);
    const[isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadReservations = async () => {
            const data = await getMyReservations();
            setReservations(data);
        };
        loadReservations();
    }, []);

    const miReserva = reservations && reservations.length > 0 ? reservations[0] : null;
    const handleVerLugar = async () => {
        const data = await getSeatsByDate(miReserva.date);
        setSeats(data);
        setIsModalOpen(true);
    };
    const handleApartarLugar = () => {
        navigate("/reservar");
    };
    if (reservations === null) {
        return <p>Cargando...</p>;
    }
    return (
        <>
            {miReserva ? (
                <Card>
                    <p><strong>Tienes lugar apartado: {miReserva.seatCode} el {miReserva.date}</strong></p>
                    <Button type="primary" onClick={handleVerLugar}>Ver lugar</Button>
                </Card>
            ) : (
                <Card>
                    <p>No tienes lugar apartado</p>
                    <Button type="primary" onClick={handleApartarLugar}>Apartar lugar</Button>
                </Card>
            )}
            <Modal 
                title='Lugar reservado'
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <SeatMap seats={seats} mode="view" selectedSeatId={miReserva?.seatId} onSelectSeat={() => {}}/>
            </Modal>
        </>
        
    );
}
export default Inicio; 