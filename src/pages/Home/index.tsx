import { useEffect, useState } from "react"
import { getData } from "../../services/dataServices";
import { Data } from "../../types/dataType";
import { useNavigate } from "react-router-dom";

import { Container, Table, TableBody, TableData, TableHead, TableHeader, TableRow, Title, ButtonDetails } from "./styles";

function Home() {
  const [data, setData] = useState<Data>([] as Data);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const responseData = await getData();
      setData(responseData);
    }
    fetchData();
  }, []);

  function handleClickDetail(id: number | string) {
    navigate(`/detail/${id}`);
  }

  return (
    <>
     <Container className="content">
      <Title>Personagens</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Ação</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 && data.map(dt => (
            <TableRow key={dt.id}>
              <TableData>{dt.name}</TableData>
              <TableData onClick={() => handleClickDetail(dt.id)}>
                <ButtonDetails>Detalhes</ButtonDetails>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </Container>
    </>
  )
}

export default Home
