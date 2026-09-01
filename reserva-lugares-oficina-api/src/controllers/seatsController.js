const seatsService = require('../services/seatsService');
const reservationsService = require('../services/reservationsService');

const getSeats = (req, res) => {
    const { date } = req.query;

    if (!date) {
        return res.status(400).json({
            success: false,
            error: { code: 'VALIDATION_ERROR', message: 'El parámetro date es requerido' }
        });
    }
    const reservedSeatIds = reservationsService.getReservedSeatIds(date);
    const grid = seatsService.buildSeatsGrid(reservedSeatIds);
    return res.json({ success: true, data: grid });  
};

module.exports = { getSeats };