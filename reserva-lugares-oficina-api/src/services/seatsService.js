const ROWS = ['A', 'B', 'C', 'D', 'E'];
const COLUMNS = [1, 2, 3, 4];
const SEATS = []; 

let id = 1;
ROWS.forEach((rowLetter, rowIndex) => {
  COLUMNS.forEach((columnNumber) => {
    const seat = {
      id: id++,
      code: `${rowLetter}${columnNumber}`,
      row: rowIndex + 1,
      column: columnNumber
    };
    SEATS.push(seat);
  });
});

const getAllSeats = () => {
  return [...SEATS];
};

const getSeatById = (id) => {
  return SEATS.find(seat => seat.id === id);
};

const buildSeatsGrid = (reservedSeatIds) => {
  return SEATS.map(seat => ({ ...seat, status: reservedSeatIds.has(seat.id) ? 'ocupado' : 'disponible' }));
};

module.exports = { getAllSeats, getSeatById, buildSeatsGrid };