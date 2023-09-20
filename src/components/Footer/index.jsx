import styled from "styled-components";
import logo from "../../assets/img/logo_aluraflix.png";

const ContainerFooter = styled.div`
  display: flex;
  padding: 2.5rem 3.5rem;
  background: rgba(0, 0, 0, 0.9);
  border-top: 5px solid #2a7ae4;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #2a7ae4;
  text-align: center;

  @media screen and (min-width: 0) and (max-width: 767px) {
    padding: 2rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 2rem 0.8rem;
    p,
    span {
      font-size: 0.6rem;
    }
  }
`;

const Logo = styled.img`
  width: 250px;
  @media screen and (min-width: 0) and (max-width: 767px) {
    width: 180px;
  }
`;

const P = styled.p`
  margin: 1rem 0 0;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #ffffff; /* Color del texto del enlace */
  font-weight: bold; /* Puedes ajustar el estilo de fuente según tus preferencias */

  &:hover {
    color: #a3c3f3; /* Cambia el color al pasar el cursor sobre el enlace */
  }
`;

function Footer() {
  return (
    <footer>
      <ContainerFooter>
        <Logo src={logo} alt="Logo de AluraFlix" />
        <P>© Copyright 2023 <Anchor href="https://github.com/carlosalegriam" target="_blank">Developer by @calegriam</Anchor></P>
        <br></br>
      </ContainerFooter>
    </footer>
  );
}
export default Footer;
