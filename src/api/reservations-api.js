const reservation = {
    id : 10,
    seatId : 2,
    seatCode: 'A2',
    date: '2026-09-01',
    userEmail: 'usuario@verdevalle.com'
}

export const getMyReservations = async () => {
    return reservation;
};
export const createReservation = async ({seatId, date}) => {
    return {
        seatId,
        date,
    }; 
};
export const updateReservation = async (reservationId, {seatId, date}) => {
    return {
        reservationId,
        seatId,
        date,
    }; 
};
export const deleteReservation = async (reservationId) => {
    return {
        reservationId,
    }; 
};