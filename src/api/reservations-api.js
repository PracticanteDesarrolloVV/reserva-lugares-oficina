import {seats} from "./seats-api.js";

const reservation = {
    id : 10,
    seatId : 2,
    seatCode: 'A2',
    date: '2026-09-01',
    userEmail: 'usuario@verdevalle.com'
}


export const getMyReservations = async () => {
    return [reservation];
};
export const createReservation = async ({seatId, date}) => {
    const seat = seats.find(s => s.id === seatId);
    const seatCode = seat ? seat.code : null;
    return {
        id: 99,
        seatId,
        seatCode,
        date,
        userEmail: 'usuario@verdevalle.com'
    }; 
};
export const updateReservation = async (reservationId, {seatId, date}) => {
    const seat = seats.find(s => s.id === seatId);
    const seatCode = seat ? seat.code : null;
    return {
        id: reservationId,
        seatId,
        seatCode,
        date,
        userEmail: 'usuario@verdevalle.com'

    }; 
};
export const deleteReservation = async (reservationId) => {
    return {
        reservationId,
    }; 
};