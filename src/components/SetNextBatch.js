function SetNextBatch()
{
    const setBatch = ()=> {
        
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/setNextBatch", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "name": document.getElementById("name").value,
                "batch_id": document.getElementById("batch").value
            })
        })
        .then(res => res.text())
        .then(res => alert(res))
    }
    
    return (
        <div>
            <input className="mt-2" type="text" placeholder="Name" id="name"/>
            <br></br>
            <h5>Batch</h5>
            <select id="batch">
                <option value="1" selected>5:00 - 6:00 AM</option>
                <option value="2">6:00 - 7:00 AM</option>
                <option value="3">7:00 - 8:00 AM</option>
                <option value="4">5:00 - 6:00 PM</option>
            </select>
            <button className="mt-2" onClick={setBatch}>Set Batch</button>
        </div>
    )
}

export default SetNextBatch;