const seatsService = require('./seatsService');

const RESERVATIONS = [];
let nextReservationId = 1;

const MOCK_USER_EMAIL = 'usuario@verdevalle.com';

const getReservationsByUserEmail = (userEmail) => {
    return RESERVATIONS.filter(reservation => reservation.userEmail === userEmail);
};

const getReservedSeatIds = (date) => {
    return new Set(RESERVATIONS.filter(reservation => reservation.date === date).map(reservation => reservation.seatId));
};


const getReservationById = (id) => {
    return RESERVATIONS.find(reservation => reservation.id === id);
};


const createReservation = ({ seatId, date }) => {
    const seat = seatsService.getSeatById(seatId);
    const reservation = {
        id: nextReservationId++,
        seatId,
        seatCode: seat ? seat.code : null,
        date,
        userEmail: MOCK_USER_EMAIL
    };
    RESERVATIONS.push(reservation);
    return reservation;
};

const updateReservation = (id, { seatId, date }) => {
    const reservation = getReservationById(id);
    if (!reservation) return null;
    const seat = seatsService.getSeatById(seatId);
    reservation.seatId = seatId;
    reservation.seatCode = seat ? seat.code : null;
    reservation.date = date;
    return reservation;
};

const deleteReservation = (id) => {
    const index = RESERVATIONS.findIndex(reservation => reservation.id === id);
    if (index === -1) {
        return false;
    }
    RESERVATIONS.splice(index, 1);
    return true;
};

module.exports = {
    getReservationsByUserEmail,
    getReservedSeatIds,
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation,
};