import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 0;
  background-color: #f7f7f7;
  width: 100%;
  padding: 1rem 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Title = styled.h1``;

export const Image = styled.img`
  width: 7.5rem;
  height: 5rem;
`;
