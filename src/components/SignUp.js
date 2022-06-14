import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { authentication } from './FirebaseConfig';
import {Link} from "react-router-dom"
var file;

function SignUp() {
  const [otp_sent, set_otp_sent] = useState(false);
  const [otp_matched, set_otp_matched] = useState(false);
 
  
  async function sendOTP(e) {
    e.preventDefault();
    // otp_number = Math.floor(Math.random() * 9000 + 1000);
    // console.log(otp_number);
    // var response = await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=qmPxwWps841RM9YD0STZlavkub2KOzX5CEgdU3oBnAQHt6firj8BRnX0FuOeZhrYkNCaq3c9EzvxTKjS&variables_values=${otp_number}&route=otp&numbers=${phone_number}`)
    // console.log(response);
    if (phone_number === "" || phone_number.length < 10) return;
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
      }
    }, authentication);
    signInWithPhoneNumber(authentication, phone_number, window.recaptchaVerifier).then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      set_otp_sent(true);
    }).catch((error) => {
      console.log(error);
    })
  }

  async function validateOTP(e) {
    e.preventDefault();
    // console.log(entered_otp, otp_number, otp_matched);
    // if (parseInt(entered_otp) === otp_number) {
    //   set_otp_matched(true);
    // }

    window.confirmationResult.confirm(entered_otp).then((result) => {
      // User signed in successfully.
      set_otp_matched(true);
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  var BASE_URL='http://edugeek.pythonanywhere.com'
  const [phone_number,set_phone_number]=useState('');
  const [entered_otp,set_entered_otp]=useState('');
  const [otp_number,set_otp_number]=useState(0);
  const [name,set_name]=useState('');
  const [dob,set_dob]=useState('');
  const [email,set_email]=useState('');
  const [address,set_address]=useState('');
  const [password,set_password]=useState('');
  const [start_date,set_subscription_start_date]=useState('2022-04-03');
  const [end_date,set_subscription_end_date]=useState('2022-04-03');
  async function onSubmit(e){
    e.preventDefault()
  var response= await axios.post(BASE_URL+'/user/',{
    name:name,
    doc:dob,
    email:email,
    phone_number:parseInt(phone_number),
    address:address,
    "image":null,
    start_date:start_date,
    end_date:end_date,
    password: password
  })
  console.log(response);
  
  }
  function screen1() {
    return (
      <div>
        <Container>
          <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">
            Student Signup
          </h1>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Name" />
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    placeholder="+91XXXXXXXXXX"
                    onChange={(e) => {
                      set_phone_number ("+91"+e.target.value);
                    }}
                  />
                </Form.Group>
                <br />
                <Button
                  variant="dark btn-block"
                  type="submit"
                  onClick={sendOTP}
                >
                  Send OTP
                </Button>
              </Form>
            </Col>
          </Row>
        
          <h6 className="mt-5 p-5 text-center text-secondary ">
          Already have an account? <Link to="/login">Login</Link> <br/>Copyright © 2022 Edugeek. All Rights Reserved.
          </h6>
        </Container>
        <div id="recaptcha-container"></div>
      </div>
    );
  }
  function screen2() {
    return (
      <div>
        <Container>
          <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">
            Admin Signup
          </h1>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form>
                <Form.Group controlId="formBasicOTP">
                  <Form.Label> Enter OTP</Form.Label>
                  <Form.Control
                    placeholder="Enter OTP"
                    onChange={(e) => {
                      set_entered_otp(e.target.value);
                    }}
                  />
                </Form.Group>
                <br />

                <Button
                  variant="dark btn-block"
                  type="submit"
                  onClick={validateOTP}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <h6 className="mt-5 p-5 text-center text-secondary ">
          Already have an account? <Link to="/login">Login</Link> <br/>Copyright © 2022 Edugeek. All Rights Reserved.
          </h6>
        </Container>
      </div>
    );
  }

  function screen3() {
    return (
      <div>
        <Container>
          <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">
            Admin Signup
          </h1>
          <Row className="mt-5">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form>
                <Form.Group controlId="name">
                  <Form.Label> Name</Form.Label>
                  <Form.Control onChange={(e) => {
                      set_name(e.target.value);
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="dob">
                  <Form.Label> Date of Birth</Form.Label>
                  <Form.Control onChange={(e) => {
                      set_dob(e.target.value);
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="email">
                  <Form.Label> Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com"  onChange={(e) => {
                      set_email(e.target.value);
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Choose Image</Form.Label>
                  <Form.Control type="file" onChange={(e) => {
                      file = e.target.value;
                    }} />
                </Form.Group>
                <br />
                <Form.Group controlId="address">
                  <Form.Label> Address</Form.Label>
                  <Form.Control onChange={(e) => {
                      set_address(e.target.value);
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="start_date">
                  <Form.Label> Subcription start date</Form.Label>
                  <Form.Control onChange={(e) => {
                      set_subscription_start_date(e.target.value);
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="end_date">
                  <Form.Label> Subscription end date</Form.Label>
                  <Form.Control onChange={(e) => {
                      set_subscription_end_date(e.target.value);
                    }}/>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword1">
                  <Form.Label> Create Password</Form.Label>
                  <Form.Control type="password" onChange={(e) => {
                      set_password(e.target.value);
                    }} />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword2">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <br />
                <Button variant="dark btn-block" type="submit" onClick={onSubmit}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>

          <h6 className="mt-5 p-5 text-center text-secondary ">
          Already have an account? <a><Link to="/login">Login</Link></a> <br/>Copyright © 2022 Edugeek. All Rights Reserved.
          </h6>
        </Container>
      </div>
    );
  }

  return otp_sent ? (otp_matched ? screen3() : screen2()) : screen1();
}

export default SignUp;
