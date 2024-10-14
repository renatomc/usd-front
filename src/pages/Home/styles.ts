import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Title = styled.h1`
  color: #008cff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableData = styled.td`
  padding: 0.75rem 0.9375rem;
  text-align: left;
`;

export const TableHeader = styled.th`
  padding: 0.75rem 0.9375rem;
  text-align: left;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 2px solid #f7f7f7;
  border-radius: 8px;
  overflow: hidden;

  th {
    background-color: #d6d0d0;
    border-bottom: 2px solid #f7f7f7;
  }

  tbody tr {
    border-bottom: 1px solid #f7f7f7;
    transition: background-color 0.3s ease;
  }

  tbody tr:hover {
    background-color: #f7f7f7;
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`;

export const ButtonDetails = styled.button`
  border: none;
  padding: 8px;
  color: #ffff;
  background: #008cff;
  border-radius: 0.5rem;
  cursor: pointer;
`;


