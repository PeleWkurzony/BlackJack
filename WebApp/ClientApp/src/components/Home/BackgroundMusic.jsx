import { useSelector } from "react-redux";
export const BackgroundMusic = () => {
    
    const playMusic = useSelector((state) => state.profile.playMusic);
    
    return (
        <>
            {playMusic ? 
                <audio id="background-music" src='/Others/backgroundMusic.mp3' autoPlay={true} loop />
                : <> </>
            }
                   
        </>
    )
}