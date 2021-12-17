import React from "react";
import styled from "styled-components";

import MyAvatar from "../components/MyAvatar";
import MyButton from "../components/buttons/MyButton";

export default function EditProfile() {
  return (
    <PagesContainer>
      <PageHeaderContainer>
        <PageTitle>Edit Profile</PageTitle>
        <AvatarContainer>
          <MyAvatar width="100px" height="100px" />
        </AvatarContainer>
      </PageHeaderContainer>
      <Form>
        <FormGroup>
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormInput type="text" placeholder="First Name" />
          </FormItem>
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormInput type="text" placeholder="Last Name" />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" placeholder="Email" />
          </FormItem>
          <FormItem>
            <FormLabel>Number</FormLabel>
            <FormInput type="tel" placeholder="Number" />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormInput type="text" placeholder="Address" />
          </FormItem>
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormInput type="text" placeholder="City" />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>State</FormLabel>
            <FormInput type="text" placeholder="State" />
          </FormItem>
          <FormItem>
            <FormLabel>Zip Code</FormLabel>
            <FormInput type="number" placeholder="Zip Code" />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormInput type="text" placeholder="Country" />
          </FormItem>
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" placeholder="Password" />
          </FormItem>
        </FormGroup>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MyButton buttonType="submit" buttonTitle="Save" />
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
`;

const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
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

const AvatarContainer = styled.div`
  width: 100px;
  position: relative;
  cursor: pointer;
`;
