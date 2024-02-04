import React, { useState } from "react";
import myImage from "../images/gmail.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Home() {
    const [email, setEmail] = useState("");

    const sendEmail = async(e) => {
        e.preventDefault();

        const res = await fetch("/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });
        
        console.log(res);
    }

  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content">
          <h2>Send Email with Kobo Mail</h2>
          <img
            src={myImage}
            alt="not found"
            className="mx-3"
            style={{ width: "50px" }}
          />
        </div>
        <div className="d-flex justify-content">
          <Form className="mt-2 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your Email</Form.Label>
              <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={sendEmail}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Home;
