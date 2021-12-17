import React from "react";
import styled from "styled-components";

import MyAvatar from "../components/MyAvatar";
import MyButton from "../components/buttons/MyButton";

import { RiEditBoxFill } from "react-icons/ri";

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
            <FormInput type="text" placeholder="First Name" />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormInput type="text" placeholder="First Name" />
          </FormItem>
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormInput type="text" placeholder="First Name" />
          </FormItem>
        </FormGroup>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MyButton buttonType="submit" buttonTitle="Submit" />
        </div>
      </Form>
    </PagesContainer>
  );
}

const PagesContainer = styled.div`
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
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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
