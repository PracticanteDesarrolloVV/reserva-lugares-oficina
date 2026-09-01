const reservationsService = require('../services/reservationsService');

const getMine = (req, res) => {
    const { userEmail } = req.query;
    if (!userEmail) {
        return res.status(400).json({
            success: false,
            error: { code: 'VALIDATION_ERROR', message: 'El parámetro userEmail es requerido' }
        });
    }
    const reservations = reservationsService.getReservationsByUserEmail(userEmail);
    return res.json({ success: true, data: reservations });
};

const create = (req, res) => {
    const { seatId, date } = req.body;
    const reservation = reservationsService.createReservation({ seatId, date });
    return res.status(201).json({ success: true, data: reservation });
};


const update = (req, res) => {
    const id = Number(req.params.id);
    const { seatId, date } = req.body;
    const updatedReservation = reservationsService.updateReservation(id, { seatId, date });
    if (!updatedReservation) {
        return res.status(404).json({
            success: false,
            error: { code: 'NOT_FOUND', message: 'La reserva no existe' }
        });
    }
    return res.json({ success: true, data: updatedReservation });
};

const remove = (req, res) => {
    const id = Number(req.params.id);
    const deleted = reservationsService.deleteReservation(id);
    if (!deleted) {
        return res.status(404).json({
            success: false,
            error: { code: 'NOT_FOUND', message: 'La reserva no existe' }
        });
    }
    return res.json({ success: true, data: { id } });
};

module.exports = { getMine, create, update, remove };