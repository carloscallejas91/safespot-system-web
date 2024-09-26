import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import {
  SFSecondaryTitle,
  SFParagraph,
} from "../../styles/typography/style.jsx";
import { SFBackgroundVideo } from "../../styles/video/style.jsx";
import { Grid } from "antd";
import colors from "../../constants/colors.jsx";
import CustomTriangleDividerTop from "../widgets/CustomTriangleDividerTop.jsx";
import videoBg from "../../assets/bg-video-smart-distancing.mp4";

const SmartDistancing = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFSection
      id={id}
      backgroundColor={colors.overlay}
      breakpoint={breakpoint}
      as="section"
    >
      {breakpoint.lg && <CustomTriangleDividerTop />}

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
        margin={breakpoint.lg ? "0" : "10% 0"}
        gutter={[16, 16]}
      >
        <SFCol
          alignContent="center"
          breakpoint={breakpoint}
          xs={20}
          sm={20}
          md={20}
          lg={10}
          xl={10}
        >
          <SFSecondaryTitle
            textAlign="left"
            color={colors.primary}
            breakpoint={breakpoint}
          >
            Distanciamento
            <br />
            inteligente
          </SFSecondaryTitle>
        </SFCol>
        <SFCol
          alignContent="center"
          breakpoint={breakpoint}
          xs={20}
          sm={20}
          md={20}
          lg={10}
          xl={10}
        >
          <SFParagraph textAlign="left" breakpoint={breakpoint}>
            Foi idealizada para trazer maior conforto e segurança aos
            consumidores, proporcionando avisos de ciência em ambientes com
            quantidade de pessoas acima do suportado para as condições
            estabelecidas (distanciamento social).
            <br />
            <br />
            Isto se dá por visão computacional através de algoritmos de
            inteligência artificial com a busca por aglomerações em tempo real e
            aviso luminoso na área concorrida.
            <br />
            <br />E para os empreendedores, proporciona a indicação de respeito
            pelo cliente e condições ideais para comercializações seguras. O
            sistema de visão computacional da SafeSpot é customizado para a
            dinâmica de funcionamento do estabelecimento e seu layout, atendendo
            às exigências sanitárias locais e recomendações da OMS.
          </SFParagraph>
        </SFCol>
      </SFRow>
    </SFSection>
  );
};

export default SmartDistancing;
