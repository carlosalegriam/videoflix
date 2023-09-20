import styled from "styled-components";
import banner from "../../assets/img/background_main.png";

const BannerContainer = styled.div`
  background: url(${banner}) no-repeat center / cover;
  padding: 4.5rem 4rem;
  display: flex;
  align-items: flex-end;
  height: 55vh;
  gap: 4rem;
  position: relative;
  justify-content: center;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding: 2rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 2rem 0.8rem;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  gap: 2.5rem;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    gap: 1rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    gap: 0.5rem;
    background: rgba(83, 88, 93, 0.7);
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`;

const BannerTitle = styled.h2`
  text-align: center;
  font-size: 4.6rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   &:hover {
    color: #88b1f5; /* Puedes ajustar el color según tus preferencias */
  }
  margin-bottom: 0;
  @media screen and (min-width: 0) and (max-width: 1023px) {
    text-align: center;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const BannerP = styled.p`
  font-size: 1.2rem;
  color:  #b6d4f4;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  margin-top: 0;
  text-align: center;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    font-size: 1rem;
    margin: 0;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.6rem;
    margin: 0;
  }
`;

function Banner() {
  return (
    <section>
      <BannerContainer>
        <BannerText>
          <BannerTitle>Aluraflix</BannerTitle>
          <BannerP>
          ¡Bienvenido a un espacio donde la curiosidad y la innovación convergen!"
          La plataforma web se erige como el destino principal para una extensa colección de videos relacionados con diversos aspectos de la programación, gestión, innovación, diseño de experiencia de usuario (UX), movilidad y mucho más. Nos dedicamos a proporcionarte contenido sumamente valioso que te permitirá aprender, encontrar inspiración y mantenerte al día en el emocionante mundo de la tecnología y la creatividad. Te invitamos a explorar nuestra plataforma y unirte a una comunidad apasionada que comparte un compromiso inquebrantable con el aprendizaje constante. 
          </BannerP>
        </BannerText>
      </BannerContainer>
    </section>
  );
}

export default Banner;
