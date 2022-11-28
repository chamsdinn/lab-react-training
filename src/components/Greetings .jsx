import React from "react"

const Greetings = ({lang, children})=>{
    let greet ="";
    if(lang==="de"){
        greet="Hallo"
    }
    return (
        <>
            {greet} {children}
        </>
    )
}

export default Greetings