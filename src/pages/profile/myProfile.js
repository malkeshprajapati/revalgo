import React, { useEffect, useState } from "react";
import useApiRequest from "../../htttpClient";
import {
  Image,
  Info,
  ProfileCard,
  ProfileContainer,
  SectionTitle,
} from "../../styles/profileStyle";
import { useLocation, useParams } from "react-router-dom";

const MyProfile = () => {
  const [user, setUser] = useState();
  const apiRequest = useApiRequest();
  const location = useLocation();
  const { id } = useParams();

  const fetchProfileData = async () => {
    const data = await apiRequest(
      `user/${id && location.pathname !== "/profile" ? id : 1}`
    );
    setUser(data);
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchProfileData();
  }, [location.pathname]);

  return (
    <>
      {user && (
        <ProfileContainer>
          <ProfileCard>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <div>
                <h2
                  style={{ margin: "0" }}
                >{`${user.firstName} ${user.lastName}`}</h2>
                <Info>Age: {user.age}</Info>
                <Info>Gender: {user.gender}</Info>
                <Info>Blood Group: {user.bloodGroup}</Info>
              </div>
            </div>
          </ProfileCard>

          <ProfileCard>
            <SectionTitle>Contact</SectionTitle>
            <Info>Email: {user.email}</Info>
            <Info>Phone: {user.phone}</Info>
          </ProfileCard>

          <ProfileCard>
            <SectionTitle>Address</SectionTitle>
            <Info>
              {user.address.address}, {user.address.city}, {user.address.state}{" "}
              {user.address.postalCode}, {user.address.country}
            </Info>
          </ProfileCard>

          <ProfileCard>
            <SectionTitle>Company</SectionTitle>
            <Info>Department: {user.company.department}</Info>
            <Info>Title: {user.company.title}</Info>
            <Info>Company: {user.company.name}</Info>
          </ProfileCard>

          <ProfileCard>
            <SectionTitle>Bank</SectionTitle>
            <Info>Card Type: {user.bank.cardType}</Info>
            <Info>
              Card Number: **** **** **** {user.bank.cardNumber.slice(-4)}
            </Info>
            <Info>Expires: {user.bank.cardExpire}</Info>
          </ProfileCard>

          <ProfileCard>
            <SectionTitle>Crypto</SectionTitle>
            <Info>Coin: {user.crypto.coin}</Info>
            <Info>Wallet: {user.crypto.wallet}</Info>
          </ProfileCard>

          <ProfileCard>
            <SectionTitle>Other</SectionTitle>
            <Info>Role: {user.role}</Info>
            <Info>University: {user.university}</Info>
            <Info>SSN: ***-**-{user.ssn.slice(-4)}</Info>
          </ProfileCard>
        </ProfileContainer>
      )}
    </>
  );
};

export default MyProfile;
