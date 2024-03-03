import { useState } from 'react';
import { useImage } from './useImage';

export const CardComponent = ({name, isReversed = false}) => {
    
    const [reversed, setReversed] = useState(isReversed);
    const { loading, error, cardImage } = useImage('4H.png')
    const alt = "alt";

    if (error) return <h1>{error.toString()}</h1>

    return (
        <>
            {loading ? (
                <h1>loading</h1>
            ) : (
                <img
                    className={'test'}
                    src={cardImage}
                    alt={alt}
                />
            )}
        </>
    )
    
    // return (
    //     <div className={"card"}>
    //         <img className={"card-image"} 
    //             //src={reversed ? cardImage : cardBackImage} 
    //             src={cardImage}
    //             alt={`Card: ${name} image`}
    //         />
    //     </div>
    // )
}