import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddUser({user, setUser}){
    const history = useHistory()
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();
    const [Position, setPosition]= useState("");
    const [salary,setSalary]=useState("");

    const addNewUser = ()=>{
        const newUser = {
            id,
            name,
            email,
            Position,
            salary,
            experience
        }
        console.log(newUser)
        setUser([...user, newUser])
        history.push("/")
    } 
    
    return (
        <BaseApp
        title={"Add A New Employee"}
        >
             <div>
                <input 
                placeholder="id"
                value ={id}
                onChange={(event)=>setId(event.target.value)}
                />

                <input 
                placeholder="name"
                value= {name}
                onChange={(event)=>setName(event.target.value)}
                />

                <input 
                placeholder="email"
                value= {email}
                onChange={(event)=>setEmail(event.target.value)}
                />

                <input 
                placeholder="experience"
                value = {experience}
                onChange={(event)=>setExperience(event.target.value)}
                />

                <input 
                placeholder="position"
                value = {Position}
                onChange={(event)=>setPosition(event.target.value)}
                />
                
                <input 
                placeholder="salary"
                value = {salary}
                onChange={(event)=>setSalary(event.target.value)}
                />
                <button 
                onClick={addNewUser}
                >Add</button>
        </div>
        </BaseApp>
    )
}
