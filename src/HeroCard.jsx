import { useState } from "react";

export const HeroCard = (props) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <p>HERO: {props.heroObj.hero}</p>

            {show && (
                <div>
                    <p>INFO: {props.heroObj.info}</p>
                    <p>VILLAIN: {props.heroObj.villain}</p>
                </div>
            )}
            

            <button onClick={() => setShow(!show)}>{show ? "HIDE INFO" : "SHOW INFO"}</button>
            <button onClick={() => props.favFunc(props.heroObj)}>ADD TO FAVOURITES</button>
        </>
    )
};