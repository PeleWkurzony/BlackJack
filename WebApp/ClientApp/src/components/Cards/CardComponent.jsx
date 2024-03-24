
export const CardComponent = ({ name, isReversed = false }) => {
    
    return (
        isReversed ?
            <img className={"playing-card playing-card-reversed"}
                 src={`Cards/Card-Back.png`}
                 alt={"Reversed Card"} />
            :
            <img className={"playing-card"}
                 src={`Cards/${name}.png`}
                 alt={`Card: ${name}`} />
    )
}