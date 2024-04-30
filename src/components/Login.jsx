


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'; 
import toast from  'react-hot-toast';
import Loader from './Loader';
// import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
function Login() {
  const [loading , setLoading] = useState(false)
  const [validated, setValidated] = useState(false);
const navigate = useNavigate()
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    event.preventDefault(); // Prevent default form submission

    try {
      const formDataObject = {
        username: form.username.value,
        password: form.password.value
      };
setLoading(true)
      const response = await axios.post('https://ez-group-client-backend.vercel.app/api/v1/auth/login', formDataObject);
      
      console.log('Response:', response.data);
      if (response.status === 200){
        setLoading(false)
        navigate('/details', { state: { data: response.data.user.username } });
        localStorage.setItem('token', response.data.token);
       
        toast.success('Logged In');
       
      } else {
        toast.error('Login failed');
      }

      // Handle success
    } catch (error) {
      setLoading(false)
      console.error('Error:', error);
      toast.error(error.response.data.error);
    }
  };


  return (
    <>
    
      <div className="main container">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
            <Link to='details'>
        <div className="logo" >
                <img src="./logo.png" alt="" width={150} />
              </div>
              </Link>
          <div className="boder" >
         
            <Row className=" " style={{display:'flex', flexFlow:'column', alignItems:'center', height:'90vh', justifyContent:'center'}}>
              
              <div className="head" >
                <h1 style={{display:'flex', flexFlow:'column', alignItems:'center'}} >Login</h1>
              </div>
              <Form.Group as={Col} md="4" controlId="flexvalidationCustom01" style={{width:'39.3333%'}}>
                <Form.Label>Event name</Form.Label>
                <Form.Control required type="text" placeholder="Username" name="username" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02" style={{width:'39.3333%'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" name="password" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02" style={{width:'39.3333%'}}>
              {loading? (
      <div style={{display:'flex', justifyContent:'center'}}>
        <Loader />
      </div>
    ):(
              <Button type="submit" style={{ width: '100%', marginTop: '5%', backgroundColor: '#2cb1bc', border: 'none' ,left:'auto'}}>Login</Button> )}
              </Form.Group>
            </Row>
          </div>
        </Form>
      </div>
     
    </>
  );
}

export default Login;
