import styled from "styled-components";

const ProfileContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const SectionTitle = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  color: #343a40;
  border-bottom: 2px solid #639567;
  padding-bottom: 5px;
`;

const Info = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #495057; /* Darker text color */
`;

export { ProfileContainer, Image, SectionTitle, ProfileCard, Info };
