import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';

function Data() {
  
  return (
    <>
      <Navbar />
      <div className="main container" style={{
        width: 'fit-content',  padding: '30px', boxShadow: 'rgba(11, 13, 0, 0.2) 1px 11px 23px 10px', border: '2px solid darkcyan', borderRadius: '14px'
      }}>
        <div className=" container  d-flex justify-content-between mb-3 w-100  ">
          <h3 className='w-50'>CheckIn Error</h3>
          <Form.Select aria-label="Default select example" className='w-50'>
            <option>Select a value</option>
            <option value="1">DHL pays for all extra days </option>
            <option value="2">DHL pay for 1 extra day</option>
            <option value="3">DHL will pay for early checkIn</option>
            <option value="4">Guest will pay for extra days</option>
            <option value="5">Guest will pay for 1 extra day</option>
            <option value="6">Guest will pay forearly checkIn</option>
            <option value="7">DHL pays regular rules</option>


          </Form.Select>
        </div>
        <div className=" container  d-flex justify-content-between mb-3 w-100 ">
          <h3 className='w-50'>CheckOut Error</h3>
          <Form.Select aria-label="Default select example" className='w-50'>
           
            <option>Select a value</option>
            <option value="1">DHL pays for all extra days </option>
            <option value="2">DHL pay for 1 extra day</option>
            <option value="3">DHL will pay for early checkIn</option>
            <option value="4">Guest will pay for extra days</option>
            <option value="5">Guest will pay for 1 extra day</option>
            <option value="6">Guest will pay forearly checkIn</option>
            <option value="7">DHL pays regular rules</option>

          </Form.Select>
        </div>
        <div className=" container  d-flex justify-content-between mb-3 w-100 ">
          <h3 className='w-50'>Extra Guests</h3>
          <Form.Select aria-label="Default select example" className='w-50'>
           
            <option>Select a value</option>
            <option value="1">DHL pays for all extra days </option>
            <option value="2">DHL pay for 1 extra day</option>
            <option value="3">DHL will pay for early checkIn</option>
            <option value="4">Guest will pay for extra days</option>
            <option value="5">Guest will pay for 1 extra day</option>
            <option value="6">Guest will pay forearly checkIn</option>
            <option value="7">DHL pays regular rules</option>

          </Form.Select>
        </div>
        <div className=" container  d-flex justify-content-between mb-3 w-100 ">
          <h3 className='w-50'>During Event Error</h3>
          <Form.Select aria-label="Default select example" className='w-50'>
            <option>Select a value</option>
            <option value="1">DHL pays for all extra days </option>
            <option value="2">DHL pay for 1 extra day</option>
            <option value="3">DHL will pay for early checkIn</option>
            <option value="4">Guest will pay for extra days</option>
            <option value="5">Guest will pay for 1 extra day</option>
            <option value="6">Guest will pay forearly checkIn</option>
            <option value="7">DHL pays regular rules</option>

          </Form.Select>
        </div>
        <div className=" container  d-flex justify-content-between mb-3 w-100 ">
          <h3 className='w-50'>   Remarks</h3>
          <input type='text' className='w-50' style={{border: '2px solid darkcyan', borderRadius: '14px'}}></input>
        </div>
        <button>Save</button>
      </div>
    </>
  );
}

export default Data;