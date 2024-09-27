import {
  SFSection,
  SFContent,
  SFOverlay,
} from "../../styles/content/style.jsx";
import {
  SFSecondaryTitle,
  SFParagraph,
} from "../../styles/typography/style.jsx";
import { SFBackgroundVideo } from "../../styles/video/style.jsx";
import { Grid } from "antd";
import colors from "../../constants/colors.jsx";
import CustomTriangleDividerBottom from "../widgets/CustomTriangleDividerBottom.jsx";
import videoBg from "../../assets/bg-video-skin-cancer.mp4";
import staticBackground from "../../assets/bck-skin-cancer.png";

const SkinCancer = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFSection
      id={id}
      alignItems="left"
      backgroundImage={staticBackground}
      as="section"
    >
      {!breakpoint.sm && <SFOverlay style={{ zIndex: "-1" }} />}

      {breakpoint.md && (
        <SFBackgroundVideo
          src={videoBg}
          position="absolute"
          autoPlay
          loop
          muted
          controls={false}
        />
      )}

      <SFContent padding={breakpoint.xl ? "0 0 0 9%" : "15% 10% 0 10%"}>
        <SFSecondaryTitle
          textAlign="left"
          color={breakpoint.xl ? "black" : colors.primary}
          breakpoint={breakpoint}
        >
          Skin Cancer
        </SFSecondaryTitle>
      </SFContent>

      <SFContent
        width={breakpoint.xxl ? "40%" : "80%"}
        padding={breakpoint.xl ? "2% 5% 2% 9%" : "5% 10% 10% 10%"}
        backgroundColor={breakpoint.xl && colors.overlay}
      >
        <SFParagraph textAlign="left" breakpoint={breakpoint}>
          A solução consiste em um aplicativo para detecção de câncer de pele,
          no seus mais diversos tipos. Através do aplicativo o usuário tem
          acesso a funcionalidade que utiliza a câmera do dispositivo para
          scanear a pele e posteriormente envia-la para que a mesma seja
          processada por um modelo treinado o qual exibe uma predição. Durante a
          fase de aprendizado do algoritmo, os especialistas forneceram suporte
          técnico para rotular as imagens de acordo com a presença do câncer de
          pele ou não.
        </SFParagraph>
      </SFContent>

      {breakpoint.xxl && <CustomTriangleDividerBottom />}
    </SFSection>
  );
};

export default SkinCancer;
