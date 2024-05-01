// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";
// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import Navbar from "./Navbar";
// import Loader from "./Loader";
// import { FallingLines } from "react-loader-spinner";
// function Approv() {
  
//   const [laodig, setLoading] = useState(false);
//   const navigaet = useNavigate();
//   const [approvalStatus, setApprovalStatus] = useState(
//     localStorage.getItem("approvalStatus") === "true" ? true : false
//   );
//   const [newdata, setNewdata] = useState(null);
//   const location = useLocation();
//   const [editMode, setEditMode] = useState(false);
//   const { id } = useParams();
//   console.log(id, "dddddd");

//   const fetchDataAndCheckApprovalStatus = async () => {
//     try {
//       const response = await axios.get(
//         `https://ez-group-client-backend.vercel.app/api/v1/event/approved/${id}`
//       );
//       console.log(response.data);
//       // Check if the approval status is 'Yes'
//       console.log(response.data.approvalStatus, "eeeeeeeeeeeee");
//       if (response.data.approvalStatus === "Yes") {
//         setApprovalStatus(true);
//       } else {
//         setApprovalStatus(false);
//       }
//     } catch (error) {
//       console.error("Error fetching event data:", error);
//       // Handle error
//     }
//   };
//   useEffect(() => {
//     fetchDataAndCheckApprovalStatus();
//   }, [id]);
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`https://ez-group-client-backend.vercel.app/api/v1/event/guest/${id}`)
//       .then((response) => {
//         console.log(response.data, "response");
//         setNewdata(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching event data:", error);
//         // Handle error
//       });
//   }, [id]);

//   const handleEditClick = () => {
//     setEditMode(!editMode);
//   };

//   const handleApproval = async (id) => {
//     console.log(id);
//     try {
//       const response = await axios.patch(
//         `https://ez-group-client-backend.vercel.app/api/v1/event/approve/${id}`
//       );
//       console.log(response.data.updatedJob.approved, "datttt");
//       if (response.data.updatedJob.approved === "Yes") {
//         toast.success("Guest Approved Successfully");
//         setApprovalStatus(true);
//         localStorage.setItem("approvalStatus", "true");
//       } else if (response.data.updatedJob.approved === "No") {
//         setApprovalStatus(false);
//       }
//     } catch (error) {
//       console.error("Error approving:", error);
//     }
//   };

//   const handleInputChange = (e, key) => {
//     const { value } = e.target;
//     setNewdata((prevData) => ({
//       ...prevData,
//       getAllEvents: {
//         ...prevData.getAllEvents,
//         [key]: value,
//       },
//     }));
//   };

//   const handleSelectChange = (e, key) => {
//     const { value } = e.target;
//     const selectedOption = e.target.options[e.target.selectedIndex].text;
//     setNewdata((prevData) => ({
//       ...prevData,
//       getAllEvents: {
//         ...prevData.getAllEvents,
//         [key]: selectedOption,
//       },
//     }));
//   };

//   const handleSaveClick = () => {
//     axios
//       .patch(`https://ez-group-client-backend.vercel.app/api/v1/event/${id}`, newdata.getAllEvents)
//       .then((response) => {
//         if (response.status === 200) {
//           toast.success("Guest updated");
//           setEditMode(false); // Exit edit mode after saving
//         }
//         console.log("Data updated successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//         // Handle error
//       });
//   };

//   const handleAnomalies = () => {
//     const {
//       firstAnomaly,
//       secondAnomaly,
//       thirdAnomaly,
//       fourthAnomaly,
//       remarks,
//     } = newdata?.getAllEvents || {};

//     // Create an object containing anomalies and remarks
//     const dataToUpdate = {
//       firstAnomaly,
//       secondAnomaly,
//       thirdAnomaly,
//       fourthAnomaly,
//       remarks: remarks || "",
//     };

//     // Make a PATCH request to update anomalies and remarks
//     axios
//       .patch(`https://ez-group-client-backend.vercel.app/api/v1/event/${id}`, dataToUpdate)
//       .then((response) => {
//         if (response.status === 200) {
//           toast.success("Anomalies updated");
//           setNewdata((prevData) => ({
//             ...prevData,
//             getAllEvents: {
//               ...prevData.getAllEvents,
//               remarks: "", // Reset remarks after saving
//             },
//           }));
//         }
//         console.log("Data updated successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//         // Handle error
//       });
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="main d-flex flex-row">
//         <div className="container mt-5">
//           {laodig ? (
//             <Loader />
//           ) : (
//             <Table striped bordered hover style={{ width: "auto" }}>
//               <tbody>
//                 {newdata &&
//                   Object.entries(newdata.getAllEvents).map(
//                     ([key, value], index) => {
//                       // Exclude fields you don't want to show
//                       if (
//                         key !== "firstAnomaly" &&
//                         key !== "secondAnomaly" &&
//                         key !== "thirdAnomaly" &&
//                         key !== "fourthAnomaly" &&
//                         key !== "approved" &&
//                         key !== "_id" &&
//                         key !== "some2" &&
//                         key !== "some3" &&
//                         key !== "eventName" &&
//                         key !== "remarks" &&
//                         key !== "__v"
//                       ) {
//                         return (
//                           <tr key={index}>
//                             <td>{key}</td>
//                             <td
//                               style={{
//                                 backgroundColor: key === "paidBy",
//                                 color: key === "paidBy" ? "gray" : "inherit",
//                                 fontSize: key === "paidBy" ? "20px" : "inherit",
//                                 fontWeight:
//                                   key === "paidBy" ? "700" : "inherit",
//                               }}
//                             >
//                               {editMode && key === "paidBy" ? (
//                                 <select
//                                   value={value}
//                                   onChange={(e) => handleInputChange(e, key)}
//                                   style={{
//                                     width: "100%",
//                                     border: "none",
//                                     padding: "8px",
//                                     borderRadius: "9px",
//                                   }}
//                                 >
//                                   <option value="Guest">Guest</option>
//                                   <option value="Client">Client</option>
//                                 </select>
//                               ) : editMode ? (
//                                 <input
//                                   style={{
//                                     width: "100%",
//                                     border: "none",
//                                     padding: "8px",
//                                     borderRadius: "9px",
//                                   }}
//                                   type="text"
//                                   value={value}
//                                   onChange={(e) => handleInputChange(e, key)}
//                                 />
//                               ) : (
//                                 value
//                               )}
//                             </td>
//                           </tr>
//                         );
//                       } else {
//                         return null;
//                       }
//                     }
//                   )}
//               </tbody>
//             </Table>
//           )}
//           <div className="d-flex ">
//             <button
//               className="border-0 bg-success text-white p-2 rounded"
//               onClick={editMode ? handleSaveClick : handleEditClick}
//             >
//               {editMode ? "Save" : "Edit"}
//             </button>
//             <div className="d-flex justify-content-between">
//               {approvalStatus ? (
//                 <button
//                   className="border-0 bg-success text-white p-2 rounded m"
//                   onClick={() => handleApproval(id)}
//                   style={{ marginLeft: "20px" }}
//                   disabled
//                 >
//                   Approved
//                 </button>
//               ) : (
//                 <button
//                   className="border-0 bg-danger text-white p-2 rounded ml-2"
//                   onClick={() => handleApproval(id)}
//                   style={{ marginLeft: "20px" }}
//                 >
//                   Approve?
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//         <div
//           className="main container"
//           style={{
//             padding: "30px",
//             height: "100%",
//             boxShadow: "rgba(11, 13, 0, 0.2) 1px 11px 23px 10px",
//             border: "2px solid darkcyan",
//             borderRadius: "14px",
//           }}
//         >
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Error Type</th>
//                 <th>Error Value</th>
//                 <th>Solutions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>CheckIn Error</td>
//                 <td>{newdata?.getAllEvents.firstAnomaly || "No Anomaly"}</td>
//                 <td>
//                   <Form.Select
//                     aria-label="Default select example"
//                     value={newdata?.getAllEvents.firstAnomaly || ""}
//                     onChange={(e) => handleSelectChange(e, "firstAnomaly")}
//                     style={{ width: "100%" }}
//                   >
//                     <option value="">Select</option>
//                     <option value="Guest will pay for early checkIn">
//                       Guest will pay for early checkIn
//                     </option>
//                     <option value="Client pays for all extra days">
//                       Client pays for all extra days
//                     </option>
//                     <option value="Client pay for 1 extra day">
//                       Client pay for 1 extra day
//                     </option>
//                     <option value="Client will pay for early checkIn">
//                       Client will pay for early checkIn
//                     </option>
//                     <option value="Guest will pay for extra days">
//                       Guest will pay for extra days
//                     </option>
//                     <option value="Guest will pay for 1 extra day">
//                       Guest will pay for 1 extra day
//                     </option>
//                     <option value="Client pays regular rules">
//                       Client pays regular rules
//                     </option>
//                   </Form.Select>
//                 </td>
//               </tr>
//               <tr>
//                 <td>CheckOut Error</td>
//                 <td>{newdata?.getAllEvents.secondAnomaly || "No Anomaly"}</td>
//                 <td>
//                   <Form.Select
//                     aria-label="Default select example"
//                     value={newdata?.getAllEvents.secondAnomaly || ""}
//                     onChange={(e) => handleSelectChange(e, "secondAnomaly")}
//                     style={{ width: "100%" }}
//                   >
//                     <option value="">Select</option>
//                     <option value="Guest will pay for early checkIn">
//                       Guest will pay for early checkIn
//                     </option>
//                     <option value="Client pays for all extra days">
//                       Client pays for all extra days
//                     </option>
//                     <option value="Client pay for 1 extra day">
//                       Client pay for 1 extra day
//                     </option>
//                     <option value="Client will pay for early checkIn">
//                       Client will pay for early checkIn
//                     </option>
//                     <option value="Guest will pay for extra days">
//                       Guest will pay for extra days
//                     </option>
//                     <option value="Guest will pay for 1 extra day">
//                       Guest will pay for 1 extra day
//                     </option>
//                     <option value="Client pays regular rules">
//                       Client pays regular rules
//                     </option>
//                   </Form.Select>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Extra Guests Error</td>
//                 <td>{newdata?.getAllEvents.thirdAnomaly || "No Anomaly"}</td>
//                 <td>
//                   <Form.Select
//                     aria-label="Default select example"
//                     value={newdata?.getAllEvents.thirdAnomaly || ""}
//                     onChange={(e) => handleSelectChange(e, "thirdAnomaly")}
//                     style={{ width: "100%" }}
//                   >
//                     <option value="">Select</option>
//                     <option value="Client pays for all extra days">
//                       Client pays for all extra days
//                     </option>
//                     <option value="Client pay for 1 extra day">
//                       Client pay for 1 extra day
//                     </option>
//                     <option value="Client will pay for early checkIn">
//                       Client will pay for early checkIn
//                     </option>
//                     <option value="Guest will pay for extra days">
//                       Guest will pay for extra days
//                     </option>
//                     <option value="Guest will pay for 1 extra day">
//                       Guest will pay for 1 extra day
//                     </option>
//                     <option value="Guest will pay for early checkIn">
//                       Guest will pay for early checkIn
//                     </option>
//                     <option value="Client pays regular rules">
//                       Client pays regular rules
//                     </option>
//                   </Form.Select>
//                 </td>
//               </tr>
//               <tr>
//                 <td>During Event Error</td>
//                 <td>{newdata?.getAllEvents.fourthAnomaly || "No Anomaly"}</td>
//                 <td>
//                   <Form.Select
//                     aria-label="Default select example"
//                     value={newdata?.getAllEvents.fourthAnomaly || ""}
//                     onChange={(e) => handleSelectChange(e, "fourthAnomaly")}
//                     style={{ width: "100%" }}
//                   >
//                     <option value="">Select</option>
//                     <option value="Client pays for all extra days">
//                       Client pays for all extra days
//                     </option>
//                     <option value="Client pay for 1 extra day">
//                       Client pay for 1 extra day
//                     </option>
//                     <option value="Client will pay for early checkIn">
//                       Client will pay for early checkIn
//                     </option>
//                     <option value="Guest will pay for extra days">
//                       Guest will pay for extra days
//                     </option>
//                     <option value="Guest will pay for 1 extra day">
//                       Guest will pay for 1 extra day
//                     </option>
//                     <option value="Guest will pay for early checkIn">
//                       Guest will pay for early checkIn
//                     </option>
//                     <option value="Client pays regular rules">
//                       Client pays regular rules
//                     </option>
//                   </Form.Select>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Remarks</td>
//                 <td>{newdata?.getAllEvents.remarks || "No Remarks"}</td>
//                 <td>
//                   <input
//                     type="text"
//                     value={newdata?.getAllEvents.remarks || ""}
//                     onChange={(e) => handleInputChange(e, "remarks")}
//                     style={{
//                       width: "100%",
//                       border: "2px solid darkcyan",
//                       borderRadius: "14px",
//                       padding: "inherit",
//                     }}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <button className="save" onClick={handleAnomalies}>
//             Save
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Approv;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Loader from "./Loader";

function Approv() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [approvalStatus, setApprovalStatus] = useState(
    localStorage.getItem("approvalStatus") === "true" ? true : false
  );
  const [newdata, setNewdata] = useState(null);
  const location = useLocation();
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();

  const [selectedOptions, setSelectedOptions] = useState({
    firstAnomaly: "",
    secondAnomaly: "",
    thirdAnomaly: "",
    fourthAnomaly: "",
  });

  const fetchDataAndCheckApprovalStatus = async () => {
    try {
      const response = await axios.get(
        `https://ez-group-client-backend.vercel.app/api/v1/event/approved/${id}`
      );
      if (response.data.approvalStatus === "Yes") {
        setApprovalStatus(true);
      } else {
        setApprovalStatus(false);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  useEffect(() => {
    fetchDataAndCheckApprovalStatus();
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://ez-group-client-backend.vercel.app/api/v1/event/guest/${id}`)
      .then((response) => {
        setNewdata(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, [id]);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleApproval = async (id) => {
    try {
      const response = await axios.patch(
        `https://ez-group-client-backend.vercel.app/api/v1/event/approve/${id}`
      );
      if (response.data.updatedJob.approved === "Yes") {
        toast.success("Guest Approved Successfully");
        setApprovalStatus(true);
        localStorage.setItem("approvalStatus", "true");
      } else if (response.data.updatedJob.approved === "No") {
        setApprovalStatus(false);
      }
    } catch (error) {
      console.error("Error approving:", error);
    }
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setNewdata((prevData) => ({
      ...prevData,
      getAllEvents: {
        ...prevData.getAllEvents,
        [key]: value,
      },
    }));
  };

  const handleSelectChange = (e, key) => {
    const { value } = e.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  const handleSaveClick = () => {
    window.location.reload();

    const newDataCopy = { ...newdata };
    Object.keys(selectedOptions).forEach((key) => {
      newDataCopy.getAllEvents[key] = selectedOptions[key];
    });
    axios
      .patch(`https://ez-group-client-backend.vercel.app/api/v1/event/${id}`, newDataCopy.getAllEvents)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Guest updated");
          setEditMode(false); // Exit edit mode after saving
        }
        console.log("Data updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      <Navbar />

      <div className="main d-flex flex-row">
        <div className="container mt-5">
          {loading ? (
            <Loader />
          ) : (
            <Table striped bordered hover style={{ width: "auto" }}>
              <tbody>
                {newdata &&
                  Object.entries(newdata.getAllEvents).map(
                    ([key, value], index) => {
                      // Exclude fields you don't want to show
                      if (
                        key !== "firstAnomaly" &&
                        key !== "secondAnomaly" &&
                        key !== "thirdAnomaly" &&
                        key !== "fourthAnomaly" &&
                        key !== "approved" &&
                        key !== "_id" &&
                        key !== "some2" &&
                        key !== "some3" &&
                        key !== "eventName" &&
                        key !== "remarks" &&
                        key !== "__v"
                      ) {
                        return (
                          <tr key={index}>
                            <td>{key}</td>
                            <td
                              style={{
                                backgroundColor: key === "paidBy",
                                color: key === "paidBy" ? "gray" : "inherit",
                                fontSize: key === "paidBy" ? "20px" : "inherit",
                                fontWeight:
                                  key === "paidBy" ? "700" : "inherit",
                              }}
                            >
                              {editMode && key === "paidBy" ? (
                                <select
                                  value={value}
                                  onChange={(e) => handleInputChange(e, key)}
                                  style={{
                                    width: "100%",
                                    border: "none",
                                    padding: "8px",
                                    borderRadius: "9px",
                                  }}
                                >
                                  <option value="Guest">Guest</option>
                                  <option value="Client">Client</option>
                                </select>
                              ) : editMode ? (
                                <input
                                  style={{
                                    width: "100%",
                                    border: "none",
                                    padding: "8px",
                                    borderRadius: "9px",
                                  }}
                                  type="text"
                                  value={value}
                                  onChange={(e) => handleInputChange(e, key)}
                                />
                              ) : (
                                value
                              )}
                            </td>
                          </tr>
                        );
                      } else {
                        return null;
                      }
                    }
                  )}
              </tbody>
            </Table>
          )}
          <div className="d-flex ">
            <button
              className="border-0 bg-success text-white p-2 rounded"
              onClick={editMode ? handleSaveClick : handleEditClick}
            >
              {editMode ? "Save" : "Edit"}
            </button>
            <div className="d-flex justify-content-between">
              {approvalStatus ? (
                <button
                  className="border-0 bg-success text-white p-2 rounded m"
                  onClick={() => handleApproval(id)}
                  style={{ marginLeft: "20px" }}
                  disabled
                >
                  Approved
                </button>
              ) : (
                <button
                  className="border-0 bg-danger text-white p-2 rounded ml-2"
                  onClick={() => handleApproval(id)}
                  style={{ marginLeft: "20px" }}
                >
                  Approve?
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          className="main container"
          style={{
            padding: "30px",
            height: "100%",
            boxShadow: "rgba(11, 13, 0, 0.2) 1px 11px 23px 10px",
            border: "2px solid darkcyan",
            borderRadius: "14px",
          }}
        >
        <table className="table">
  <thead>
    <tr>
      <th>Error Type</th>
      <th>Error Value</th>
      <th>Solutions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CheckIn Error</td>
      <td>{newdata?.getAllEvents.firstAnomaly || "No Anomaly"}</td>
      <td>
        <Form.Select
          aria-label="Default select example"
          value={selectedOptions.firstAnomaly}
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
          value={selectedOptions.secondAnomaly}
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
          value={selectedOptions.thirdAnomaly}
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
          value={selectedOptions.fourthAnomaly}
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
  </tbody>
</table>



          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Approv;
