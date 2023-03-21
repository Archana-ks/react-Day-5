import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export function UserDetails({user}){
    const {id} = useParams();
    const person = user[id];
    return (
        <BaseApp
        title = {"Employee details"}
        >
           <div className="user-content">
                <div  className="user-card">
                    <h1>{person.name}</h1>
                    <p>Position : {person.Position}</p>
                    <p>Email : {person.email}</p>
                    <p>Salary :{person.salary}</p>
                    <p>Exp : {person.experience}</p>
                    </div>
                </div>
        </BaseApp>
    )
}
