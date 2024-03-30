import React from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';

function Details() {
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Julie</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>Chaney</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>pubykoxad@mailinator.com</td>
          </tr>
          <tr>
            <td>Orignal Country</td>
            <td>Obcaecati amet dele</td>
          </tr>
          <tr>
            <td>Current Country</td>
            <td>Aut minima est est</td>
          </tr>
          <tr>
            <td>Check In Date</td>
            <td>2022-06-15</td>
          </tr>
          <tr>
            <td>Check In Time</td>
            <td>10:00</td>
          </tr>
          <tr>
            <td>Check Out Date</td>
            <td>2022-06-20</td>
          </tr>
          <tr>
            <td>Check Out Time</td>
            <td>15:00</td>
          </tr>
          <tr>
            <td>Total Participants</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Arrival Date</td>
            <td>2022-05-29</td>
          </tr>
          <tr>
            <td>Arrival Time</td>
            <td>11:06</td>
          </tr>
          <tr>
            <td>Arrival Flight No</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Departure Date</td>
            <td>2009-10-23</td>
          </tr>
          <tr>
            <td>Departure Time</td>
            <td>00:27</td>
          </tr>
          <tr>
            <td>Departure Flight No</td>
            <td>992</td>
          </tr>
        </tbody>
      </Table>
      <div className='d-flex justify-content-between'>
      <button className='border-0 bg-success text-white p-2  rounded'>Pending</button>
      <button className='border-0 bg-warning text-white p-2  rounded'>Approve?</button>
      </div>
    </div>
    </>
  );
}

export default Details;
