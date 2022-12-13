import { useState } from 'react';
import Enroll from './Enroll';
import PayFees from './PayFees';
import SetNextBatch from './SetNextBatch';
import Status from './Status';

function App() {

  const [tabValue, setTabValue] = useState("search")

  const renderTabs = (value) =>
  {
      switch(value)
      {
          case "Enroll":
              return <Enroll/>
          case "PayFees":
              return <PayFees/>
          case "Status":
              return <Status/>
          case "SetNextBatch":
              return <SetNextBatch/>
      }
  }

  const onTabClick = (e) =>
  {
      setTabValue(e.target.id)
  }


  return (
    <div className="">
            <div className="row mt-3">
                <div className="col-3">
                    <div className="container">
                        <button className="container btn-primary d-block" id="Enroll" onClick={onTabClick}>Enroll</button>
                        <button className="container btn-primary d-block" id="PayFees" onClick={onTabClick}>PayFees</button>
                        <button className="container btn-primary d-block" id="Status" onClick={onTabClick}>Status</button>
                        <button className="container btn-primary d-block" id="SetNextBatch" onClick={onTabClick}>SetNextBatch</button>
                    </div>
                </div>
                <div className="col-8">
                    {
                        renderTabs(tabValue)
                    }
                </div>
            </div>
        </div>
  );
}

export default App;
