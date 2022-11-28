import React from "react"

const IdCard = ({lastName,firstName,gender,height,birth,picture})=>{
    const dateBirth = birth.toString().split(" ").slice(0,4).join(" ")
    return (
        <>
            <p>"last name" : {lastName}</p>
            <p>"first name" : {firstName}</p>
            <p>"gender" : {gender}</p>
            <p>"height" : {height}</p>
            <p>"birth" : {dateBirth}</p>
            <picture>
            <img src={picture} alt=""/>
            </picture>


    
        </>
    )
}
export default IdCard