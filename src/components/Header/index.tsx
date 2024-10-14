import Logo from '../../assets/images/logo.png';

import { Container, Title, Image } from "./styles";

function Header() {
  return (
    <Container>
      <Image src={Logo}   />
      <Title>Tecnologia</Title>
    </Container>
  );
}

export default Header;