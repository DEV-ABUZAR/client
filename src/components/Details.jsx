import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Navbar from "./Navbar";
import { useLocation , useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast'
import * as XLSX from "xlsx";
import Loader from "./Loader";
function Details() {
  const [laoding , setLoading] = useState(false)
  const navigate = useNavigate()
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const [csvLoading, setCSVLoading] = useState(); 
  const [buttonText, setButtonText] = useState("Generate CSV");

  const username = location.state?.data;
  console.log(username, "username");
  localStorage.setItem('username', username);
  
  // Get the username from local storage
  const storedUsername = localStorage.getItem('username');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
        
          `https://ez-group-client-backend.vercel.app/api/v1/event/${storedUsername}`
        );
        console.log(response.data)
        if(response.data){
          console.log("Data:", response.data);
          setUserData(response.data);
          setLoading(false)
        }
       
        
      } catch (error) {
        setLoading(false)
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up function (optional)
    return () => {
      // Perform any cleanup if necessary
    };
  }, [username]);

  
 
  const handleEdit = (Id) => {
    console.log("Edit clicked for event:", Id);
    // Pass the Id to the navigate function
    navigate(`/approve/${Id}`);
  };

  const handleUsernameClick = (userId) => {
    handleEdit(userId);
  };
  const handleReport = async () => {
    try {
      console.log("in the function");
      setCSVLoading(true);
      setButtonText("Generate CSV");
      const response = await axios.get(`https://ez-group-client-backend.vercel.app/api/v1/event/${storedUsername}`);
      

      if (response.status === 200) {
        // Create a workbook and add a single sheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([]);

        if (
          Array.isArray(response.data) &&
          response.data.length > 0 &&
          typeof response.data[0] === "object"
        ) {
          // Get the headers from the first object
          const headers = Object.keys(response.data[0]);
          // Remove 'image' field from headers
          const filteredHeaders = headers.filter(
            (header) =>
              header !== "image" &&
              header !== "_id" &&
              header !== "__v" &&
              header !== "createdAt" &&
              header !== "updatedAt" 
          );
          // Prepare the data array with 'image' field removed
          const dataArray = response.data.map((obj) =>
            filteredHeaders.map((header) => obj[header] || "")
          );
          // Add headers and data to the sheet
          XLSX.utils.sheet_add_aoa(ws, [filteredHeaders, ...dataArray]);
        } else {
          console.log("response.data is not an array of objects");
        }

        // Append the sheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

        // Save the workbook as an Excel file
        XLSX.writeFile(wb, "output.xlsx");
      }
    } catch (error) {
      // toast.error('Error generating report')
      console.log(error);
    } finally {
      setCSVLoading(false);
      setButtonText("Generate CSV");
    }
  };
  
  return (
    <>
      <Navbar />
      {laoding? (
        <div style={{display:'flex', justifyContent:'center'}}>
          <Loader />
        </div>
      ):(
      <div className="container mt-5">
        <Table bordered striped hover>
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Extra People</th>
              <th>During Event</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
  {userData?.map((user) => (
    <tr key={user._id}>
<td onClick={() => handleUsernameClick(user._id)} style={{cursor:'pointer'}}>{`${user.firstname}`}</td>
<td style={{ color: user.firstAnomaly ? 'red' : 'inherit' }}>{user.firstAnomaly ? user.firstAnomaly : "No Anomaly"}</td>
    <td style={{ color: user.secondAnomaly ? 'red' : 'inherit' }}>{user.secondAnomaly ? user.secondAnomaly : "No Anomaly"}</td>
    <td style={{ color: user.thirdAnomaly ? 'red' : 'inherit' }}>{user.thirdAnomaly ? user.thirdAnomaly : "No Anomaly"}</td>
    <td style={{ color: user.fourthAnomaly ? 'red' : 'inherit' }}>{user.fourthAnomaly ? user.fourthAnomaly : "No Anomaly"}</td>
    <td style={{ color: user.remarks ? 'red' : 'inherit' }}>{user.remarks ? user.remarks : "No Remarks"}</td>
    </tr>
  ))}
</tbody>

        </Table>
        <button
          type="button" 
            className="w-40 h-12 mt-5 text-white bg-blue-500 ml-[50%] font-bold rounded-xl text-center justify-center hover:bg-blue-800"
            disabled={csvLoading}
            onClick={handleReport}
          >
            {csvLoading  ? "Generating..." : "Generate CSV"}
          </button>
      </div>
      )}
    </>
  );
}

export default Details;
