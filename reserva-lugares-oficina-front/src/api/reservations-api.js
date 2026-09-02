import httpClient from './httpClient';
import { MOCK_USER_EMAIL } from '../constants/user';

export const getMyReservations = async () => {
    return httpClient.get('reservations/me', {params: { userEmail: MOCK_USER_EMAIL } });
};

export const createReservation = async ({ seatId, date }) => {
    return httpClient.post('reservations', { seatId, date });
};

export const updateReservation = async (reservationId, { seatId, date }) => {
    return httpClient.put(`reservations/${reservationId}`, { seatId, date });
};

export const deleteReservation = async (reservationId) => {
    return httpClient.delete(`reservations/${reservationId}`);
};