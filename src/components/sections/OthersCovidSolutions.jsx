import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import { SFBackgroundVideo } from "../../styles/video/style.jsx";
import { Grid } from "antd";
import colors from "../../constants/colors.jsx";
import CardTemplate from "../widgets/CardTemplate.jsx";
import imageMask from "../../assets/img-mask-identification.png";
import imageTemperature from "../../assets/img-body-temperature.png";
import videoBg from "../../assets/bg-video-tecnology.mp4";

const OthersCovidSolutions = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFSection
      id={id}
      height={breakpoint.lg ? "70vh" : "auto"}
      backgroundColor={colors.overlay}
      breakpoint={breakpoint}
      as="section"
    >
      <SFBackgroundVideo
        src={videoBg}
        position="absolute"
        autoPlay
        loop
        muted
      />

      <SFRow
        height="100%"
        justify="center"
        align="top"
        margin={breakpoint.lg ? "-15% 0 15% 0" : "10% 0"}
        gutter={[16, 16]}
      >
        <SFCol
          height="auto"
          alignContent="center"
          breakpoint={breakpoint}
          xs={20}
          sm={20}
          md={20}
          lg={11}
          xl={11}
        >
          <CardTemplate
            title={"Identificação de máscaras"}
            text={
              "O SafeSpot System tem capacidade de reconhecer o cliente desprovido de máscara " +
              "de proteção.\nCom posse dessa informação, o empreendedor tem disponibilidade à uma " +
              "série de opções de procedimentos, como o bloqueio automático de uma porta de entrada, " +
              "acionamento de um alerta luminoso ou mensagem de texto em tela, ou ainda, direcionar " +
              "um membro da equipe para as devidas providências."
            }
            image={imageMask}
            alt="Identificação de máscara"
          />
        </SFCol>

        <SFCol
          height="auto"
          alignContent="center"
          breakpoint={breakpoint}
          xs={20}
          sm={20}
          md={20}
          lg={11}
          xl={11}
        >
          <CardTemplate
            title={"Controle de temperatura corporal"}
            text={
              "Como parte da solução no trabalho de combate ao COVID-19, a SafeSpot possui o " +
              "detector de temperatura que através de uma câmera especializada detecta a temperatura " +
              "corporal e emite um aviso ao detectar qualquer inconformidade com os padrões." +
              "\nPara trazer uma melhor experiência a mesma pode trabalhar integrada com os módulos: " +
              "Distanciamento Inteligente e Identificação de máscaras."
            }
            image={imageTemperature}
            alt="Controle de temperatura corporal"
          />
        </SFCol>
      </SFRow>
    </SFSection>
  );
};

export default OthersCovidSolutions;
