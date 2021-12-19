import styled from "styled-components";
import React, { useState, useEffect } from "react";

import MyAvatar from "../components/MyAvatar";
import EditProfileForm from "../components/EditProfileForm";

export default function EditProfile(props) {
  // Declare states
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      // Grab API data
      const res = await fetch("https://randomuser.me/api/");
      // Convert it to usable data in JS
      const data = await res.json();
      // Store data
      const [user] = data.results;
      // Set data/update data
      setuserData(user);
    }
    fetchAPI();
  }, []);

  return (
    <PagesContainer>
      <PageHeaderContainer>
        <PageTitle>Edit Profile</PageTitle>
        {userData && (
          <MyAvatar
            avatar={userData.picture.large}
            width="100px"
            height="100px"
          />
        )}
      </PageHeaderContainer>
      {/* Passing API data through props */}
      {userData && (
        <EditProfileForm
          fName={userData.name.first}
          lName={userData.name.last}
          username={userData.login.username}
          streetNum={userData.location.street.number}
          streetName={userData.location.street.name}
          city={userData.location.city}
          state={userData.location.state}
          zipCode={userData.location.postcode}
          country={userData.location.country}
          email={userData.email}
          phone={userData.phone}
          password={userData.login.password}
        />
      )}
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
