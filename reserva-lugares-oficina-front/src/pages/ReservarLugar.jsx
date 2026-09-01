import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker, Button, Space } from "antd";
import dayjs from "dayjs";
import { getSeatsByDate } from "../api/seats-api.js";
import { createReservation } from "../api/reservations-api.js";
import SeatMap from "../components/SeatMap.jsx";

function ReservarLugar() {
    const [date, setDate] = useState(dayjs());
    const [seats, setSeats] = useState([]);
    const [selectedSeatId, setSelectedSeatId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadSeats = async () => {
            const data = await getSeatsByDate(date.format("YYYY-MM-DD"));
            setSeats(data);
            setSelectedSeatId(null);
        };
        loadSeats();
    }, [date]);

    const handleConfirmar = async () => {
        if (selectedSeatId && date) {
            await createReservation({ seatId: selectedSeatId, date: date.format("YYYY-MM-DD") });
            navigate("/");
        }
    };

    return (
        <Space orientation="vertical" size="large" style={{ display: "flex" }}>
            <DatePicker value={date} onChange={setDate} allowClear={false}/>

            <SeatMap
                seats={seats}
                mode="select"
                selectedSeatId={selectedSeatId}
                onSelectSeat={setSelectedSeatId}
            />

            <Button
                type="primary"
                disabled={!(selectedSeatId && date)}
                onClick={handleConfirmar}
            >
                Confirmar reserva
            </Button>
        </Space>
    );
}
export default ReservarLugar;