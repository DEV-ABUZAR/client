import React from 'react'
import { BrowserRouter as Router, Link, Route, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Navbar() {
  const navigate = useNavigate()
  const details = ()=>{
    navigate('/details')
  }
  const Logout = () => {
    localStorage.removeItem('token');
    toast.success('Logged Out ')
    navigate('/')
    
   
  };
  return (
    <>
    <div className="bg-black text-white text-lg-start p-4 d-flex justify-content-between">
       
       <h2 style={{textDecoration:'none', cursor:'pointer' }} onClick={details}> EZ-Group Booking</h2>
       <img src="/right.png" alt="logout" width={40} style={{cursor:'pointer', height:'100%'}} onClick={Logout} />
    </div>
    </>
  )
}

export default Navbar


 {/* <table className="table">
            <thead>
              <tr>
                <th>Error Type</th>
                <th>Error Value</th>
                <th>Solutins</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CheckIn Error</td>
                <td>{newdata?.getAllEvents.firstAnomaly || "No Anomaly"}</td>
                <td>
                  <Form.Select
                    aria-label="Default select example"
                    value={newdata?.getAllEvents.firstAnomaly || ""}
                    onChange={(e) => handleSelectChange(e, "firstAnomaly")}
                    style={{ width: "100%" }}
                  >
                    <option value="">Select</option>
                    <option value="Guest will pay for early checkIn">
                      Guest will pay for early checkIn
                    </option>
                    <option value="Client pays for all extra days">
                      Client pays for all extra days
                    </option>
                    <option value="Client pay for 1 extra day">
                      Client pay for 1 extra day
                    </option>
                    <option value="Client will pay for early checkIn">
                      Client will pay for early checkIn
                    </option>
                    <option value="Guest will pay for extra days">
                      Guest will pay for extra days
                    </option>
                    <option value="Guest will pay for 1 extra day">
                      Guest will pay for 1 extra day
                    </option>
                    <option value="Client pays regular rules">
                      Client pays regular rules
                    </option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>CheckOut Error</td>
                <td>{newdata?.getAllEvents.secondAnomaly || "No Anomaly"}</td>
                <td>
                  <Form.Select
                    aria-label="Default select example"
                    value={newdata?.getAllEvents.secondAnomaly || ""}
                    onChange={(e) => handleSelectChange(e, "secondAnomaly")}
                    style={{ width: "100%" }}
                  >
                    <option value="">Select</option>
                    <option value="Guest will pay for early checkIn">
                      Guest will pay for early checkIn
                    </option>
                    <option value="Client pays for all extra days">
                      Client pays for all extra days
                    </option>
                    <option value="Client pay for 1 extra day">
                      Client pay for 1 extra day
                    </option>
                    <option value="Client will pay for early checkIn">
                      Client will pay for early checkIn
                    </option>
                    <option value="Guest will pay for extra days">
                      Guest will pay for extra days
                    </option>
                    <option value="Guest will pay for 1 extra day">
                      Guest will pay for 1 extra day
                    </option>
                    <option value="Client pays regular rules">
                      Client pays regular rules
                    </option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>Extra Guests Error</td>
                <td>{newdata?.getAllEvents.thirdAnomaly || "No Anomaly"}</td>
                <td>
                  <Form.Select
                    aria-label="Default select example"
                    value={newdata?.getAllEvents.thirdAnomaly || ""}
                    onChange={(e) => handleSelectChange(e, "thirdAnomaly")}
                    style={{ width: "100%" }}
                  >
                    <option value="">Select</option>
                    <option value="Client pays for all extra days">
                      Client pays for all extra days
                    </option>
                    <option value="Client pay for 1 extra day">
                      Client pay for 1 extra day
                    </option>
                    <option value="Client will pay for early checkIn">
                      Client will pay for early checkIn
                    </option>
                    <option value="Guest will pay for extra days">
                      Guest will pay for extra days
                    </option>
                    <option value="Guest will pay for 1 extra day">
                      Guest will pay for 1 extra day
                    </option>
                    <option value="Guest will pay for early checkIn">
                      Guest will pay for early checkIn
                    </option>
                    <option value="Client pays regular rules">
                      Client pays regular rules
                    </option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>During Event Error</td>
                <td>{newdata?.getAllEvents.fourthAnomaly || "No Anomaly"}</td>
                <td>
                  <Form.Select
                    aria-label="Default select example"
                    value={newdata?.getAllEvents.fourthAnomaly || ""}
                    onChange={(e) => handleSelectChange(e, "fourthAnomaly")}
                    style={{ width: "100%" }}
                  >
                    <option value="">Select</option>
                    <option value="Client pays for all extra days">
                      Client pays for all extra days
                    </option>
                    <option value="Client pay for 1 extra day">
                      Client pay for 1 extra day
                    </option>
                    <option value="Client will pay for early checkIn">
                      Client will pay for early checkIn
                    </option>
                    <option value="Guest will pay for extra days">
                      Guest will pay for extra days
                    </option>
                    <option value="Guest will pay for 1 extra day">
                      Guest will pay for 1 extra day
                    </option>
                    <option value="Guest will pay for early checkIn">
                      Guest will pay for early checkIn
                    </option>
                    <option value="Client pays regular rules">
                      Client pays regular rules
                    </option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>Remarks</td>
                <td>{newdata?.getAllEvents.remarks || "No Remarks"}</td>
                <td>
                  <input
                    type="text"
                    value={newdata?.getAllEvents.remarks || ""}
                    onChange={(e) => handleInputChange(e, "remarks")}
                    style={{
                      width: "100%",
                      border: "2px solid darkcyan",
                      borderRadius: "14px",
                      padding: "inherit",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table> */}