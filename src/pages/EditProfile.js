import styled from "styled-components";
import React, { useState, useEffect } from "react";

import MyAvatar from "../components/MyAvatar";
import EditProfileForm from "../components/EditProfileForm";

export default function EditProfile(props) {
  // Declare states
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const [user] = data.results;

      setuserData(user);
    }
    fetchAPI();
  }, []);

  return (
    <PagesContainer>
      <PageHeaderContainer>
        <PageTitle>Edit Profile</PageTitle>
        <AvatarContainer>
          <MyAvatar width="100px" height="100px" />
        </AvatarContainer>
      </PageHeaderContainer>
      {userData && <EditProfileForm
                    avatar={userData.picture.large}
                    fName={userData.name.first}
                    lName={userData.name.last}
                    username={userData.login.username}
                    street={userData.location.street.number}
                    state={userData.location.state}
                    zipCode={userData.location.postcode}
                    email={userData.email}
                    phone={userData.phone}
      />}
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

const AvatarContainer = styled.div`
  width: 100px;
  position: relative;
  cursor: pointer;
`;
