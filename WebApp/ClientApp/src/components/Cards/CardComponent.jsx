
export const CardComponent = ({ name, isReversed = false }) => {
    
    if (isReversed) {
        return (
            <img className={"playing-card playing-card-reversed"}
                    src={`Cards/Card-Back.png`}
                    alt={"Reversed Card"} />
        )
    }
    else {
        return (
        <img className={"playing-card"}
             src={`Cards/${name}.png`}
             alt={`Card: ${name}`} />
        )
    }
}