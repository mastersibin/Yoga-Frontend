function Status()
{
    const getStatus = () => {
        if (document.getElementById("month").value < 1 || document.getElementById("month").value > 12)
        {
            alert("Month should be 1-12")
            return
        }
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/allowed", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "name": document.getElementById("name").value,
                "month": document.getElementById("month").value,
                "year": document.getElementById("year").value
            })
        })
        .then(res => res.text())
        .then(res => {
            document.getElementById("status").innerHTML = res
        })
    }
    return (
        <div className="mt-2">
            <input className="mt-2" type="text" placeholder="Name" id="name"/>
            <br></br>
            <input className="mt-2" type="number" id="month" placeholder="Month 1-12"/>
            <br></br>
            <input type="number" className="mt-2" id="year" placeholder="Year ex:2022"/>
            <br></br>
            <button className="mt-2" onClick={getStatus}>getStatus</button>
            <div id="status"></div>
        </div>
    )
}

export default Status;