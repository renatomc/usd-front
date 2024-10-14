import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #ffffff; 
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  max-width: 600px;
  margin: 40px auto; 
  border: 2px solid #f7f7f7; 
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: #333333;
    border-bottom: 2px solid #f7f7f7; 
    display: inline-block;
    padding-bottom: 5px; 
  }
`;

export const DetailText = styled.p`
  font-size: 1.2rem;
  color: #666666;
  line-height: 1.6;
  margin: 10px 0;
`;

export const ButtonBack = styled.button`
  background-color: #008cff;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Photo = styled.img`
  width: 12.5rem;
  height: fit-content;
`;
