import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Navbar from './Navbar';
import Sideabr from './Sideabr';

function Update() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    originalCountry: yup.string().required(),
    currentCountry: yup.string().required(),
    checkInDate: yup.date().required(),
    checkInTime: yup.string().required(),
    checkOutDate: yup.date().required(),
    checkOutTime: yup.string().required(),
    totalParticipants: yup.number().required().positive().integer(),
    arrivalDate: yup.date().required(),
    arrivalTime: yup.string().required(),
    arrivalFlightNo: yup.string().required(),
    departureDate: yup.date().required(),
    departureTime: yup.string().required(),
    departureFlightNo: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  

  return (
    <>   
    <Navbar />
   
    <div className="container mt-4">
     <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        originalCountry: '',
        currentCountry: '',
        checkInDate: '',
        checkInTime: '',
        checkOutDate: '',
        checkOutTime: '',
        totalParticipants: '',
        arrivalDate: '',
        arrivalTime: '',
        arrivalFlightNo: '',
        departureDate: '',
        departureTime: '',
        departureFlightNo: '',
        file: null,
        terms: false,
      }}
      
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
         
         <Row className="justify-content-center">
  {/* First Name */}
  <Form.Group as={Col} md="6" controlId="validationFormikFirstName" className="position-relative d-flex mb-5 ">
    <Form.Label className='w-50'>First Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="First Name"
      name="firstName"
      value={values.firstName}
      onChange={handleChange}
      isInvalid={!!errors.firstName}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.firstName}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Last Name */}
  <Form.Group as={Col} md="6" controlId="validationFormikLastName" className="position-relative d-flex mb-5">
    <Form.Label className='w-50'>Last Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Last Name"
      name="lastName"
      value={values.lastName}
      onChange={handleChange}
      isInvalid={!!errors.lastName}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.lastName}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Email */}
  <Form.Group as={Col} md="6" controlId="validationFormikEmail" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Email</Form.Label>
    <Form.Control
      type="email"
      placeholder="Email"
      name="email"
      value={values.email}
      onChange={handleChange}
      isInvalid={!!errors.email}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.email}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Original Country */}
  <Form.Group as={Col} md="6" controlId="validationFormikOriginalCountry" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Original Country</Form.Label>
    <Form.Control
      type="text"
      placeholder="Original Country"
      name="originalCountry"
      value={values.originalCountry}
      onChange={handleChange}
      isInvalid={!!errors.originalCountry}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.originalCountry}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Current Country */}
  <Form.Group as={Col} md="6" controlId="validationFormikCurrentCountry" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Current Country</Form.Label>
    <Form.Control
      type="text"
      placeholder="Current Country"
      name="currentCountry"
      value={values.currentCountry}
      onChange={handleChange}
      isInvalid={!!errors.currentCountry}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.currentCountry}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Check In Date */}
  <Form.Group as={Col} md="6" controlId="validationFormikCheckInDate" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Check In Date</Form.Label>
    <Form.Control
      type="date"
      name="checkInDate"
      value={values.checkInDate}
      onChange={handleChange}
      isInvalid={!!errors.checkInDate}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.checkInDate}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Check In Time */}
  <Form.Group as={Col} md="6" controlId="validationFormikCheckInTime" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Check In Time</Form.Label>
    <Form.Control
      type="time"
      name="checkInTime"
      value={values.checkInTime}
      onChange={handleChange}
      isInvalid={!!errors.checkInTime}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.checkInTime}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Check Out Date */}
  <Form.Group as={Col} md="6" controlId="validationFormikCheckOutDate" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Check Out Date</Form.Label>
    <Form.Control
      type="date"
      name="checkOutDate"
      value={values.checkOutDate}
      onChange={handleChange}
      isInvalid={!!errors.checkOutDate}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.checkOutDate}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Check Out Time */}
  <Form.Group as={Col} md="6" controlId="validationFormikCheckOutTime" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Check Out Time</Form.Label>
    <Form.Control
      type="time"
      name="checkOutTime"
      value={values.checkOutTime}
      onChange={handleChange}
      isInvalid={!!errors.checkOutTime}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.checkOutTime}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Total Participants */}
  <Form.Group as={Col} md="6" controlId="validationFormikTotalParticipants" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Total Participants</Form.Label>
    <Form.Control
      type="number"
      placeholder="Total Participants"
      name="totalParticipants"
      value={values.totalParticipants}
      onChange={handleChange}
      isInvalid={!!errors.totalParticipants}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.totalParticipants}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Arrival Date */}
  <Form.Group as={Col} md="6" controlId="validationFormikArrivalDate" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Arrival Date</Form.Label>
    <Form.Control
      type="date"
      name="arrivalDate"
      value={values.arrivalDate}
      onChange={handleChange}
      isInvalid={!!errors.arrivalDate}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.arrivalDate}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Arrival Time */}
  <Form.Group as={Col} md="6" controlId="validationFormikArrivalTime" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Arrival Time</Form.Label>
    <Form.Control
      type="time"
      name="arrivalTime"
      value={values.arrivalTime}
      onChange={handleChange}
      isInvalid={!!errors.arrivalTime}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.arrivalTime}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Arrival Flight No */}
  <Form.Group as={Col} md="6" controlId="validationFormikArrivalFlightNo" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Arrival Flight No</Form.Label>
    <Form.Control
      type="text"
      placeholder="Arrival Flight No"
      name="arrivalFlightNo"
      value={values.arrivalFlightNo}
      onChange={handleChange}
      isInvalid={!!errors.arrivalFlightNo}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.arrivalFlightNo}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Departure Date */}
  <Form.Group as={Col} md="6" controlId="validationFormikDepartureDate" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Departure Date</Form.Label>
    <Form.Control
      type="date"
      name="departureDate"
      value={values.departureDate}
      onChange={handleChange}
      isInvalid={!!errors.departureDate}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.departureDate}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Departure Time */}
  <Form.Group as={Col} md="6" controlId="validationFormikDepartureTime" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Departure Time</Form.Label>
    <Form.Control
      type="time"
      name="departureTime"
      value={values.departureTime}
      onChange={handleChange}
      isInvalid={!!errors.departureTime}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.departureTime}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Departure Flight No */}
  <Form.Group as={Col} md="6" controlId="validationFormikDepartureFlightNo" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Departure Flight No</Form.Label>
    <Form.Control
      type="text"
      placeholder="Departure Flight No"
      name="departureFlightNo"
      value={values.departureFlightNo}
      onChange={handleChange}
      isInvalid={!!errors.departureFlightNo}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.departureFlightNo}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

<Row className="justify-content-center">
  {/* Remarks */}
  <Form.Group as={Col} md="6" controlId="validationFormikRemarks" className="position-relative d-flex mb-5">
    <Form.Label  className='w-50'>Remarks</Form.Label>
    <Form.Control
      as="textarea"
      placeholder="Remarks"
      name="remarks"
      value={values.remarks}
      onChange={handleChange}
      isInvalid={!!errors.remarks}
    />
    <Form.Control.Feedback type="invalid" tooltip>
      {errors.remarks}
    </Form.Control.Feedback>
  </Form.Group>
</Row>

          
          
          <Button type="submit" className='btn'>Update </Button>
        </Form>
      )}
    </Formik>
    </div>
    </>

  );
}

export default Update;