import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

const EditUser=({user, setUser})=>{
    const history = useHistory()
    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();
    const [Position, setPosition]= useState("");
    const [salary, setSalary]=useState("");


    const {id}=useParams();
    const selectedUser=user.find((per)=>per.id===id);
    // console.log(selectedUser.id);


    useEffect(()=> {
        setIdx(selectedUser.id);
        setName(selectedUser.name);
        setEmail(selectedUser.email);
        setExperience(selectedUser.experience);
        setSalary(selectedUser.salary);
        setPosition(selectedUser.Position);
    },[]);
    const updateUser=()=>{
        const editIndex=user.findIndex(per=>per.id===id)
        console.log(editIndex);
      const editedData ={
        id:idx,
        name,
        email,
        experience,
        salary,
        Position
      }
    //   console.log(editedData);
    user[editIndex]=editedData;
    setUser([...user]);
    history.push("/");

    }
     
        return (
        <BaseApp
        title={"Edit the employee details"}>
             <div>
                <input 
                placeholder="id"
                value ={idx}
                onChange={(event)=>setIdx(event.target.value)}
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
                placeholder="Position"
                value = {Position}
                onChange={(event)=>setPosition(event.target.value)}
                />
                <input 
                placeholder="salary"
                value = {salary}
                onChange={(event)=>setSalary(event.target.value)}
                />
                <button
                onClick={updateUser}
                >Edit</button>
        </div>
        </BaseApp>
    )
}
export default EditUser;