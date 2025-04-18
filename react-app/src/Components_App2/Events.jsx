import React from "react";
import { useState } from "react";

const Events = () => {

    const handleClick = () => {
        alert("Hey I am clicked")
    }
    const [name, setName] = useState("Urza")    //default value will be Urza
    const handleChange =  (e) =>{
        setName(e.target.value)     //Allows you to change the value in the input field
    }

    const [form, setForm] = useState({email:"", phone:""})
    const handleForm = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
        console.log(form)
    }

    return (<>
        <div className="button">
            <button onClick={handleClick}>Click me</button>
        </div>
        <input type="text" value={name} onChange={handleChange}></input>

        <input type="text" name="email" value={form.email} onChange={handleForm}></input>
        <input type="text" name="phone" value={form.phone} onChange={handleForm}></input>


    </>
    )
}

export default Events;