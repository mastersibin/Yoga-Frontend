import { useState } from "react";
import DatePicker from "react-datepicker";


function Enroll()
{
    const enroll = () => {

        if (document.getElementById("age").value < 18 || document.getElementById("age").value > 65)
        {
            alert("Age should be 18-65")
            return
        }
        
        if (document.getElementById("month").value < 1 || document.getElementById("month").value > 12)
        {
            alert("Month should be 1-12")
            return
        }

        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/enroll", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "name": document.getElementById("name").value,
                "age": document.getElementById("age").value,
                "batch_id": document.getElementById("batch").value,
                "month": document.getElementById("month").value,
                "year": document.getElementById("year").value
            })
        })
        .then(res => res.text())
        .then(res => alert(res))
    }

    return (
        <div className="mt-2">
            <input className="mt-2" type="text" placeholder="Name" id="name"/>
            <br></br>
            <input className="mt-2" type="number" placeholder="Age 18-65" id="age"/>
            <br></br>
            <h5>Batch</h5>
            <select id="batch">
                <option value="1" selected>5:00 - 6:00 AM</option>
                <option value="2">6:00 - 7:00 AM</option>
                <option value="3">7:00 - 8:00 AM</option>
                <option value="4">5:00 - 6:00 PM</option>
            </select>
            <br></br>
            <input className="mt-2" type="number" id="month" placeholder="Month 1-12"/>
            <br></br>
            <input type="number" className="mt-2" id="year" placeholder="Year ex:2022"/>
            <br></br>
            <h5 className="mt-2" >Fees: 500</h5>
            <button className="mt-2" onClick={enroll}>Enroll</button>
        </div>
    )
}

export default Enroll;