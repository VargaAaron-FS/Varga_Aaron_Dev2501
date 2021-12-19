import styled from "styled-components";
import React from "react";

import MyButton from "../components/buttons/MyButton";

export default function EditProfileForm(props) {
  // Show/hide function for password input
  function showPass() {
    let passInput = document.getElementById("password");
    let passBtn = document.getElementById("passBtn");
    if (passInput.type === "password") {
      passInput.type = "text";
      passBtn.innerText = "Hide";
    } else {
      passInput.type = "password";
      passBtn.innerText = "Show";
    }
  }

  return (
    <PagesContainer>
      <Form onSubmit={props.editMe}>
        <FormGroup>
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormInput
              type="text"
              placeholder="First Name"
              value={props.fName}
              readOnly
            />
          </FormItem>
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormInput
              type="text"
              placeholder="Last Name"
              value={props.lName}
              readOnly
            />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              placeholder="Email"
              value={props.email}
              readOnly
            />
          </FormItem>
          <FormItem>
            <FormLabel>Number</FormLabel>
            <FormInput
              type="tel"
              placeholder="Number"
              value={props.phone}
              readOnly
            />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormInput
              type="text"
              placeholder="Address"
              value={`${props.streetNum} ${props.streetName}`}
              readOnly
            />
          </FormItem>
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormInput
              type="text"
              placeholder="City"
              value={props.city}
              readOnly
            />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>State</FormLabel>
            <FormInput
              type="text"
              placeholder="State"
              value={props.state}
              readOnly
            />
          </FormItem>
          <FormItem>
            <FormLabel>Zip Code</FormLabel>
            <FormInput
              type="number"
              placeholder="Zip Code"
              value={props.zipCode}
              readOnly
            />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormInput
              type="text"
              placeholder="Country"
              value={props.country}
              readOnly
            />
          </FormItem>
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormInput
              id="password"
              type="password"
              placeholder="Password"
              value={props.password}
              readOnly
            />
            <ShowPassButton type="button" id="passBtn" onClick={showPass}>
              Show
            </ShowPassButton>
          </FormItem>
        </FormGroup>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MyButton buttonType="button" buttonTitle="Edit" />
        </div>
      </Form>
    </PagesContainer>
  );
}

const PagesContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  row-gap: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const FormLabel = styled.label`
  display: flex;
  color: #333;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  display: flex;
  font-family: "Montserrat", sans-serif;
  padding: 0.5rem;
  border: 2px solid #eee;
  border-radius: 0.25rem;
`;

const ShowPassButton = styled.button`
  display: flex;
  padding: 0.25rem 0.5rem;
  background: #eee;
  border-radius: 0.25rem;
  border: 1px solid #aaa;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  width: fit-content;
  margin-top: 0.5rem;
  font-weight: 400;
`;
