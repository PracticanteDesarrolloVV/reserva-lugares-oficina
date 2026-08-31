import {theme, Button} from "antd";

function SeatMap({seats, mode, selectedSeatId, onSelectSeat}){
    const {token} = theme.useToken();

    return(
        <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: token.marginSM
        }}>
            {seats.map(seat =>{
                const isHighlighted = seat.id === selectedSeatId;
                const isClickable = mode === 'select' && seat.status === 'disponible';
                
                let styleTokens; 

                if (isHighlighted){
                    styleTokens = {background: token.colorPrimaryBg, borderColor: token.colorPrimary, color: token.colorPrimary};
                } else if (seat.status === 'ocupado'){
                    styleTokens = { background: token.colorBgContainerDisabled, borderColor: token.colorBorderSecondary, color: token.colorTextDisabled};
                } else {
                    styleTokens = { background: token.colorSuccessBg, borderColor: token.colorSuccessBorder, color: token.colorSuccess };
                }
                return (
                    <Button
                        key={seat.id}
                        disabled={!isClickable}
                        onClick={isClickable ? () => onSelectSeat(seat.id) : undefined}
                        style={{
                            gridRow: seat.row,
                            gridColumn: seat.column,
                            ...styleTokens,
                        }}
                    >
                        {seat.code}
                    </Button>
                );
            })}
        </div>
    );
}
export default SeatMap;