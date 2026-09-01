export const seats = [
    {
        id: 1, 
        code: 'A1',
        row: 1, 
        column: 1, 
        status: 'disponible'
    },
    {
        id: 2, 
        code: 'A2',
        row: 1, 
        column: 2, 
        status: 'ocupado'
    },
    {
        id: 3, 
        code: 'A3',
        row: 1, 
        column: 3, 
        status: 'disponible'
    },
    {
        id: 4, 
        code: 'A4',
        row: 1, 
        column: 4, 
        status: 'disponible'
    },
    {
        id: 5, 
        code: 'B1',
        row: 2, 
        column: 1, 
        status: 'ocupado'
    },
    {
        id: 6, 
        code: 'B2',
        row: 2, 
        column: 2, 
        status: 'ocupado'
    },
    {
        id: 7, 
        code: 'B3',
        row: 2, 
        column: 3, 
        status: 'disponible'
    },
    {
        id: 8, 
        code: 'B4',
        row: 2, 
        column: 4, 
        status: 'ocupado'
    },
    {
        id: 9, 
        code: 'C1',
        row: 3, 
        column: 1, 
        status: 'disponible'
    },
    {
        id: 10, 
        code: 'C2',
        row: 3, 
        column: 2, 
        status: 'ocupado'
    },
    {
        id: 11, 
        code: 'C3',
        row: 3, 
        column: 3, 
        status: 'disponible'
    },
    {
        id: 12, 
        code: 'C4',
        row: 3, 
        column: 4, 
        status: 'ocupado'
    },
    {
        id: 13, 
        code: 'D1',
        row: 4, 
        column: 1, 
        status: 'disponible'
    },
    {
        id: 14, 
        code: 'D2',
        row: 4, 
        column: 2, 
        status: 'disponible'
    },
    {
        id: 15, 
        code: 'D3',
        row: 4, 
        column: 3, 
        status: 'disponible'
    },
    {
        id: 16, 
        code: 'D4',
        row: 4, 
        column: 4, 
        status: 'ocupado'
    },
    {
        id: 17, 
        code: 'E1',
        row: 5, 
        column: 1, 
        status: 'ocupado'
    },
    {
        id: 18, 
        code: 'E2',
        row: 5, 
        column: 2, 
        status: 'ocupado'
    },
    {
        id: 19, 
        code: 'E3',
        row: 5, 
        column: 3, 
        status: 'disponible'
    },
    {
        id: 20, 
        code: 'E4',
        row: 5, 
        column: 4, 
        status: 'ocupado'
    },

];

export const getSeatsByDate = async (_date) => {
    return seats;
};