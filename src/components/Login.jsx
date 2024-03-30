


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import axios from 'axios'; // Import Axios
import toast from  'react-hot-toast';
// import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
function Login() {
//   const [validated, setValidated] = useState(false);
// const navigate = useNavigate()
//   const handleSubmit = async (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//       setValidated(true);
//       return;
//     }

//     event.preventDefault(); // Prevent default form submission

//     try {
//       const formDataObject = {
//         username: form.username.value,
//         password: form.password.value
//       };

//       const response = await axios.post('http://localhost:5000/api/v1/auth/login', formDataObject);
      
//       console.log('Response:', response.data);
//       if (response.status === 200){
//         navigate('/')
//         localStorage.setItem('token', response.data.token);
       
//         toast.success('Logged In');
       
//       } else {
//         toast.error('Login failed');
//       }

//       // Handle success
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Something went wrong');
//     }
//   };


  return (
    <>
      <div className="main container">
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
        <Form >
        <div className="logo" >
                <img src="./logo.png" alt="" width={150} />
              </div>
          <div className="boder" >
         
            <Row className=" " style={{display:'flex', flexFlow:'column', alignItems:'center', height:'90vh', justifyContent:'center'}}>
              
              <div className="head" >
                <h1 style={{display:'flex', flexFlow:'column', alignItems:'center'}} >Login</h1>
              </div>
              <Form.Group as={Col} md="4" controlId="flexvalidationCustom01" style={{width:'39.3333%'}}>
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Username" name="username" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02" style={{width:'39.3333%'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" name="password" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02" style={{width:'39.3333%'}}>
              <Button type="submit" style={{ width: '100%', marginTop: '5%', backgroundColor: '#2cb1bc', border: 'none' }}>Login</Button>
              </Form.Group>
            </Row>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
