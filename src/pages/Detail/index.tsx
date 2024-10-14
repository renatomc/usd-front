import { useEffect, useState } from "react";
import { getDetail } from "../../services/dataServices";
import { Data } from "../../types/dataType";
import { useParams } from "react-router-dom";

import { Container, TitleWrapper, DetailText, ButtonBack, Photo } from "./styles";

function Detail() {
  const [details, setDetails] = useState<Data[0]>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    async function fetchDetail() {
      const responseDataDetail = await getDetail(id!);
      setDetails(responseDataDetail);
    }
    fetchDetail();
  }, [id]);

  return (
    <Container className="content">
      <TitleWrapper>
        <ButtonBack onClick={() => window.history.back()}>{`< `}Voltar</ButtonBack>
        <h1>Detalhes</h1>
      </TitleWrapper>
      <DetailText>Nome: {details?.name}</DetailText>
      <DetailText>Altura: {details?.height}</DetailText>
      <DetailText>Sexo: {details?.gender}</DetailText>
      <Photo src={details?.image} alt={`${details?.name} imagem`} />
    </Container>
  );
}

export default Detail;
